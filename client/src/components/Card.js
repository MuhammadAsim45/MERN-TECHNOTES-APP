import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotes } from "../redux/actions/notesActions";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ title, content, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="card m-1"
        style={{ width: " 18rem", height: "10rem", overflowY: "auto" }}
      >
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <div className="icons w-100">
            <FaTrashAlt
              className="icon"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              onClick={() => dispatch(deleteNotes(id))}
              title="delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
