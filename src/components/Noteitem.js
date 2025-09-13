import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = ({ note, updateNote }) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;

    return (
        <div className="col-md-3">
            <div className="card my-3 position-relative">
                {/* Top-right icons */}
                <div
                    className="position-absolute top-0 end-0 p-2"
                    style={{ fontSize: "1.2rem" }}
                >
                    <i
                        className="bi bi-pencil-square text-primary mx-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => updateNote(note)}
                    ></i>

                    <i
                        className="bi bi-trash text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteNote(note._id)}
                    ></i>
                </div>

                {/* Note content */}
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
