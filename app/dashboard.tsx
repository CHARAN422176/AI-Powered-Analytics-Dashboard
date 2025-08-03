// app/dashboard.tsx
"use client"; 

import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/data-range-picker";
import * as React from "react";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { MyLineChart } from "@/components/charts/line-chart";
import { MyPieChart } from "@/components/charts/pie-chart";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns"; 
import { ThemeToggle } from "@/components/theme-toggle";
import { keyMetrics, revenueData, userAcquisitionData, paymentData } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  // V-- All hooks moved inside the component --V
  const [loading, setLoading] = React.useState(true);
  const [metrics, setMetrics] = React.useState(keyMetrics);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: new Date(),
  });

  // Effect for loading skeleton
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Effect for real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) => ({
        ...prevMetrics,
        users: prevMetrics.users + Math.floor(Math.random() * 10) - 4,
      }));
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <h1 className="text-lg font-semibold md:text-2xl">ADmyBRAND Insights</h1>
        <div className="ml-auto flex items-center gap-4">
          <DateRangePicker date={date} onDateChange={setDate} />
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-0 md:space-y-8 md:p-8 md:pt-0">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <>
              <Skeleton className="h-28" />
              <Skeleton className="h-28" />
              <Skeleton className="h-28" />
              <Skeleton className="h-28" />
            </>
          ) : (
            <>
              <MetricCard title="Total Revenue" value={`$${metrics.revenue.toLocaleString()}`} icon={DollarSign} description="+20.1% from last month" />
              <MetricCard title="Active Users" value={`+${metrics.users.toLocaleString()}`} icon={Users} description="+180.1% from last month" />
              <MetricCard title="Conversions" value={`+${metrics.conversions}`} icon={CreditCard} description="+19% from last month" />
              <MetricCard title="Growth" value={`${metrics.growth}%`} icon={Activity} description="Trending upwards" />
            </>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          {loading ? <Skeleton className="lg:col-span-4 h-80" /> : <div className="lg:col-span-4"><MyLineChart data={revenueData} /></div>}
          {loading ? <Skeleton className="lg:col-span-3 h-80" /> : <div className="lg:col-span-3"><MyPieChart data={userAcquisitionData} /></div>}
        </div>
        <div>
          {loading ? <Skeleton className="h-96" /> : <DataTable columns={columns} data={paymentData} />}
        </div>
      </main>
    </div>
  );
}