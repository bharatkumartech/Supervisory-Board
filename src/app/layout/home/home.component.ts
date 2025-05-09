import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import data from '../../json/page1.json';
import data1 from '../../json/page2.json';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import data2 from '../../json/chartData.json';
import pieChartData from '../../json/pieChartData.json';
import data3 from '../../json/page3.json'
import rating20201 from '../../json/rating20201.json';
import rating20202 from '../../json/rating20202.json';
import rating20203 from '../../json/rating20203.json';
import rating20204 from '../../json/rating20204.json';
import rating20205 from '../../json/rating20205.json';
import rating20206 from '../../json/rating20206.json';
import rating20241 from '../../json/rating20241.json';
import rating20242 from '../../json/rating20242.json';
import rating20243 from '../../json/rating20243.json';
import rating20244 from '../../json/rating20244.json';
import rating20245 from '../../json/rating20245.json';
import rating20246 from '../../json/rating20246.json';
import page4 from '../../json/page4.json';
import benchMark1 from '../../json/benchMark1.json';
import benchMark2 from '../../json/benchMark2.json';
import benchMark3 from '../../json/benchMark3.json';
import benchMark4 from '../../json/benchMark4.json';
import consensus1 from '../../json/consensus1.json';
import consensus2 from '../../json/consensus2.json';
import consensus3 from '../../json/consensus3.json';
import consensus4 from '../../json/consensus4.json';
import consensusChart1 from '../../json/consensusChart1.json';
import consensusChart2 from '../../json/consensusChart2.json';
import consensusChart3 from '../../json/consensusChart3.json';
import consensusChart4 from '../../json/consensusChart4.json';
@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, CommonModule, NgxChartsModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  boardData: any;
  boardData1: any;
  boardData2: any;
  boardData3: any;
  showPage4: boolean = false;
  showPage3: boolean = false;
  showPage1: boolean = true;
  showPage2: boolean = false;
  averageRatingPercent: number = 0;
  multi: any[] = data2;
  rating2020Charts: any[] = [];
  pieChartData: any[] = pieChartData;
  averageRating: any;
  rating20201: any;
  rating20202: any;
  rating20203: any;
  rating20204: any;
  rating20205: any;
  rating20206: any;
  rating20241: any;
  rating20242: any;
  rating20243: any;
  rating20244: any;
  rating20245: any;
  rating20246: any;
  benchMark1: any = benchMark1;
  benchMark2: any = benchMark2;
  benchMark3: any = benchMark3;
  benchMark4: any = benchMark4;
  consensus1: any = consensus1;
  consensus2: any = consensus2;
  consensus3: any = consensus3;
  consensus4: any = consensus4;
  consensusChart1: any = consensusChart1;
  consensusChart2: any = consensusChart2;
  consensusChart3: any = consensusChart3;
  consensusChart4: any = consensusChart4;
  averageConsensus: any;
  // view: [number, number] = [window.innerWidth, 600];
  // view: [number, number] = [500, 100];  
  // view1: [number, number] = [500, 100]; 
  customColors = [
    {
      name: 'Average Score',
      value: '#003f63'  // Dark blue like in your image
    },
    {
      name: 'remaining',
      value: '#e0e0e0'  // Light grey for the rest of the bar
    }
  ];
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#003f63', '#e0e0e0'],
  };
  benchMarkColorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#003f63', '#e0e0e0', '#00a3e0', '#e0e0e0'], // dark blue, gray, cyan, gray
  };

  activeEntries: any[] = [];
  colorScheme1: Color = {
    name: 'customScheme1',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#003f63', '#e0e0e0'],
  };
  colorScheme2: Color = {
    name: 'customScheme1',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#0dcaf0', '#e0e0e0'],
  };
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  isDoughnut: boolean = false;
  allCharts: any[] = [];
  all2024Charts: any[] = [];
  benchMarkCharts: any[] = [];
  consensusCharts: any[] = [];
  consensusChartData: any[] = [];
  deltaJson: any[] = [
    {
      "name": "delta",
      "series": [
        {
          "name": "",
          "value": "",
        }
      ]
    }
  ];
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };
  constructor() {


  }
  ngOnInit() {

    this.boardData = data;
    this.boardData1 = data1;
    this.boardData2 = data3;
    this.boardData3 = page4;
    this.rating20201 = rating20201;
    this.rating20202 = rating20202;
    this.rating20203 = rating20203;
    this.rating20204 = rating20204;
    this.rating20205 = rating20205;
    this.rating20206 = rating20206;
    this.rating20241 = rating20241;
    this.rating20242 = rating20242;
    this.rating20243 = rating20243;
    this.rating20244 = rating20244;
    this.rating20245 = rating20245;
    this.rating20246 = rating20246;
    this.allCharts = [
      this.rating20201,
      this.rating20202,
      this.rating20203,
      this.rating20204,
      this.rating20205,
      this.rating20206
    ]
    this.all2024Charts = [
      this.rating20241,
      this.rating20242,
      this.rating20243,
      this.rating20244,
      this.rating20245,
      this.rating20246
    ]

    this.benchMarkCharts = [
      this.benchMark1,
      this.benchMark2,
      this.benchMark3,
      this.benchMark4
    ]
    this.consensusCharts = [
      this.consensus1,
      this.consensus2,
      this.consensus3,
      this.consensus4
    ]
    this.consensusChartData = [
      this.consensusChart1,
      this.consensusChart2,
      this.consensusChart3,
      this.consensusChart4
    ]
    console.log(this.benchMarkCharts, 'allCharts')
    this.boardData2.data = this.boardData2.data.map((item: any, index: number) => {

      const updatedItem = {
        ...item,
        chartData: [this.allCharts[index]],  // Assign only the matching chart
        chartData2024: [this.all2024Charts[index]],  // Assign only the matching chart
      };
      return updatedItem;
    });

    this.boardData2.data = this.boardData2.data.map((item: any) => {
      const rating = item.chartData[0].series.find((entry: any) => entry.name === 'Rating')?.value || 0;
      const remainingRating = item.chartData[0].series.find((entry: any) => entry.name === 'remaining Rating')?.value || 0;

      // Calculate the delta
      const delta = rating - remainingRating;
      return {
        ...item,
        delta: delta  // Add the delta to the updated item
      };
    });

    this.boardData3.data = this.boardData3.data.map((item: any, index: number) => {
      const updatedItem = {
        ...item,
        chartData: this.benchMarkCharts[index], // <-- No extra brackets
        pieChartData: this.consensusCharts[index],  // for pie chart
        consensusChartData: this.consensusChartData[index],  // for pie chart
      };
      return updatedItem;
    });


    const series = data2[0].series;
    const total = series.reduce((sum, item) => sum + item.value, 0);
    const maxItem = series.reduce((prev, current) => (prev.value > current.value ? prev : current));
    const percentage = ((maxItem.value / total) * 100).toFixed(2);
    this.averageRating = percentage
    const total1 = pieChartData.reduce((sum, item) => sum + item.value, 0);
    const highest = pieChartData.reduce((max, item) => item.value > max.value ? item : max);
    const roundedPercentage = Math.round((highest.value / total1) * 100);
    this.averageConsensus = roundedPercentage;

  }

  percentCalculate(value: number): string {
    return `${Math.round((value / 5) * 100)}%`;
  }
  scrollTo(id: string): void {
    if (id === 'page-4') {
      this.showPage4 = true;
      this.showPage1 = false;
      this.showPage3 = false;
    }
    if (id === 'page-1') {
      this.showPage4 = false;
      this.showPage1 = true;
      this.showPage3 = false;
      this.showPage2 = false;
    }
    if (id === 'page-3') {
      this.showPage3 = true;
      this.showPage1 = false;
      this.showPage4 = false;
      this.showPage2 = false;
    }
    if (id === 'page-2') {
      this.showPage4 = false;
      this.showPage1 = false;
      this.showPage3 = false;
      this.showPage2 = true;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}





