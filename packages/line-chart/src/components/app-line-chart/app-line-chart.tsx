/**
 * Copyright (c) 2020 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
import { Component, State, Element, h } from '@stencil/core';
import '@visa/visa-charts-data-table';

@Component({
  tag: 'app-line-chart',
  styleUrl: 'app-line-chart.scss'
})
export class AppLineChart {
  @State() data: any;
  @State() secondData: any;
  @State() stateTrigger: any = 0;
  @State() hoverElement: any = '';
  @State() secondaryHoverElement: any = '';
  @State() secondaryHover: any = '';
  @State() clickElement: any = [];
  @State() secondaryClick: any = [];
  @State() yAxis: any = { visible: true, gridVisible: true, label: 'Score', format: '0[.][0]' };
  @State() seriesLabel: any = { visible: false, placement: 'right' };
  @State() ordinalAccessor: any = 'date';
  @State() valueAccessor: any = 'value';
  @State() seriesAccessor: any = 'category';
  @State() height: any = 300;
  @State() interactionKeys: any = [this.seriesAccessor];
  @State() secondaryKey: any = 'Card B';
  @State() secondaryOpacity: any = 1;
  @State() secondaryDataLabel: any = true;
  @State() secondarySeriesLabel: any = true;
  @State() unit: any = 'month';
  @State() tooltipLabel: any = {
    format: '',
    labelAccessor: [this.ordinalAccessor],
    labelTitle: [this.ordinalAccessor]
  };
  // @State() colors: any = [
  //   '#2e2e2e',
  //   '#434343',
  //   '#595959',
  //   '#717171',
  //   '#898989',
  //   '#a3a3a3',
  //   '#bdbdbd',
  //   '#d7d7d7',
  //   '#f2f2f2']
  // colorsBase: any = ['#2e2e2e',
  // '#434343',
  // '#595959',
  // '#717171',
  // '#898989',
  // '#a3a3a3',
  // '#bdbdbd',
  // '#d7d7d7',
  // '#f2f2f2']
  @State() colors: any = [
    '#f2f2f2',
    '#d7d7d7',
    '#bdbdbd',
    '#a3a3a3',
    '#898989',
    '#717171',
    '#595959',
    '#434343',
    '#2e2e2e'
  ];
  hoverStyle: any = { color: '#d7d7d7', strokeWidth: 3 };
  clickStyle: any = { color: '#222222', strokeWidth: 4 };
  simpleColors: any = ['#FFC4C4', '#C4DAFF'];
  colorsBase: any = ['#f2f2f2', '#d7d7d7', '#bdbdbd', '#a3a3a3', '#898989', '#717171', '#595959', '#434343', '#2e2e2e'];
  selectedColor: string = '#00CF81';
  hoveredColor: string = '#0068FF';
  accessibility: any = {
    longDescription: 'This is a chart template that was made to showcase the Visa Chart Components line plot',
    contextExplanation: 'This chart exists in a demo app created to let you quickly change props and see results',
    executiveSummary:
      'Within the category peer subset, we see the largest difference between high spend and millennials',
    purpose: 'The purpose of this chart template is to provide an example of a line plot',
    structureNotes:
      'The percentage of each high spenders, millennials, and all groups are shown as points in each of the four categories. These points of each group are connected by lines.',
    statisticalNotes: 'This chart is using dummy data',
    onChangeFunc: d => {
      this.onChangeFunc(d);
    },
    elementsAreInterface: false,
    disableValidation: true
  };
  colorIndexes: any = {};
  dashTestData: any = [
    {
      ordinal: 'a',
      value: 1,
      series: '1'
    },
    {
      ordinal: 'b',
      value: 1,
      series: '1'
    },
    {
      ordinal: 'a',
      value: 2,
      series: '2'
    },
    {
      ordinal: 'b',
      value: 2,
      series: '2'
    },
    {
      ordinal: 'a',
      value: 3,
      series: '3'
    },
    {
      ordinal: 'b',
      value: 3,
      series: '3'
    },
    {
      ordinal: 'a',
      value: 4,
      series: '4'
    },
    {
      ordinal: 'b',
      value: 4,
      series: '4'
    },
    {
      ordinal: 'a',
      value: 5,
      series: '5'
    },
    {
      ordinal: 'b',
      value: 5,
      series: '5'
    },
    {
      ordinal: 'a',
      value: 6,
      series: 'secondary'
    },
    {
      ordinal: 'b',
      value: 6,
      series: 'secondary'
    }
  ];
  startData: any = [
    {
      date: new Date('2016-01-01'),
      otherOrd: '1',
      otherCat: 'ABC',
      otherVal: 100,
      category: 'Card A',
      value: 7670994739
    },
    {
      date: new Date('2016-02-01'),
      otherOrd: '2',
      otherCat: 'ABC',
      otherVal: 220,
      category: 'Card A',
      value: 7628909842
    },
    {
      date: new Date('2016-03-01'),
      otherOrd: '3',
      otherCat: 'ABC',
      otherVal: 680,
      category: 'Card A',
      value: 8358837379
    },
    {
      date: new Date('2016-04-01'),
      otherOrd: '4',
      otherCat: 'ABC',
      otherVal: 923,
      category: 'Card A',
      value: 8334842966
    },
    {
      date: new Date('2016-05-01'),
      otherOrd: '5',
      otherCat: 'ABC',
      otherVal: 542,
      category: 'Card A',
      value: 8588600035
    },
    {
      date: new Date('2016-06-01'),
      otherOrd: '6',
      otherCat: 'ABC',
      otherVal: 452,
      category: 'Card A',
      value: 8484192554
    },
    {
      date: new Date('2016-07-01'),
      otherOrd: '7',
      otherCat: 'ABC',
      otherVal: 300,
      category: 'Card A',
      value: 8778636197
    },
    {
      date: new Date('2016-08-01'),
      otherOrd: '8',
      otherCat: 'ABC',
      otherVal: 200,
      category: 'Card A',
      value: 8811163096
    },
    {
      date: new Date('2016-09-01'),
      otherOrd: '9',
      otherCat: 'ABC',
      otherVal: 100,
      category: 'Card A',
      value: 8462148898
    },
    {
      date: new Date('2016-10-01'),
      otherOrd: '10',
      otherCat: 'ABC',
      otherVal: 100,
      category: 'Card A',
      value: 9051933407
    },
    {
      date: new Date('2016-11-01'),
      otherOrd: '11',
      otherCat: 'ABC',
      otherVal: 150,
      category: 'Card A',
      value: 8872849978
    },
    {
      date: new Date('2016-12-01'),
      otherOrd: '12',
      otherCat: 'ABC',
      otherVal: 150,
      category: 'Card A',
      value: 9709829820
    },
    {
      date: new Date('2017-01-01'),
      otherOrd: '13',
      otherCat: 'ABC',
      otherVal: 100,
      category: 'Card A',
      value: 7670994739
    },
    {
      date: new Date('2017-02-01'),
      otherOrd: '14',
      otherCat: 'ABC',
      otherVal: 100,
      category: 'Card A',
      value: 6670994739
    },
    {
      date: new Date('2016-01-01'),
      otherOrd: '1',
      otherCat: 'DEF',
      otherVal: 150,
      category: 'Card B',
      value: 6570994739
    },
    {
      date: new Date('2016-02-01'),
      otherOrd: '2',
      otherCat: 'DEF',
      otherVal: 250,
      category: 'Card B',
      value: 4628909842
    },
    {
      date: new Date('2016-03-01'),
      otherOrd: '3',
      otherCat: 'DEF',
      otherVal: 400,
      category: 'Card B',
      value: 4358837379
    },
    {
      date: new Date('2016-04-01'),
      otherOrd: '4',
      otherCat: 'DEF',
      otherVal: 500,
      category: 'Card B',
      value: 5534842966
    },
    {
      date: new Date('2016-05-01'),
      otherOrd: '5',
      otherCat: 'DEF',
      otherVal: 700,
      category: 'Card B',
      value: 4388600035
    },
    {
      date: new Date('2016-06-01'),
      otherOrd: '6',
      otherCat: 'DEF',
      otherVal: 800,
      category: 'Card B',
      value: 3484192554
    },
    {
      date: new Date('2016-07-01'),
      otherOrd: '7',
      otherCat: 'DEF',
      otherVal: 800,
      category: 'Card B',
      value: 3578636197
    },
    {
      date: new Date('2016-08-01'),
      otherOrd: '8',
      otherCat: 'DEF',
      otherVal: 500,
      category: 'Card B',
      value: 6411163096
    },
    {
      date: new Date('2016-09-01'),
      otherOrd: '9',
      otherCat: 'DEF',
      otherVal: 670,
      category: 'Card B',
      value: 5262148898
    },
    {
      date: new Date('2016-10-01'),
      otherOrd: '10',
      otherCat: 'DEF',
      otherVal: 850,
      category: 'Card B',
      value: 4651933407
    },
    {
      date: new Date('2016-11-01'),
      otherOrd: '11',
      otherCat: 'DEF',
      otherVal: 850,
      category: 'Card B',
      value: 6772849978
    },
    {
      date: new Date('2016-12-01'),
      otherOrd: '12',
      otherCat: 'DEF',
      otherVal: 940,
      category: 'Card B',
      value: 5609829820
    },
    {
      date: new Date('2017-01-01'),
      otherOrd: '13',
      otherCat: 'DEF',
      otherVal: 150,
      category: 'Card B',
      value: 6570994739
    },
    {
      date: new Date('2017-02-01'),
      otherOrd: '14',
      otherCat: 'DEF',
      otherVal: 150,
      category: 'Card B',
      value: 5570994739
    }
  ];
  dataStorage: any = [
    this.startData,
    [
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'ABC',
        otherVal: 800,
        category: 'Card A',
        value: 7670994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'ABC',
        otherVal: 500,
        category: 'Card A',
        value: 7628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'ABC',
        otherVal: 670,
        category: 'Card A',
        value: 8358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 8334842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'ABC',
        otherVal: 220,
        category: 'Card A',
        value: 8588600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'ABC',
        otherVal: 680,
        category: 'Card A',
        value: 8484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'ABC',
        otherVal: 923,
        category: 'Card A',
        value: 8778636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'ABC',
        otherVal: 542,
        category: 'Card A',
        value: 8811163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'ABC',
        otherVal: 452,
        category: 'Card A',
        value: 8462148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'ABC',
        otherVal: 300,
        category: 'Card A',
        value: 9051933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'ABC',
        otherVal: 200,
        category: 'Card A',
        value: 8872849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 9709829820
      },
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 4628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'DEF',
        otherVal: 940,
        category: 'Card B',
        value: 4358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'DEF',
        otherVal: 100,
        category: 'Card B',
        value: 5534842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 4388600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3578636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'DEF',
        otherVal: 250,
        category: 'Card B',
        value: 6411163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'DEF',
        otherVal: 400,
        category: 'Card B',
        value: 5262148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 4651933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'DEF',
        otherVal: 700,
        category: 'Card B',
        value: 6772849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'DEF',
        otherVal: 800,
        category: 'Card B',
        value: 5609829820
      }
    ],
    [
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'ABC',
        otherVal: 800,
        category: 'Card A',
        value: 7670994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'ABC',
        otherVal: 500,
        category: 'Card A',
        value: 7628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'ABC',
        otherVal: 670,
        category: 'Card A',
        value: 8358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 8334842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'ABC',
        otherVal: 220,
        category: 'Card A',
        value: 8588600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'ABC',
        otherVal: 680,
        category: 'Card A',
        value: 8484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'ABC',
        otherVal: 923,
        category: 'Card A',
        value: 8778636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'ABC',
        otherVal: 542,
        category: 'Card A',
        value: 8811163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'ABC',
        otherVal: 452,
        category: 'Card A',
        value: 8462148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'ABC',
        otherVal: 300,
        category: 'Card A',
        value: 9051933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'ABC',
        otherVal: 200,
        category: 'Card A',
        value: 8872849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 9709829820
      },
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 4628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'DEF',
        otherVal: 940,
        category: 'Card B',
        value: 4358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'DEF',
        otherVal: 100,
        category: 'Card B',
        value: 5534842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 4388600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3578636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'DEF',
        otherVal: 250,
        category: 'Card B',
        value: 6411163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'DEF',
        otherVal: 400,
        category: 'Card B',
        value: 5262148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 4651933407
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'DEF',
        otherVal: 800,
        category: 'Card B',
        value: 5609829820
      }
    ],
    [
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 4628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'DEF',
        otherVal: 940,
        category: 'Card B',
        value: 4358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'DEF',
        otherVal: 100,
        category: 'Card B',
        value: 5534842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 4388600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3578636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'DEF',
        otherVal: 250,
        category: 'Card B',
        value: 6411163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'DEF',
        otherVal: 400,
        category: 'Card B',
        value: 5262148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 4651933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'DEF',
        otherVal: 700,
        category: 'Card B',
        value: 6772849978
      }
    ],
    [
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'ABC',
        otherVal: 800,
        category: 'Card A',
        value: 7670994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'ABC',
        otherVal: 500,
        category: 'Card A',
        value: 7628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'ABC',
        otherVal: 670,
        category: 'Card A',
        value: 8358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 8334842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'ABC',
        otherVal: 220,
        category: 'Card A',
        value: 8588600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'ABC',
        otherVal: 680,
        category: 'Card A',
        value: 8484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'ABC',
        otherVal: 923,
        category: 'Card A',
        value: 8778636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'ABC',
        otherVal: 542,
        category: 'Card A',
        value: 8811163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'ABC',
        otherVal: 452,
        category: 'Card A',
        value: 8462148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'ABC',
        otherVal: 300,
        category: 'Card A',
        value: 9051933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'ABC',
        otherVal: 200,
        category: 'Card A',
        value: 8872849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 9709829820
      },
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 4628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'DEF',
        otherVal: 940,
        category: 'Card B',
        value: 4358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'DEF',
        otherVal: 100,
        category: 'Card B',
        value: 5534842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 4388600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 3578636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'DEF',
        otherVal: 250,
        category: 'Card B',
        value: 6411163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'DEF',
        otherVal: 400,
        category: 'Card B',
        value: 5262148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 4651933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'DEF',
        otherVal: 700,
        category: 'Card B',
        value: 6772849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'DEF',
        otherVal: 800,
        category: 'Card B',
        value: 5609829820
      }
    ],
    this.startData,
    [
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 7670994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'ABC',
        otherVal: 220,
        category: 'Card A',
        value: 7628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'ABC',
        otherVal: 680,
        category: 'Card A',
        value: 8358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'ABC',
        otherVal: 923,
        category: 'Card A',
        value: 8334842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'ABC',
        otherVal: 542,
        category: 'Card A',
        value: 8588600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'ABC',
        otherVal: 452,
        category: 'Card A',
        value: 8484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'ABC',
        otherVal: 300,
        category: 'Card A',
        value: 8778636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'ABC',
        otherVal: 200,
        category: 'Card A',
        value: 8811163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 8462148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 9051933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'ABC',
        otherVal: 150,
        category: 'Card A',
        value: 8872849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'ABC',
        otherVal: 150,
        category: 'Card A',
        value: 9709829820
      },
      {
        date: new Date('2017-01-01'),
        otherOrd: '13',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 7670994739
      },
      {
        date: new Date('2017-02-01'),
        otherOrd: '14',
        otherCat: 'ABC',
        otherVal: 100,
        category: 'Card A',
        value: 6670994739
      },
      {
        date: new Date('2016-01-01'),
        otherOrd: '1',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2016-02-01'),
        otherOrd: '2',
        otherCat: 'DEF',
        otherVal: 250,
        category: 'Card B',
        value: 4628909842
      },
      {
        date: new Date('2016-03-01'),
        otherOrd: '3',
        otherCat: 'DEF',
        otherVal: 400,
        category: 'Card B',
        value: 4358837379
      },
      {
        date: new Date('2016-04-01'),
        otherOrd: '4',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 5534842966
      },
      {
        date: new Date('2016-05-01'),
        otherOrd: '5',
        otherCat: 'DEF',
        otherVal: 700,
        category: 'Card B',
        value: 4388600035
      },
      {
        date: new Date('2016-06-01'),
        otherOrd: '6',
        otherCat: 'DEF',
        otherVal: 800,
        category: 'Card B',
        value: 3484192554
      },
      {
        date: new Date('2016-07-01'),
        otherOrd: '7',
        otherCat: 'DEF',
        otherVal: 800,
        category: 'Card B',
        value: 3578636197
      },
      {
        date: new Date('2016-08-01'),
        otherOrd: '8',
        otherCat: 'DEF',
        otherVal: 500,
        category: 'Card B',
        value: 6411163096
      },
      {
        date: new Date('2016-09-01'),
        otherOrd: '9',
        otherCat: 'DEF',
        otherVal: 670,
        category: 'Card B',
        value: 5262148898
      },
      {
        date: new Date('2016-10-01'),
        otherOrd: '10',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 4651933407
      },
      {
        date: new Date('2016-11-01'),
        otherOrd: '11',
        otherCat: 'DEF',
        otherVal: 850,
        category: 'Card B',
        value: 6772849978
      },
      {
        date: new Date('2016-12-01'),
        otherOrd: '12',
        otherCat: 'DEF',
        otherVal: 940,
        category: 'Card B',
        value: 5609829820
      },
      {
        date: new Date('2017-01-01'),
        otherOrd: '13',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 6570994739
      },
      {
        date: new Date('2017-02-01'),
        otherOrd: '14',
        otherCat: 'DEF',
        otherVal: 150,
        category: 'Card B',
        value: 2570994739
      }
    ]
  ];
  secondStorage: any;
  clickedIndex: number = -1;
  hoveredIndex: number = -1;
  @Element()
  appEl: HTMLElement;

  componentWillUpdate() {
    // console.log("will update", this.clickElement);
  }
  prepareColor(d, e) {
    // first check if array already has click color... if so then we remove!
    const colorArray = [...this.colors];
    const index = this.colorIndexes[d.category];
    if (e === 'selectedColor') {
      if (this.clickedIndex === index) {
        colorArray[index] = index === this.hoveredIndex ? this.hoveredColor : this.colorsBase[index];
        this.clickedIndex = -1;
      } else {
        colorArray[this.clickedIndex] = this.colorsBase[this.clickedIndex];
        this.clickedIndex = index;
        colorArray[index] = this[e];
      }
    } else if (this.hoveredIndex === index) {
      colorArray[index] = this.colorsBase[index];
      this.hoveredIndex = -1;
    } else {
      this.hoveredIndex = index;
      colorArray[index] = this[e];
    }
    this.colors = colorArray;
  }

  onClickFunc = ev => {
    const d = ev.detail;
    if (d) {
      const newClicks = [...this.clickElement];
      const keys = Object.keys(d);
      const index = this.clickElement.findIndex(o => {
        let conditionsMet = 0;
        keys.forEach(key => {
          conditionsMet += o[key] === d[key] ? 1 : 0;
        });
        return conditionsMet && conditionsMet === keys.length;
      });
      if (index > -1) {
        newClicks.splice(index, 1);
      } else {
        newClicks.push(d);
      }
      this.clickElement = newClicks;
    }
  };
  onHoverFunc = ev => {
    this.hoverElement = ev.detail;
  };
  onMouseOut = () => {
    this.hoverElement = '';
  };
  secondaryHoverFunc(ev) {
    const d = ev.detail;
    this.seriesLabel = { visible: true, placement: 'right' };
    this.secondaryHover = d;
    this.prepareColor(d, 'hoveredColor');
  }
  secondaryMouseOut() {
    const duplicate = { ...this.secondaryHover };
    this.secondaryHover = '';
    this.secondaryHoverElement = '';
    this.seriesLabel = { visible: false, placement: 'right' };
    // const colorArray = [...this.colors];
    // const index = colorArray.indexOf(this.hoveredColor);
    // colorArray.splice(index, 1, this.colorsBase[index]);
    this.prepareColor(duplicate, 'hoveredColor');
    // this.colors = colorArray;
  }
  onChangeFunc(d) {
    console.log(d);
  }
  changeData() {
    this.stateTrigger = this.stateTrigger < this.dataStorage.length - 1 ? this.stateTrigger + 1 : 0;
  }
  changeOrdinalAccessor() {
    this.ordinalAccessor = this.ordinalAccessor !== 'date' ? 'date' : 'otherOrd';
  }

  changeValueAccessor() {
    this.valueAccessor = this.valueAccessor !== 'value' ? 'value' : 'otherVal';
  }

  changeSeriesAccessor() {
    this.seriesAccessor = this.seriesAccessor !== 'category' ? 'category' : 'otherCat';
  }
  changeHeight() {
    this.height = this.height !== 600 ? 600 : 300;
  }
  changeInteractionKeys() {
    this.interactionKeys =
      this.interactionKeys[0] !== this.seriesAccessor ? [this.seriesAccessor] : [this.ordinalAccessor];
  }
  changeSecondaryLine() {
    this.secondaryKey = this.secondaryKey !== 'Card B' ? 'Card B' : 'Card A';
  }
  changeSecondaryLineOpacity() {
    this.secondaryOpacity = this.secondaryOpacity !== 1 ? 1 : 0.5;
  }
  changeSecondaryLineDL() {
    this.secondaryDataLabel = this.secondaryDataLabel !== true ? true : false;
  }
  changeSecondaryLineSL() {
    this.secondarySeriesLabel = this.secondarySeriesLabel !== true ? true : false;
  }
  changeTooltipLabel() {
    this.tooltipLabel =
      this.tooltipLabel.labelAccessor[0] !== this.ordinalAccessor
        ? { format: ['%b'], labelAccessor: [this.ordinalAccessor], labelTitle: [this.ordinalAccessor] }
        : { format: '', labelAccessor: [this.seriesAccessor], labelTitle: [this.seriesAccessor] };
    // @State() colors: any = [ : 'otherGroup';
  }
  changeUnit() {
    this.unit = this.unit !== 'month' ? 'month' : 'year';
  }

  render() {
    this.data = this.dataStorage[this.stateTrigger];

    return (
      <div>
        <line-chart
          mainTitle={'Dash Patterns'}
          subTitle={'5 Dash Patterns + Secondary Line Pattern'}
          data={this.dashTestData}
          ordinalAccessor="ordinal"
          seriesAccessor="series"
          valueAccessor="value"
          uniqueID="dash-test"
          colors={['#222222', '#222222', '#222222', '#222222', '#222222', '#222222']}
          dataLabel={{ visible: false }}
          secondaryLines={{
            keys: ['secondary'],
            opacity: 1,
            showDataLabel: true,
            showSeriesLabel: true
          }}
          margin={{
            top: 5,
            left: -200,
            bottom: 36,
            right: 5
          }}
          padding={{
            top: 5,
            left: 36,
            bottom: 36,
            right: 5
          }}
          showBaselineX={false}
          yAxis={{ visible: false, gridVisible: false }}
          xAxis={{ visible: false, gridVisible: false }}
        />
        <button
          onClick={() => {
            this.changeData();
          }}
        >
          change data
        </button>
        <button
          onClick={() => {
            this.changeOrdinalAccessor();
          }}
        >
          change ordinalAccessor
        </button>
        <button
          onClick={() => {
            this.changeValueAccessor();
          }}
        >
          change valueAccessor
        </button>
        <button
          onClick={() => {
            this.changeSeriesAccessor();
          }}
        >
          change seriesAccessor
        </button>
        <button
          onClick={() => {
            this.changeHeight();
          }}
        >
          change height
        </button>
        <button
          onClick={() => {
            this.changeInteractionKeys();
          }}
        >
          change interaction keys
        </button>
        <button
          onClick={() => {
            this.changeSecondaryLine();
          }}
        >
          change secondary line
        </button>
        <button
          onClick={() => {
            this.changeSecondaryLineOpacity();
          }}
        >
          change secondary line opacity
        </button>
        <button
          onClick={() => {
            this.changeSecondaryLineDL();
          }}
        >
          toggle secondary line labels
        </button>
        <button
          onClick={() => {
            this.changeSecondaryLineSL();
          }}
        >
          toggle secondary series labels
        </button>
        <button
          onClick={() => {
            this.changeTooltipLabel();
          }}
        >
          change tooltip
        </button>
        <button
          onClick={() => {
            this.changeUnit();
          }}
        >
          change unit
        </button>
        <line-chart
          // Chart Attributes (1/7)
          mainTitle={'Line Chart in app'}
          subTitle={'example'}
          height={this.height}
          width={600}
          // xAxis={{ visible: true, gridVisible: true, label: 'Quarter', unit: this.unit, format: '%b' }}
          // yAxis={{ visible: true, gridVisible: true, label: 'Volume', format: '0[.][0][0]a' }}
          // minValueOverride={-2000000}
          // padding={{
          //   top: 20,
          //   left: 60,
          //   right: 190,
          //   bottom: 50
          // }}
          data={this.data}
          ordinalAccessor={this.ordinalAccessor}
          valueAccessor={this.valueAccessor}
          seriesAccessor={this.seriesAccessor}
          // dataLabel={{ visible: true, placement: 'top', labelAccessor: this.valueAccessor, format: '0.0[a]' }}
          // legend={{ visible: false, labels: [], interactive: true }}
          // colorPalette={'sequential_grey'}
          cursor={'pointer'}
          strokeWidth={2}
          colors={this.simpleColors}
          // colors={['sec_orange', 'sec_blue', 'sec_orange', 'supp_green', 'sec_blue']}
          hoverOpacity={0.2}
          hoverStyle={this.hoverStyle}
          clickStyle={this.clickStyle}
          clickHighlight={this.clickElement}
          hoverHighlight={this.hoverElement}
          interactionKeys={this.interactionKeys}
          // referenceLines= {[{label:'Average',labelPlacementHorizontal:'right',labelPlacementVertical:'bottom',value:7300000000}]}
          secondaryLines={{
            keys: [this.secondaryKey],
            opacity: this.secondaryOpacity,
            showDataLabel: this.secondaryDataLabel,
            showSeriesLabel: this.secondarySeriesLabel
          }}
          onHoverFunc={this.onHoverFunc}
          onClickFunc={this.onClickFunc}
          onMouseOutFunc={this.onMouseOut}
          showTooltip={true}
          tooltipLabel={this.tooltipLabel}
          // annotations={[
          //   {
          //     note: { label: 'Low Card B in June', bgPadding: 0, align: 'right', wrap: 130 },
          //     data: {
          //       date: this.data[0][this.ordinalAccessor],
          //       category: 'Card B',
          //       value: this.data[0][this.valueAccessor]
          //     },
          //     dx: '35%',
          //     dy: '2%',
          //     color: 'categorical_orange',
          //     type: 'annotationCalloutCircle',
          //     subject: { radius: 6 }
          //   }
          // ]}
          accessibility={this.accessibility}
          dotRadius={4}
        />
      </div>
    );
  }
}
