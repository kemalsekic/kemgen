let testPathChart = document
      .getElementById("testPathChart")
      .getContext("2d");
    let chartData = {};
    const qsEndPoint = "https://qsServer.kemalsekic1.repl.co";

    fetch(qsEndPoint)
      .then((response) => response.json())
      .then((data) => {
        chartData = data;
        const obj = JSON.parse(JSON.stringify(chartData));

        console.log(obj.TestResults.Failed.testId);
        console.log(parseInt(obj.id));
        // console.log(testResults);

        let passedTests = new Chart(testPathChart, {
          type: "line",
          data: {
            labels: ["Passed", "Failed", "Risky"],
            datasets: [
              {
                label: "Passes",
                data: [
                  obj.TestResults.Passed.testId, obj.TestResults.Failed.testId, 10,
                  // parseInt(obj.bpi.EUR.rate),
                  // parseInt(obj.bpi.USD.rate),
                  // parseInt(obj.bpi.GBP.rate),
                ],
              },
            ],
          },
          options: {},
        });
      });

    //     fetch(coinDeskAPI)
    //         .then(response => response.json())
    //         .then(data => {
    //             chartData = data;
    //             console.log(chartData)
    //             console.log(chartData.bpi.EUR)
    //             const obj = JSON.parse(JSON.stringify(chartData))

    //             console.log(obj.bpi.EUR.rate);
    //             console.log(obj.bpi.EUR.rate);
    //             console.log(parseInt(obj.bpi.EUR.rate));
    //             // let cRate = chartData.getInt(chartData.bpi.EUR.rate);

    //     let passedTests = new Chart(testPathChart, {
    //         type: 'line',
    //         data:{
    //             labels:['Passed', 'Failed', 'Risky'],
    //             datasets:[{
    //                 label: 'Passes',
    //                 data:[
    //                     parseInt(obj.bpi.EUR.rate),
    //                     parseInt(obj.bpi.USD.rate),
    //                     parseInt(obj.bpi.GBP.rate)
    //                 ]
    //             }]
    //         },
    //         options:{}
    //     });
    // });