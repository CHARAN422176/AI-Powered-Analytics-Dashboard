// components/charts/bar-chart.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function MyBarChart({ data }: { data: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Acquisition</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="source" 
              stroke="#888888" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              width={60} 
            />
            <Bar 
              dataKey="users" 
              fill="hsl(var(--primary))" 
              radius={[0, 4, 4, 0]} 
              background={{ fill: 'hsl(var(--muted))', radius: 4 }} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}