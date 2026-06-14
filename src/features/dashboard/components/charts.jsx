"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/shared/empty-state";

const axisProps = {
  stroke: "hsl(var(--muted-foreground))",
  fontSize: 12,
  tickLine: false,
  axisLine: false,
};

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border bg-popover px-3 py-2 text-xs shadow-md">
      <div className="mb-1 font-medium text-popover-foreground">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="text-muted-foreground">
          {p.name}: <span className="font-medium text-foreground">{p.value}</span>
        </div>
      ))}
    </div>
  );
}

/** @param {{ categorySeries: any[] }} props */
export function DashboardCharts({ categorySeries }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Articles by category</CardTitle>
      </CardHeader>
      <CardContent>
        {categorySeries.length === 0 ? (
          <EmptyState
            title="No category data"
            description="Category breakdown will appear once articles are loaded from the API."
          />
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={categorySeries} margin={{ left: -16, right: 8, top: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="name" {...axisProps} interval={0} angle={-20} textAnchor="end" height={50} />
              <YAxis {...axisProps} allowDecimals={false} />
              <Tooltip content={<ChartTooltip />} cursor={{ fill: "hsl(var(--accent))" }} />
              <Bar dataKey="value" name="Articles" fill="hsl(var(--chart-1))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
