import { useTasks } from "../../hooks/useTasks";
import { Button, Card } from "../../components/ui";
import "./FilterBar.css";

export const FilterBar = () => {
  const { filter, setFilter, rawTasks } = useTasks();

  const total = rawTasks.length;
  const completedCount = rawTasks.filter((t) => t.completed).length;
  const incompleteCount = rawTasks.filter((t) => !t.completed).length;

  const filters = [
    {
      key: "incomplete",
      label: "Incomplete",
      count: incompleteCount,
      icon: "⏳",
    },
    { key: "completed", label: "Completed", count: completedCount, icon: "✅" },
    { key: "all", label: "All", count: total, icon: "📋" },
  ];

  return (
    <Card className="filter-bar">
      <h3 className="filter-title">Filter Tasks</h3>
      <div className="filter-buttons">
        {filters.map(({ key, label, count, icon }) => (
          <Button
            key={key}
            variant={filter === key ? "primary" : "outline"}
            size="small"
            onClick={() => setFilter(key)}
            className="filter-btn"
          >
            <span className="filter-icon">{icon}</span>
            {label} <span className="filter-count">({count})</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};
