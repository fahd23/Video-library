export const likeReducer = (state, action) => {
  const { like } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_LIKE":
      if (like.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          like: [...like.filter((item) => item._id !== payload._id)],
        };

      return {
        ...state,
        like: [...like, payload],
      };
    case "REMOVE_FROM_LIKE":
      return {
        ...state,
        like: [...like.filter((item) => item._id !== payload._id)],
      };
    case "CLEAR":
      return payload;
    case "default":
      return state;
  }
};
