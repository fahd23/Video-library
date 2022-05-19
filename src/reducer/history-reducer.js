export const historyReducer = (state, action) => {
  const { history } = state;
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: [...history, payload],
      };
    case "CLEAR":
      return {
        history: [],
      };
    default:
      return state;
  }
};
