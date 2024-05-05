import axios from "axios";
import { createUsersFailure, createUsersStart, createUsersSuccess, deleteUsersFailure, deleteUserstart, deleteUsersuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UserActions";

export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

export const createUser = async (user, dispatch) => {
    dispatch(createUsersStart());
    try {
        const res = await axios.post("/auth/register", user, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(createUsersSuccess(res.data));
    } catch (err) {
        dispatch(createUsersFailure());
    }
}

export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserstart());
    try {
        await axios.delete("/users/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            }
        });
        dispatch(deleteUsersuccess(id));
    } catch (err) {
        dispatch(deleteUsersFailure());
    }
};