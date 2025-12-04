import { TasksProvider } from "./contexts/TasksContext";
import { AddTaskForm, FilterBar, TaskList } from "./features/tasks";
import "./styles/App.css";

const App = () => {
  return (
    <TasksProvider>
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Crud React Dummy</h1>
          <p className="app-subtitle">
            Crud React Dummy with Feature Based Architecture
          </p>
        </header>

        <main className="app-main">
          <section className="left-column">
            <AddTaskForm />
            <FilterBar />
          </section>
          <section className="right-column">
            <h2 className="section-title">Tasks</h2>
            <TaskList />
          </section>
        </main>
      </div>
    </TasksProvider>
  );
};

export default App;
