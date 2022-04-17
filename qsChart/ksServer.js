import { qsEndPoint } from './qsServer.js'
import { lineChart } from './testsChart.js'

let testPathChart = document
      .getElementById("testPathChart")
      .getContext("2d");
    let chartData = {};

    fetch(qsEndPoint)
      .then((response) => response.json())
      .then((data) => {
        chartData = data;
        const obj = JSON.parse(JSON.stringify(chartData));

        console.log(obj.TestResults.Failed.testId);
        console.log(parseInt(obj.id));

        let passedTests = new Chart(testPathChart, {
          type: "line",
          data: {
            labels: ["Passed", "Failed", "Risky"],
            datasets: [
              {
                label: "Passed",
                data: [
                  obj.TestResults.Passed.testId, obj.TestResults.Failed.testId, 10,
                ],
              },
            ],
          },
          options: {},
        });
      });