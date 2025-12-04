import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Button, Input, Textarea, Card } from "../../components/ui";
import "./AddTaskForm.css";

export const AddTaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Card className="add-task-form">
      <h2 className="form-title">
        <span className="title-icon">✨</span>
        Add New Task
      </h2>
      <form onSubmit={handleSubmit}>
        <Input
          id="title"
          type="text"
          label="Title"
          placeholder="e.g. Learn React Hooks"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Textarea
          id="description"
          label="Description"
          rows={3}
          placeholder="Optional description for your task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" variant="primary" className="submit-btn">
          <span className="btn-icon">➕</span>
          Add Task
        </Button>
      </form>
    </Card>
  );
};
