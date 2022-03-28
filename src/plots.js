d3.csv("./data/grandlgruber.csv").then(makeChart);
d3.csv("./data/schenkerG.csv").then(makeSchenkerChart);

function makeChart(rawData) {
  let canvas = document.getElementById("plot-grandlgruber");
  let measurement = rawData.map((datapoint) => Number(datapoint.measurement));
  let simulation = rawData.map((datapoint) => Number(datapoint.simulation));
  let weather = rawData.map((datapoint) => Number(datapoint.weather));
  let labels = rawData.map((datapoint) => datapoint.date.split(" ")[1]);
  const myChart = new Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Simulation",
          data: simulation,
          borderColor: "#5789d7",
          backgroundColor: "#5789d7",
        },
        {
          label: "Measurement",
          data: measurement,
          borderColor: "#ffc400",
          backgroundColor: "#ffc400",
        },
        {
          label: "Ambient temperature",
          data: weather,
          borderColor: "#00CAA4",
          backgroundColor: "#00CAA4",
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
    },
  });
}

function makeSchenkerChart(rawData) {
  let canvas = document.getElementById("plot-schenkerG");
  let simulation = rawData.map((datapoint) => Number(datapoint.simulation));
  let weather = rawData.map((datapoint) => Number(datapoint.weather));
  let labels = rawData.map((datapoint) => datapoint.date.split(" ")[1]);
  const myChart = new Chart(canvas, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Simulation",
          data: simulation,
          borderColor: "#5789d7",
          backgroundColor: "#5789d7",
          pointRadius: 0,
        },
        {
          label: "Ambient temperature",
          data: weather,
          borderColor: "#00CAA4",
          backgroundColor: "#00CAA4",
          pointRadius: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
    },
  });
}
