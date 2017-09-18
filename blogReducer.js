
import data from './Data.json';
// import dotenv from 'dotenv';
import { AddBlog } from './blogApp/blogActions';


export default function counter(state = [], action) {
  switch (action.type) {
    case 'GET_ALL':
      state = action.blogs;
      return state
    case 'ADD_BLOG':
    AddBlog(action.blogs)
    case 'REMOVE_BLOG':
      // REMOVE BLOG
    case 'EDIT_BLOG':
      // EDIT BLOG
    case 'GET_ALL_CAT':
    state.categories = action.categories;
    default:
      return state
  }
}



