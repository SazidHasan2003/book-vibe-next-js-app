"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/type/books.type";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Context Type
interface IBooksContext {
  readBooks: Ibook[];
}

// Custom Triangle Bar Component Props
interface ITriangleBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

// Custom Label Component Props
interface ICustomLabelProps {
  x?: number | string;
  y?: number | string;
  width?: number | string;
  height?: number | string;
  value?: React.ReactNode;
  fill?: string;
}

// কাস্টম ট্রায়াঙ্গেল (Triangle) শেপ তৈরি করার SVG Path ফাংশন
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

// Custom Triangle Bar Component
const TriangleBar = (props: ITriangleBarProps) => {
  const { fill = "", x = 0, y = 0, width = 0, height = 0 } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const renderCustomBarLabel = (props: ICustomLabelProps) => {
  const { x = 0, width = 0, y = 0, value = 0, fill = "" } = props;

  const numX = Number(x) || 0;
  const numY = Number(y) || 0;
  const numWidth = Number(width) || 0;

  return (
    <text
      x={numX + numWidth / 2}
      y={numY - 10}
      fill={fill}
      textAnchor="middle"
      dominantBaseline="middle"
      className="font-bold text-base"
    >
      {value}
    </text>
  );
};

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF0000",
  "#A435F0",
];

const PagesToReadPage = () => {
  const { readBooks } = useContext(BooksContext) as IBooksContext;

  const chartData = readBooks?.map((book, index) => ({
    name: book.bookName,
    pages: book.totalPages,
    fill: colors[index % colors.length],
  }));

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="bg-[#13131303] border border-[#1313130d] rounded-3xl p-6 md:p-12 min-h-125 flex flex-col justify-center items-center">
        {readBooks && readBooks.length > 0 ? (
          <div className="w-full h-112.5">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 30,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  interval={0}
                  className="text-sm font-medium fill-gray-500"
                />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="pages"
                  shape={<TriangleBar />}
                  label={renderCustomBarLabel}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          /* Empty State View */
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold text-gray-700 mb-3">
              No Books Added Yet!
            </h2>
            <p className="text-gray-500 text-lg">
              Please add books to your read list to see the pages graph.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PagesToReadPage;
