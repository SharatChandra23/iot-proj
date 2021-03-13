import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as moment from "moment-mini-ts";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {
  lat: any = 17.3850;
  lng: any = 78.4867;
  zoom: number = 10;
  mapClicked: boolean = false;
  clickedLat: number = null;
  clickedLng: number = null;
  timeInterval: any = null;
  time: any = null;
  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string;
  public barChartLegend: boolean;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string;

  // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: any = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: string;

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string;

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales'
  ];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: boolean;

  public polarAreaChartType: string;

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];

  public d3LineChartData: Array<any> = [];

  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean;
  public lineChartType: string;

  constructor() {
    this.timeInterval = setInterval(() => {
      this.time = moment(new Date).format('hh:mm:ss');
    }, 500)
  }

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [Math.round(Math.random() * 100), 59, 80, Math.random() * 100, 56, Math.random() * 100, 40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.doughnutChartType = 'doughnut';
    this.radarChartType = 'radar';
    this.pieChartType = 'pie';
    this.polarAreaLegend = true;
    this.polarAreaChartType = 'polarArea';
    this.lineChartLegend = true;
    this.lineChartType = 'line';

    this.d3LineChartData = [
      {
        "value": 20,
        "date": "2020-05-12T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-05-14T12:19:00+00:00"
      },
      {
        "value": 30,
        "date": "2020-05-16T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-05-18T12:19:00+00:00"
      },
      {
        "value": 55,
        "date": "2020-05-20T12:19:00+00:00"
      },
      {
        "value": 60,
        "date": "2020-05-22T12:19:00+00:00"
      },
      {
        "value": 45,
        "date": "2020-05-24T12:19:00+00:00"
      },
      {
        "value": 30,
        "date": "2020-05-26T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-05-28T12:19:00+00:00"
      },
      {
        "value": 70,
        "date": "2020-05-30T12:19:00+00:00"
      },
      {
        "value": 63,
        "date": "2020-06-01T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-06-03T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-06-05T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-06-07T12:19:00+00:00"
      },
      {
        "value": 20,
        "date": "2020-06-09T12:19:00+00:00"
      },
      {
        "value": 50,
        "date": "2020-06-11T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-06-13T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-06-15T12:19:00+00:00"
      },
      {
        "value": 82,
        "date": "2020-06-17T12:19:00+00:00"
      },
      {
        "value": 55,
        "date": "2020-06-19T12:19:00+00:00"
      },
      {
        "value": 35,
        "date": "2020-06-21T12:19:00+00:00"
      },
      {
        "value": 34,
        "date": "2020-06-23T12:19:00+00:00"
      },
      {
        "value": 45,
        "date": "2020-06-25T12:19:00+00:00"
      },
      {
        "value": 58,
        "date": "2020-06-27T12:19:00+00:00"
      },
      {
        "value": 34,
        "date": "2020-06-29T12:19:00+00:00"
      },
      {
        "value": 60,
        "date": "2020-07-01T12:19:00+00:00"
      },
      {
        "value": 75,
        "date": "2020-07-03T12:19:00+00:00"
      },
      {
        "value": 80,
        "date": "2020-07-05T12:19:00+00:00"
      },
      {
        "value": 29,
        "date": "2020-07-07T12:19:00+00:00"
      },
      {
        "value": 40,
        "date": "2020-07-09T12:19:00+00:00"
      },
      {
        "value": 54,
        "date": "2020-07-11T12:19:00+00:00"
      },
      {
        "value": 67,
        "date": "2020-07-13T12:19:00+00:00"
      },
      {
        "value": 90,
        "date": "2020-07-15T12:19:00+00:00"
      },
      {
        "value": 84,
        "date": "2020-07-17T12:19:00+00:00"
      },
      {
        "value": 43,
        "date": "2020-07-19T12:19:00+00:00"
      }
    ];
  }

  onMapClick(event) {
    // console.log("EVENT: ", event);
    // console.log(typeof(event));
  }

  ngOnDestroy() {
    console.log("Interval: ", this.timeInterval);
    clearInterval(this.timeInterval);
    this.timeInterval = null;
    setTimeout(() => {
      console.log("Interval: ", this.timeInterval);
    }, 100);
  }

}
