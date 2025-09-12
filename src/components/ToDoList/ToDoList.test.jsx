import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

describe("ToDoList", () => {
    it("adds a todo", () => {
        render(<ToDoList />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        fireEvent.change(input, { target: { value: "Test Task" } });
        fireEvent.click(screen.getByText(/add/i));
        expect(screen.getByText("Test Task")).toBeInTheDocument();
    });

    it("removes a todo", () => {
        render(<ToDoList />);
        const input = screen.getByPlaceholderText(/add a new task/i);
        fireEvent.change(input, { target: { value: "Test Task" } });
        fireEvent.click(screen.getByText(/add/i));
        fireEvent.click(screen.getByLabelText(/remove test task/i));
        expect(screen.queryByText("Test Task")).not.toBeInTheDocument();
    });
});