/**
 * Copyright (c) 2020 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
export interface IStackedBarChartProps {
  /**
   * @shortDescription Sets the heading level (which also sets sublevels) for the chart. "p", "span", and "div" are also valid.
   * @controlName Select
   * @groupName Base
   * @sortOrder 6 */
  highestHeadingLevel: string | number;

  /**
   * @shortDescription Main title of the chart
   * @controlName TextField
   * @groupName Base */
  mainTitle: string;

  /**
   * @shortDescription Subtitle of the chart
   * @controlName TextField
   * @groupName Base */
  subTitle: string;

  /**
   * @shortDescription Displays bars in chart vertically or horizontally
   * @controlName Radio
   * @groupName Base */
  layout: string;

  /**
   * @shortDescription Height of the chart area in pixels
   * @controlName Slider
   * @groupName Base */
  height: number;

  /**
   * @shortDescription Width of the chart area in pixels
   * @controlName Slider
   * @groupName Base */
  width: number;

  /**
   * @shortDescription Margin between the subtitle and the chart area, or between the title and chart area if no subtitle is specified
   * @controlName TextArea
   * @groupName Margin */
  margin: IBoxModelType;

  /**
   * @shortDescription Padding between plot area and axes lines
   * @controlName TextArea
   * @groupName Padding */
  padding: IBoxModelType;

  /**
   * @shortDescription Data used to create chart
   * @controlName TextArea
   * @groupName Data */
  data: object[];

  /**
   * @shortDescription ID used to identify chart (must be unique), helpful for validation messages. Defaults to UUID v4 standard.
   * @controlName TextField
   * @groupName Data */
  uniqueID: string;

  /**
   * @shortDescription Adds annotations to the chart, see d3-annotation
   * @controlName TextArea
   * @groupName Annotations */
  annotations: object[];

  /**
   * @shortDescription  Key used to determine bar's categorical property
   * @controlName TextField
   * @groupName Data */
  ordinalAccessor: string;

  /**
   * @shortDescription  Key used to determine bar's numeric property
   * @controlName TextField
   * @groupName Data */
  valueAccessor: string;

  /**
   * @shortDescription Key used to determine bar's group property
   * @controlName TextField
   * @groupName Data */
  groupAccessor: string;

  /**
   * @shortDescription Key used to determine sorting order
   * @controlName Radio
   * @groupName Data */
  sortOrder: string;

  /**
   * @shortDescription Controls the visibility of the x-axis, the visibility of the grid, and the axis label and formatting
   * @controlName TextArea
   * @groupName Axes */
  xAxis: IAxisType;

  /**
   * @shortDescription Controls the visibility of the y-axis, the visibility of the grid, and the axis label and formatting
   * @controlName TextArea
   * @groupName Axes */
  yAxis: IAxisType;

  /**
   * @shortDescription When selected, wraps the ordinal tick labels
   * @controlName Toggle
   * @groupName Axes */
  wrapLabel: boolean;

  /**
   * @shortDescription Sets visibility and label of chart legend
   * @controlName TextArea
   * @groupName Labels */
  legend: ILegendType;

  /**
   * @shortDescription When selected, allows ticks to be normalized
   * @controlName Toggle
   * @groupName Labels */
  normalized: boolean;

  /**
   * @shortDescription Accepts array of color strings or values to customize colors.
   * @controlName TextArea
   * @groupName Style */
  colors: string[];

  /**
   * @shortDescription Changes pointer type during mouse over on bars
   * @controlName Radio
   * @groupName Style */
  cursor: string;

  /**
   * @shortDescription Rounds the corner of the bars by defining the radius of an ellipse used to round corners
   * @controlName Slider
   * @groupName Style */
  roundedCorner: number;

  /**
   * @shortDescription Percent of bar padding
   * @controlName Slider
   * @groupName Axes */
  barIntervalRatio: number;

  /**
   * @shortDescription Sets opacity of element on hovering it
   * @controlName Slider
   * @groupName Style */
  hoverOpacity: number;

  /**
   * @shortDescription Accepts array of color strings or values to customize colors.
   * @controlName Select
   * @groupName Style */
  colorPalette: string;

  /**
   * @shortDescription Sets the color and opacity of bar during mouse over
   * @controlName TextArea
   * @groupName Style */
  hoverStyle: IHoverStyleType;

  /**
   * @shortDescription Sets the styling of a bars when they are selected
   * @controlName TextArea
   * @groupName Style */
  clickStyle: IClickStyleType;

  /**
   * @shortDescription Sets the styling of the reference line
   * @controlName TextArea
   * @groupName Reference_Line */
  referenceStyle: IReferenceStyleType;

  /**
   * @shortDescription Manages messages and settings for chart accessibility
   * @controlName TextArea
   * @groupName Accessibility */
  accessibility: IAccessibilityType;

  /**
   * @shortDescription Controls visibility, styling and placement of data labels
   * @controlName TextArea
   * @groupName Labels */
  dataLabel: IDataLabelType;

  /**
   * @shortDescription Shows stack labels equal to zero
   * @controlName Toggle
   * @hide true
   * @groupName Labels */
  showZeroLabels: boolean;

  /**
   * @shortDescription When selected, allows tooltips to be displayed
   * @controlName Toggle
   * @groupName Labels */
  showTooltip: boolean;

  /**
   * @shortDescription Customize the tooltip content
   * @controlName TextArea
   * @groupName Labels */
  tooltipLabel: ITooltipLabelType;

  /**
   * @shortDescription When selected, allows total value to be displayed
   * @controlName Toggle
   * @groupName Labels */
  showTotalValue: boolean;

  /**
   * @shortDescription Overrides the calculated default max value
   * @controlName TextField
   * @groupName Axes */
  maxValueOverride: number;

  /**
   * @shortDescription Overrides the calculated default min value
   * @controlName TextField
   * @groupName Axes */
  minValueOverride: number;

  /**
   * @shortDescription Data that sets the location and labeling of the reference line
   * @controlName TextArea
   * @groupName Reference_Line */
  referenceLines: object[];

  /**
   * @shortDescription Sets the column names of data to interact with
   * @controlName TextArea
   * @groupName Style */
  interactionKeys: string[];

  /**
   * @shortDescription Suppresses and disables all event emitters. Setting to true can increase performance for non-interactive charts.
   * @controlName Toggle
   * @groupName Events */
  suppressEvents: boolean;

  /**
   * @shortDescription Set a callback for click event on each data point.
   * @controlName TextArea
   * @groupName Events */
  clickFunc: any;

  /**
   * @shortDescription Set a callback to execute when mouse enters the chart.
   * @controlName TextArea
   * @groupName Events */
  hoverFunc: any;

  /**
   * @shortDescription Set a callback to execute when mouse leaves the chart.
   * @controlName TextArea
   * @groupName Events */
  mouseOutFunc: any;

  /**
   * @shortDescription
   * @controlName TextArea
   * @groupName Style */
  hoverHighlight: object;

  /**
   * @shortDescription
   * @controlName TextArea
   * @groupName Style */
  clickHighlight: object[];
}

export interface IDataLabelType {
  visible: boolean;
  placement?: string;
  labelAccessor?: string;
  format?: string;
}

export interface ILegendType {
  visible: boolean;
  labels?: string[];
  interactive?: boolean;
  format?: string;
  type?: string;
}

export interface IAxisType {
  visible: boolean;
  gridVisible?: boolean;
  label?: string;
  format?: string;
  tickInterval?: number;
  placement?: string;
}

export interface IBoxModelType {
  top: number;
  bottom: number;
  right: number;
  left: number;
}

export interface IHoverStyleType {
  color?: string;
  strokeWidth?: string | number;
}

export interface IClickStyleType {
  color?: string;
  strokeWidth?: string | number;
}

export interface IAccessibilityType {
  longDescription?: string;
  executiveSummary?: string;
  purpose?: string;
  contextExplanation?: string;
  title?: string;
  elementDescriptionAccessor?: string;
  statisticalNotes?: string;
  structureNotes?: string;
  includeDataKeyNames?: boolean;
  hideDataTableButton?: boolean;
  disableValidation?: boolean;
  elementsAreInterface?: any;
  onChangeFunc?: any;
}

export interface IReferenceStyleType {
  color: string;
  strokeWidth: string | number;
  opacity: number;
  dashed: string;
}

export interface ITooltipLabelType {
  labelAccessor: string[];
  labelTitle: string[];
  format: string | string[];
}
