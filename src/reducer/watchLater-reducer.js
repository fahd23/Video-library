export const watchlaterReducer = (state, action) => {
  const { watchlater } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WATCHLATER":
      if (watchlater.filter((item) => item._id === payload._id).length === 1)
        return {
          ...state,
          watchlater: [
            ...watchlater.filter((item) => item._id !== payload._id),
          ],
        };

      return {
        ...state,
        watchlater: [...watchlater, payload],
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: [...watchlater.filter((item) => item._id !== payload._id)],
      };
    case "CLEAR":
      return payload;
    case "default":
      return state;
  }
};
