import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, addNotes } from "../redux/actions/notesActions";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesReducer);
  useEffect(() => {
    dispatch(getNotes());
  }, []);
  const [value, setValue] = useState({ title: "", content: "" });
  const [status, setStatus] = useState(true);
  const inputHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const addNote = (e) => {
    if (value.content === "" || value.title === "") {
      setStatus(false);
    } else {
      setStatus(true);
      dispatch(addNotes(value));
      setValue({ title: "", content: "" });
    }
  };
  return (
    <>
      <h1>Tech notes</h1>
      {!status && (
        <div className="alert alert-danger" role="alert">
          input field can't be empty
        </div>
      )}
      <form>
        <div className="form-floating d-flex flex-column justify-content-center align-items-center">
          <input
            type="text"
            name="title"
            className="text-center"
            id=""
            value={value.title}
            placeholder="title"
            onChange={inputHandler}
            style={{
              height: "50px",
              width: "50%",
              fontSize: "19px",
              outline: "none",
            }}
          />
          <input
            type="text"
            name="content"
            id=""
            value={value.content}
            onChange={inputHandler}
            className="mt-2 text-center"
            placeholder="write note"
            style={{
              height: "100px",
              width: "50%",
              fontSize: "19px",
              outline: "rgb(5, 115, 129)",
            }}
          />
          <button
            type="button"
            className=" mt-2 btn btn-info "
            onClick={addNote}
          >
            ADD
          </button>
        </div>
      </form>
      <hr />
      {notes.length !== 0 ? (
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
          {notes.map((elem, index) => (
            <Card
              key={index}
              title={elem.title}
              content={elem.content}
              id={elem._id}
            />
          ))}
        </div>
      ) : (
        <h1>notes are empty</h1>
      )}
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
