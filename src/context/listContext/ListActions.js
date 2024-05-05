export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
});

export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
});

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
});

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
});

// export const deleteMovieStart = () => ({
//     type: "DELETE_MOVIE_START",
// });

// export const deleteMovieSuccess = (id) => ({
//     type: "DELETE_MOVIE_SUCCESS",
//     payload: id
// });

// export const deleteMovieFailure = () => ({
//     type: "DELETE_MOVIE_FAILURE",
// });