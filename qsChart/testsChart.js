/**
    Notes ++:

        * When a new test case is added, QStack will generate a new number for that test case
        * Change to check for boolean value
        * Push a red color if test fails and green color if test passes
        * Each new line represent a new test case
        * Each circle represents an iteration of the test
        * Hovering over the circle displays partial information of the test case
        * Clicking on the circle will create a new chart displaying more detail of the test case
        
    Notes --; 
*/

import { lineChartConfig, barChartConfig } from './lChartConfig.js';

export const lineChart = new Chart(
    document.getElementById('lChart'),
    lineChartConfig
  );


document.getElementById("genTestBtn").onclick = function genTest(){
    const value = Math.floor(Math.random() * (1 - 0 + 1));
    console.log(value);

    lineChart.data.datasets[0].data.push(value);
    lineChart.data.labels.push("NextDay");

    const bgColor = lineChart.data.datasets[0].backgroundColor;
    const bdColor = lineChart.data.datasets[0].borderColor;
    
    // Change to check for boolean value
    // Push a red color if test fails and green color if test passes 
    if(value < 3){
        bgColor.push("rgba(255, 26, 104, 0.2)"); 
        bdColor.push("rgba(255, 26, 104, 0.2)",);
    } else if(value > 5){
        bgColor.push("rgba(255, 26, 104, 0.2)");
        bdColor.push("rgba(255, 26, 104, 0.2)",);
    }

    lineChart.update();
}

