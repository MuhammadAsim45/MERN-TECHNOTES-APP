const notesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "GET_NOTES":
      state = payload;
      return state;
    case "DELETE_NOTES":
      return state.filter((elem) => elem._id !== payload);
    case "ADD_NOTES":
      state = [
        ...state,
        { _id: payload._id, title: payload.title, content: payload.content },
      ];
      return state;
    default:
      return state;
  }
};
export { notesReducer };
