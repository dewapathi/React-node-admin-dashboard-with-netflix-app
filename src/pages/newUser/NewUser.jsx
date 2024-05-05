import { useContext, useState } from "react";
import "./newUser.css";
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createUser } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [userReady, setUserReady] = useState(false);

  const uploadProfilePic = async (items) => {
    setIsLoading(true);
    try {
      for (const item of items) {
        const fileName = new Date().getTime() + item.label + item.file.name;
        const storageRef = ref(storage, `/profilePictures/${fileName}`);
        const snapshot = await uploadBytes(storageRef, item.file);
        console.log("Upload is complete for:", fileName);
        const url = await getDownloadURL(snapshot.ref);
        setUser((prev) => ({ ...prev, [item.label]: url }));
      }
    } catch (err) {
      console.error('Error during upload:', err);
    } finally {
      setIsLoading(false);
    }
  };


  const handleUpload = (e) => {
    e.preventDefault();
    uploadProfilePic([
      { file: profilePic, label: "profilePic" }
    ])
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log('value', value);
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
    history.push("/users");
  }

  console.log('user', user);

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            id="username"
            type="text"
            placeholder="john"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Profile picture</label>
          <input
            id="profilePic"
            type="file"
            name="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
            style={{ border: "none" }} />
        </div>
        {/* <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div> */}
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>IsAdmin</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
          >
            <option>User type</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <button className="newUserButton" onClick={handleSubmit}>Create</button>
        <button className="newUserButton" onClick={handleUpload}>{isLoading ? "Uploading....." : "Upload"}</button>
      </form>
    </div>
  );
}
