import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
}

export const MetricCard = ({ title, value, icon, className }: MetricCardProps) => {
  return (
    <Card className={cn("p-6 flex items-start gap-4", className)}>
      <div className="p-2 bg-slate-100 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
    </Card>
  );
};