import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getRepo = createAsyncThunk("get/getRepo", async ({logins}) => {
  return fetch(`https://api.github.com/users/${logins}/repos?per_page=20`).then(
    response => response.json()
  );
});
export const getUser = createAsyncThunk("get/getUser", async ({code}) => {
  return fetch(
    `${process.env.REACT_APP_LOCAL_LINK}/user/signin/callback?code=${code}`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
    }
  ).then(response => response.json());
});

//adding to localstorage
const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: true,
    error: null,
    post: localStorage.getItem("post")
      ? JSON.parse(localStorage.getItem("post"))
      : [],
    repository: [],
    data: [],
    loginloading: true,
  },
  //filter functionality
  reducers: {
    setDelete: (state, action) => {
      state.repository = state.data.filter(name =>
        name.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    [getUser.pending]: state => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.post.push(action.payload);
      localStorage.setItem("post", JSON.stringify(state.post));
    },
    [getUser.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    [getRepo.pending]: state => {
      state.loginloading = true;
    },
    [getRepo.fulfilled]: (state, action) => {
      state.repository = [...action.payload];
      state.data = [...action.payload];
      state.loginloading = false;
    },
    [getRepo.rejected]: (state, action) => {
      state.error = action.payload;
      state.loginloading = true;
    },
  },
});
export const {setDelete} = postSlice.actions;
export default postSlice.reducer;
