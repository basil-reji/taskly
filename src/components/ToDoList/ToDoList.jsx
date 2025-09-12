"use client";

import React, { useState } from "react";
import styles from "./toDoList.scss";

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function addTodo(e) {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([
            ...todos,
            { text: input.trim(), checked: false }
        ]);
        setInput("");
    }

    function toggleTodo(idx) {
        setTodos(
            todos.map((todo, i) =>
                i === idx ? { ...todo, checked: !todo.checked } : todo
            )
        );
    }

    function removeTodo(idx) {
        setTodos(todos.filter((_, i) => i !== idx));
    }

    return (
        <div className="todo-container">
            <form onSubmit={addTodo} className="todo-form">
                <input
                    className="todo-input"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button className="primary" type="submit">
                    Add
                </button>
            </form>
            <ul className="todo-list">
                {todos.map((todo, idx) => (
                    <li
                        key={idx}
                        className={`todo-item${todo.checked ? " checked" : ""}`}
                    >
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={() => toggleTodo(idx)}
                            />
                            <span className="custom-checkbox"></span>
                            <span className="todo-text">{todo.text}</span>
                        </label>
                        <button
                            className="secondary"
                            onClick={() => removeTodo(idx)}
                            aria-label={`Remove ${todo.text}`}
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;