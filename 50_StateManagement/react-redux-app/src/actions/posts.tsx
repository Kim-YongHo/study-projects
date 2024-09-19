import axios from "axios"


// export const fetchPosts = (): any => {
//     return async function fetchPostsThunk(dispatch: any, getState: any) {
//       const reponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
//       dispatch({ type: "FETCH_POSTS", payload: reponse.data })
//     }
//   }

export const fetchPosts = (): any => async (dispatch: any, getState: any) => {
    const reponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({ type: "FETCH_POSTS", payload: reponse.data })

}