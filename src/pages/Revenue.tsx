import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

type RevenueDataPoint = {
  [key: string]: string | number;
  revenue: number;
};

type RevenueData = {
  daily: RevenueDataPoint[];
  weekly: RevenueDataPoint[];
  monthly: RevenueDataPoint[];
  yearly: RevenueDataPoint[];
  "2year": RevenueDataPoint[];
};

const revenueData: RevenueData = {
  daily: [
    { day: "Mon", revenue: 120 },
    { day: "Tue", revenue: 200 },
    { day: "Wed", revenue: 180 },
    { day: "Thu", revenue: 220 },
    { day: "Fri", revenue: 300 },
    { day: "Sat", revenue: 250 },
    { day: "Sun", revenue: 210 },
  ],
  weekly: [
    { week: "W1", revenue: 1500 },
    { week: "W2", revenue: 2100 },
    { week: "W3", revenue: 1900 },
    { week: "W4", revenue: 2500 },
  ],
  monthly: [
    { month: "Jan", revenue: 7800 },
    { month: "Feb", revenue: 6900 },
    { month: "Mar", revenue: 8400 },
    { month: "Apr", revenue: 9100 },
    { month: "May", revenue: 9600 },
  ],
  yearly: [
    { year: "2021", revenue: 95000 },
    { year: "2022", revenue: 104000 },
    { year: "2023", revenue: 112500 },
    { year: "2024", revenue: 129300 },
  ],
  "2year": [
    { year: "2023 Jan", revenue: 7000 },
    { year: "2023 Jun", revenue: 8800 },
    { year: "2023 Dec", revenue: 9500 },
    { year: "2024 Jun", revenue: 10500 },
    { year: "2024 Dec", revenue: 12000 },
  ],
};

const timeRanges = ["daily", "weekly", "monthly", "yearly", "2year"] as const;
type TimeRange = typeof timeRanges[number];

const RevenueStats: React.FC = () => {
  const [activeRange, setActiveRange] = useState<TimeRange>("daily");
  const data = revenueData[activeRange];
  const keyLabel = Object.keys(data[0])[0];

  const totalRevenue = data.reduce((acc, cur) => acc + cur.revenue, 0);
  const averageRevenue = Math.round(totalRevenue / data.length);
  const maxRevenue = Math.max(...data.map((d) => d.revenue));
  const minRevenue = Math.min(...data.map((d) => d.revenue));

  return (
    <motion.div
      className="p-6 bg-white dark:bg-gray-950 rounded-2xl shadow-xl max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        📊 Revenue Dashboard
      </h2>

      {/* Time Range Buttons */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
              activeRange === range
                ? "bg-blue-600 text-white shadow"
                : "bg-zinc-100 text-gray-700 hover:bg-zinc-200 dark:bg-gray-900 dark:text-white"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Revenue Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <StatCard label="Total Revenue" value={`₹${totalRevenue}`} />
        <StatCard label="Average" value={`₹${averageRevenue}`} />
        <StatCard label="Highest" value={`₹${maxRevenue}`} />
        <StatCard label="Lowest" value={`₹${minRevenue}`} />
      </motion.div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-blue-50 dark:bg-gray-900 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-white">
            Revenue Trend
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey={keyLabel} />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563EB"
                strokeWidth={2}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-green-50 dark:bg-gray-900 p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-white">
            Revenue Breakdown
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey={keyLabel} />
              <YAxis />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="revenue" fill="#22C55E" barSize={35} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

// Sub-component for individual stat cards
interface StatCardProps {
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => (
  <motion.div
    className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow text-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <p className="text-zinc-500 dark:text-zinc-300 text-sm">{label}</p>
    <h3 className="text-xl font-bold text-zinc-800 dark:text-white">{value}</h3>
  </motion.div>
);

export default RevenueStats;
