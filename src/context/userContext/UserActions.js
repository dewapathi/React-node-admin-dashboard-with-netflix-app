export const getUsersStart = () => ({
    type: "GET_USERS_START",
});

export const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users,
});

export const createUsersFailure = () => ({
    type: "CREATE_USERS_FAILURE",
});

export const createUsersStart = () => ({
    type: "CREATE_USERS_START",
});

export const createUsersSuccess = (user) => ({
    type: "CREATE_USERS_SUCCESS",
    payload: user,
});

export const getUsersFailure = () => ({
    type: "GET_USERS_FAILURE",
});

export const deleteUserstart = () => ({
    type: "DELETE_USERS_START",
});

export const deleteUsersuccess = (id) => ({
    type: "DELETE_USERS_SUCCESS",
    payload: id
});

export const deleteUsersFailure = () => ({
    type: "DELETE_USERS_FAILURE",
});