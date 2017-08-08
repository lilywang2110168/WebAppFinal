import React from 'react';

class Chart extends React.Component {

    componentDidMount() {
        let  chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text:"Gender distribution"
            },
            animationEnabled: true,

            data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - #percent %",
                    yValueFormatString: "#0.#,,. Million",
                    legendText: "{indexLabel}",
                    dataPoints: [
                        {  y: 70, indexLabel: "Female" },
                        {  y: 30, indexLabel: "Male" },
                    ]
                }
            ]
        });
    chart.render();
  }

  render() {
    return<div id="chartContainer"> </div>;
  }

}

export default Chart;