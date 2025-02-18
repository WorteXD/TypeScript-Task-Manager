import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../interfaces/Task";
import { Quote } from "../interfaces/Quote";

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [animation, setAnimation] = useState<string>("animate__fadeInLeft");





  
  /**
   * Fetches an inspirational quote from an external API and updates the state.
   * The quote refreshes every 20 seconds.
   */
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const apiUrl = encodeURIComponent(`https://zenquotes.io/api/random?timestamp=${new Date().getTime()}`);
        const response = await fetch(proxyUrl + apiUrl);

        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.json();
        const parsedData = JSON.parse(data.contents);

        
        setTimeout(() => {
          setQuote({ content: parsedData[0].q, author: parsedData[0].a });
          setAnimation("animate__fadeInLeft");
        }, 500);
      } catch (err) {
        console.error("Error fetching quote:", err);
      }
    };

    fetchQuote();
    const interval = setInterval(fetchQuote, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="table-responsive w-100">
      <div className={`quote-box animate__animated ${animation}`}>
  {quote && (
    <span>
      <span role="img" aria-label="quote">💡</span> {quote.content} - {quote.author}
    </span>
  )}
</div>
      <table className="task-table">
        <thead className="table-dark">
          <tr>
            <th className="w-50">Task</th>
            <th className="w-25">Description</th>
            <th className="w-25 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 && (
            <tr><td colSpan={3} className="text-center text-muted">No tasks available</td></tr>
          )}
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
