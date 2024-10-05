import { portfolioItems } from "./portfolioItems.js";

// Initialize an empty object to store language usage
const languageTotals = {};

// Iterate over each project in portfolioItems
portfolioItems.forEach((project) => {
  const { languagesUsed, effort } = project;

  // Aggregate the language usage, weighted by effort
  for (const [language, usage] of Object.entries(languagesUsed)) {
    if (languageTotals[language]) {
      languageTotals[language] += usage * effort;
    } else {
      languageTotals[language] = usage * effort;
    }
  }
});

// Extract the data for Chart.js
const labels = Object.keys(languageTotals); // Language names
const data = Object.values(languageTotals); // Weighted totals

// Render the pie chart using Chart.js
const ctx = document.getElementById("languagePieChart").getContext("2d");
const languagePieChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(199, 199, 199, 0.6)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
        labels: {
          boxWidth: 20, // Width of the legend box
          boxHeight: 20, // Height of the legend box
        },
      },
    },
  },
});
