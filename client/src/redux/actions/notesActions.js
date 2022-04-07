import axios from "axios";
const getNotes = () => async (dispatch) => {
  const response = await axios.get("http://localhost:5000/getNotes");
  dispatch({ type: "GET_NOTES", payload: response.data });
};
const deleteNotes = (id) => async (dispatch) => {
  const res = await axios.delete(`http://localhost:5000/delete/${id}`);
  dispatch({ type: "DELETE_NOTES", payload: id });
};
const addNotes =
  ({ title, content }) =>
  async (dispatch) => {
    const response = await axios.post("http://localhost:5000/add", {
      title,
      content,
    });
    dispatch({ type: "ADD_NOTES", payload: response.data.addedNote });
  };

export { getNotes, deleteNotes, addNotes };
