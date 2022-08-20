import { blogData } from "../../assets/blogData/blogData";
import { FILTER_BY_AHTHOR } from "./action.types";

const initialState = {
  blogPosts: blogData,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_AHTHOR:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
