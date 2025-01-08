import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, CheckCircle2 } from "lucide-react";

const tasks = [
  { id: 1, title: "Follow up with John Doe", due: "2024-02-20", status: "pending" },
  { id: 2, title: "Send proposal to ABC Corp", due: "2024-02-21", status: "completed" },
  { id: 3, title: "Schedule meeting with team", due: "2024-02-22", status: "pending" },
];

const Tasks = () => {
  return (
    <div className="space-y-8 fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Tasks</h1>
          <p className="text-slate-600 mt-1">Manage your tasks</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Task
        </Button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <Card key={task.id} className="p-4 flex items-center gap-4">
            <CheckCircle2 className={`h-5 w-5 ${task.status === 'completed' ? 'text-green-500' : 'text-slate-300'}`} />
            <div className="flex-1">
              <h3 className="font-medium">{task.title}</h3>
              <p className="text-sm text-slate-600">Due: {task.due}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;