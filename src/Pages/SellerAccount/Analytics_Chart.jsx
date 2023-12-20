import {
  LinearScale,
  LineElement,
  CategoryScale,
  Chart as ChartJs,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
ChartJs.register(
  LinearScale,
  LineElement,
  CategoryScale,
  PointElement,
  Tooltip,
  Filler
);

const AnalyticsChart = () => {
  const data = {
    labels: [
      "Week 01",
      "Week 02",
      "Week 03",
      "Week 04",
      "Week 05",
      "Week 06",
      "Week 07",
      "Week 08",
      "Week 09",
      "Week 10",
      "Week 11",
      "Week 12",
      "Week 13",
      "Week 14",
      "Week 15",
      "Week 16",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [20, 15, 35, 25, 10, 5, 20, 18, 15, 10, 30, 28, 12, 7, 22, 20],
        backgroundColor: "rgba(56, 226, 93, 0.2)",
        borderColor: "#38E25D",
        pointBackgroundColor: "#38E25D",
        pointBorderColor: "#38E25D",
        pointHoverRadius: 8,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: {
          target: "origin",
          above: "rgba(56, 226, 93, 0.2)", // Area will be red above the origin
          // And blue below the origin
        },
        tension: 0.3,
      },
      {
        label: "Orders", // Add a label for the second line
        data: [65, 7, 45, 9, 4, 3, 8, 5, 8, 7, 45, 9, 4, 3, 8, 5],
        backgroundColor: "#FF0000", // Yellow background color
        borderColor: "#FF0000",
        pointBackgroundColor: "#FF0000", // Fill color for data point circles
        pointBorderColor: "#FFFFFF", // Border color for data point circles
        pointHoverRadius: 0, // Size of data point circles on hover

        pointRadius: 0,
        fill: {
          target: "origin",
          above: "rgba(255, 0, 0, 0.1)", // Area will be red above the origin
          // And blue below the origin
        },
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    /*  tooltip: {
        enabled: true,
        backgroundColor: "black",
        bodyColor: "white",
        titleColor: "red", // Customize the title color
        titleAlign: "center", // Center-align the title
        bodyAlign: "left", // Left-align the body text
        displayColors: false, // Hide color boxes next to data labels */

    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        min: 0,
        
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "black", // Set the background color of the tooltip
        bodyColor: "white", // Set the text color of the tooltip

        titleAlign: "center", // Center-align the title
        // Set the maximum width of the tooltip body
      },
    },
  };

  return (
    <div>
      <div className=" bg-white lg:py-7 py-5 lg:px-7 px-2 rounded-md">
        <div>
          <h1 className="font-Cairo font-bold text-lg px-7 pb-4 2xl:text-xl">
            Analytics
          </h1>
        </div>
        <div>
          <Line data={data} options={options}></Line>
          <div className="flex gap-5 justify-center mt-3">
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-[#FC5A5A]">
                <span></span>
              </div>
              <h1 className="font-Mont text-sm font-normal">Orders</h1>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3 rounded-full bg-[#38E25D]">
                <span></span>
              </div>
              <h1 className="font-Mont text-sm font-normal">Revenue</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
