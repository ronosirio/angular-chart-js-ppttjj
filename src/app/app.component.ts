import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular   6';
  canvas: any;
  myVariable = false;
  e = 0;
  ctx: any;
  @ViewChild('mychart') mychart;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
      type: 'line',

      data: {
        datasets: [
          {
            label: 'Höhenlinie',
            backgroundColor: 'rgba(255, 99, 132,0.4)',
            borderColor: 'rgb(255, 99, 132)',
            fill: true,
            data: [
              { x: 1, y: 2 },
              { x: 2500, y: 2.5 },
              { x: 3000, y: 5 },
              { x: 3400, y: 4.75 },
              { x: 3600, y: 4.75 },
              { x: 5200, y: 6 },
              { x: 6000, y: 9 },
              { x: 7100, y: 6 },
            ],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Höhenlinie',
        },
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                userCallback: function (tick) {
                  if (tick >= 1000) {
                    return (tick / 1000).toString() + 'km';
                  }
                  return tick.toString() + 'm';
                },
              },
              scaleLabel: {
                labelString: 'Länge',
                display: true,
              },
            },
          ],
          yAxes: [
            {
              type: 'linear',
              ticks: {
                userCallback: function (tick) {
                  return tick.toString() + 'm';
                },
              },
              scaleLabel: {
                labelString: 'Höhe',
                display: true,
              },
            },
          ],
        },
        events: ['click'],
        onClick: function (c, i) {
          var oh = myChart.getElementAtEvent(
            c,
            'nearest',
            { intersect: true },
            false
          );
          console.log(oh);
          console.log(c, i);
          //e = i[0];
          //console.log(e._index)
          //var x_value = this.data.labels[e._index];
          //var y_value = this.data.datasets[0].data[e._index];
          //console.log(x_value);
          //console.log(y_value);
        },
      },
    });

    //function handleClick(evt)
    //{
    //var activeElement = myChart.getElementAtEvent(evt);
    //    self.myVariable = myChart.getElementAtEvent(evt);
    //};

    const self = this;
    console.log('A', self.myVariable);
    //this.canvas.onmousemove = function (e) {
    //  console.log('onMouseMove', self.myVariable);
    //};
    this.canvas.onmousedown = function (e) {
      console.log('onmousedown', self.myVariable);
    };
  }
}
