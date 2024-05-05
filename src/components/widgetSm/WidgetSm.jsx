import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true",
          { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjkzNzY0ZDdhMzRlYjI0ZjE0OGM4ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDIxODAyNSwiZXhwIjoxNzE0NjUwMDI1fQ.Ci9EgD--bv1ds_g1E7vG9E8YK7cLLD_up1MNQ8qbQSA" } }
        );
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getNewUsers();
  }, []);

  console.log('newUsers', newUsers);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}

      </ul>
    </div>
  );
}
