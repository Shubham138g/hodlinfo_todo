import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions"; // Assuming you have a toggleTodo action
import { motion, AnimatePresence } from "framer-motion";

export default function TaskL() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="mt-5">
      <AnimatePresence>
        {list.map((element) => (
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: "-100vh" }}
            key={element.id}
            exit={{ x: '-100vh', opacity: 0 }}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={element.completed} 
                onChange={() => handleToggle(element.id)}
                className="me-3"
              />
              <p className={`fs-4 mb-0 ${element.completed ? 'text-decoration-line-through' : ''}`}>
                {element.data.toUpperCase()}
              </p>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteTodo(element.id))}
            >
              Delete
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

