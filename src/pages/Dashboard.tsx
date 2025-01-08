import { Users, TrendingUp, CheckSquare, Mail } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

const Dashboard = () => {
  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-slate-600 mt-1">Welcome to your CRM dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Contacts"
          value="1,234"
          icon={<Users className="h-5 w-5 text-slate-600" />}
        />
        <MetricCard
          title="Revenue"
          value="$50,234"
          icon={<TrendingUp className="h-5 w-5 text-slate-600" />}
        />
        <MetricCard
          title="Tasks"
          value="12"
          icon={<CheckSquare className="h-5 w-5 text-slate-600" />}
        />
        <MetricCard
          title="Communications"
          value="89"
          icon={<Mail className="h-5 w-5 text-slate-600" />}
        />
      </div>
    </div>
  );
};

export default Dashboard;