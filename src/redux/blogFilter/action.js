import { FILTER_BY_AHTHOR } from "./action.types";

export const ahutorFilter = (blogPost) => {
  return {
    type: FILTER_BY_AHTHOR,
    payload: blogPost,
  };
};
export const categoryFilter = (posts, postid) => {
  return {
    type: FILTER_BY_AHTHOR,
    payload: {
      posts,
      postid,
    },
  };
};
