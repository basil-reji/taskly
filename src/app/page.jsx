import Image from "next/image";
import styles from "./page.scss";
import ToDoList from "@/components/ToDoList/ToDoList";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <div className="title">
          <h1>Taskly</h1>
          <p>
            A simple  app to boost your productivity.
          </p>
        </div>

        <ToDoList />
      </main>
    </div>
  );
}
