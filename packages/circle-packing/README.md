# @visa/circle-packing

---

![An image depicting an example of the default circle-packing component](./docs/circle-packing-1.png 'Example image of a circle packing')
<br>

```js
<circle-packing
  accessibility = {...}
  data = {[{"id":1,"Type":"World","Country":"","value":10},{data}]}
  displayDepth = {2}
  nodeAccessor = {"Type"}
  parentAccessor = {"Country"}
  sizeAccessor = {"value"}
/>
```

<br>

<details open="open">
  <summary>Jump To:</summary>
  <ol>
    <li>
      <a href="#installation-steps">Installation Steps</a>
    </li>
    <li>
      <a href="#props-documentation">Props Documentation</a>
      <ul>
        <li><a href="#base-props">Base Props </a></li>
        <li><a href="#data-props">Data Props</a></li>
        <li><a href="#accessibility-props">Accessibility Props</a></li>
        <li><a href="#annotation-props">Annotation Props</a></li>
        <li><a href="#event-props">Event Props</a></li>
        <li><a href="#label-props">Label Props</a></li>
        <li><a href="#margin-and-padding-props">Margin & Padding Props</a></li>
        <li><a href="#style-props">Style Props</a></li>
      </ul>
    </li>
  </ol>
</details>
<br>

## <a name="installation-steps">#</a> Installation Steps

---

- Using npm

  ```
  $ npm i @visa/circle-packing
  ```

- Using yarn
  ```
  $ yarn add @visa/circle-packing
  ```

<br>

## <a name="props-documentation">#</a> Props Documentation

---

<br>

### <a name="base-props" href="#base-props">#</a> Base Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name        | Type   | Default Value(s)                              | Description                                                                                                                                        |
| ----------- | ------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `height`    | number | 400                                           | Height in px of the chart container                                                                                                                |
| `width`     | number | 400                                           | Width in px of the chart container                                                                                                                 |
| `mainTitle` | string | 'Circle Packing Title'                        | The `dynamic` tag of title for the chart (or you can create your own separately). See `highestHeadingLevel` prop for how tags get assigned.        |
| `subTitle`  | string | 'This is the circle packing chart's subtitle' | The `dynamic` tag for a sub title for the chart (or you can create your own separately). See `highestHeadingLevel` prop for how tags get assigned. |

<br>
<br>

### <a name="data-props" href="#data-props">#</a> Data Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name             | Type     | Default Value(s) | Description                                                                                                                                                                                                                                                                                    |
| ---------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nodeAccessor`   | string   | 'childNode'      | Key used to determine circle's child, must be a unique child.                                                                                                                                                                                                                                  |
| `parentAccessor` | string   | 'parentNode'     | Key used to determine circle's parent.                                                                                                                                                                                                                                                         |
| `sizeAccessor`   | string   | 'value'          | Key used to determine circle size.                                                                                                                                                                                                                                                             |
| `uniqueID`       | string   | `undefined`      | ID used to identify chart (must be unique per chart), helpful for validation messages. Defaults to UUID v4 standard.                                                                                                                                                                           |
| `data`           | object[] | `undefined`      | Data used to create chart, an array of objects which includes keys that map to above accessors. We leverage [d3-hierarchy#stratify](https://github.com/d3/d3-hierarchy#stratify) for data structuring, refer to requirements documented for that algorithm for additional data specifications. |
| `dataDepth`      | number   | 5                | Sets the number of data layers to show on circle pack, combine with `displayDepth` to improve performance of deeply nested hierarchies.                                                                                                                                                        |
| `displayDepth`   | number   | 2                | Sets the number of visible layers displayed at one time on circle pack, combine with `dataDepth` to improve performance of deeply nested hierarchies.                                                                                                                                          |

<br>
<br>

### <a name="accessibility-props" href="#accessibility-props">#</a> Accessibility Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name            | Type                 | Default Value(s)                                 | Description                                                                           |
| --------------- | -------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| `accessibility` | object (custom type) | [IAccessibilityType](../types/src/prop-types.ts) | Manages messages and settings for chart accessibility, _see object definition below_. |

<br>

#### IAccessibilityType Definition

| Name (accessibility.)        | Type        | Default Value(s) | Description                                                                                                                                                                |
| ---------------------------- | ----------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `longDescription`            | string      | ''               | Use this to add a helpful description of the chart.                                                                                                                        |
| `executiveSummary`           | string      | ''               | Use this to describe the biggest takeaway of the chart.                                                                                                                    |
| `purpose`                    | string      | ''               | Use this to describe the purpose of this particular chart.                                                                                                                 |
| `contextExplanation`         | string      | ''               | Use this to explain any controls or content on your page that affect or are affected by this chart.                                                                        |
| `title`                      | string      | ''               | Gives the chart an alternate title to be used by screen readers.                                                                                                           |
| `elementDescriptionAccessor` | string      | ''               | Optional key used to add an additional description to any element, from your data.                                                                                         |
| `statisticalNotes`           | string      | ''               | Use this to provide any statistical explanations, such as trends, clusters, patterns, or outliers.                                                                         |
| `structureNotes`             | string      | ''               | Use this to describe special visual features of the chart, such as sorting, color grouping, etc.                                                                           |
| `includeDataKeyNames`        | boolean     | false            | If true, includes data key names in voice over description of each element. EG "Year over year growth: 5.6%" instead of just "5.6%"                                        |
| `hideDataTableButton`        | boolean     | false            | If true, hides the data table button (but it is still available to screen reader users).                                                                                   |
| `disableValidation`          | boolean     | false            | If true, disables validations of accessibility props for this chart. Validation is intended to be used during development; upon completion, validation should be disabled. |
| `elementsAreInterface`       | any/boolean | null             | Defaults to null. Set to true if interacting with the elements in this chart affects your application. Otherwise, must be set to false.                                    |
| `onChangeFunc`               | function    | `undefined`      | Custom event listener (changeFunc) that enables dev to control accessibility page experience when chart data updates.                                                      |
| `showSmallLabels`            | boolean     | false            | Defaults to false. Set to true if you would like to display labels on small elements that are likely to overlap. Note, this could impact accessibility of your graphic.    |
| `hideStrokes`                | boolean     | false            | Defaults to false. Set to true if you would like to remove automated stroke outlines from the chart, note, this could impact accessibility of your graphic.                |
| `hideTextures`               | boolean     | false            | Defaults to false. Set to true if you would like to remove textures from the chart, note, this could impact accessibility of your graphic.                                 |
| `showExperimentalTextures`   | boolean     | false            | Defaults to false. Set to true if you would like leverage our textures which are still undergoing research and development.                                                |

<br>

```js
// accessibility = { ...accessibility, onChangeFunc: d => changeHandler(d)}
// example of setting updates on page based on changeFunc custom events
const changeHandler = d => {
  if (d.updated && (d.removed || d.added)) {
    let updates = 'The circle-packing chart has ';
    if (d.removed) {
      updates += 'removed ' + d.removed + ' circle' + (d.removed > 1 ? 's ' : ' ');
    }
    if (d.added) {
      updates +=
        (d.removed ? 'and ' : '') + 'added ' + d.added + (d.removed ? '' : d.added > 1 ? ' circles' : ' circle');
    }
    setChartUpdates(updates);
  } else if (d.updated) {
    const newUpdate = "The chart's data has changed, but no circles were removed or added.";
    setChartUpdates(
      newUpdate !== chartUpdates
        ? newUpdate
        : "The chart's data has changed again, but no circles were removed or added."
    );
  }
};
```

<br>
<br>

### <a name="annotation-props" href="#annotation-props">#</a> Annotation Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name          | Type                 | Default Value(s) | Description                                                                                             |
| ------------- | -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `annotations` | array[{annotations}] | []               | Adds annotations to the chart, see [d3-svg-annotation](https://d3-annotation.susielu.com/) by Susie Lu. |

<br>

#### annotations object definition

`annotations` is an array of objects which needs to have the following properties within them. See the detailed api specifications from [d3-svg-annotation](https://d3-annotation.susielu.com/#api), along with additional properties layered on top of that work, documented below.

| Name                       | Type   | Default Value(s) | Description                                                                    |
| -------------------------- | ------ | ---------------- | ------------------------------------------------------------------------------ |
| `accessibilityDescription` | string | `undefined`      | Sets the accessibility description for the annotation for screen reader users. |

<br>
<br>

### <a name="event-props" href="#event-props">#</a> Event Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

[Events in stencil.js](https://stenciljs.com/docs/events) dispatch [Custom DOM events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events) for other components to handle, we use Stencil's @Event() decorator to emit events (click, hover, mouseOut) from end user activity on our charts.

| Name              | Type                 | Default Value(s)                              | Description                                                                                                                                                                                                                                                                             |
| ----------------- | -------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `suppressEvents`  | boolean              | false                                         | Suppresses and disables all event emitters. Setting to true can increase performance for non-interactive charts.                                                                                                                                                                        |
| `cursor`          | string               | 'default'                                     | Changes pointer type during mouse over on elements. Valid values are 'default' or 'pointer'.                                                                                                                                                                                            |
| `onClickFunc`     | function             | `undefined`                                   | When clickFunc event occurs (e.g., mouse/keyboard click on chart geometry), this event handler will be called with the custom event object (e.g., e), containing data at e.detail. You will need to construct your own functionality of what actions to take within the callback.       |
| `clickHighlight`  | object[]             | []                                            | Data used to track chart selections, an array of objects which includes keys that map to above accessors.                                                                                                                                                                               |
| `clickStyle`      | object (custom type) | [IClickStyleType](../types/src/prop-types.ts) | Sets the styling of elements when they are selected, _see object definition below_.                                                                                                                                                                                                     |
| `onHoverFunc`     | function             | `undefined`                                   | When hoverFunc event occurs (e.g., mouse hover/keyboard focus on chart geometry), this event handler will be called with the custom event object (e.g., e), containing data at e.detail. You will need to construct your own functionality of what actions to take within the callback. |
| `onMouseOutFunc`  | function             | `undefined`                                   | When mouseOutFunc event occurs (e.g., mouse/keyboard blur on chart geometry), this event handler will be called, and has no data object. You will need to construct your own functionality of what actions to take within the callback.                                                 |
| `hoverHighlight`  | object               | {}                                            | Datum object used to track active chart element, the object should include keys that map to above accessors.                                                                                                                                                                            |
| `hoverStyle`      | object (custom type) | [IHoverStyleType](../types/src/prop-types.ts) | Sets the styling of a elements when they are hovered/focused, _see object definition below_.                                                                                                                                                                                            |
| `interactionKeys` | string[]             | []                                            | Sets the key names of data to interact with.                                                                                                                                                                                                                                            |
| `hoverOpacity`    | number               | 1                                             | Sets opacity of inactive elements when hovering/focused on a chart geometry.                                                                                                                                                                                                            |
| `zoomToNode`      | object               | {}                                            | Datum object used to track zoomed (base) chart element, the object should include keys that map to above accessors.                                                                                                                                                                     |

<br>

#### IClickStyleType Definition

| Name          | Type   | Default Value(s) | Description                                                                                  |
| ------------- | ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `color`       | string | ''               | Sets the color of the clicked element (requires clickHighlight to be valid and sent).        |
| `strokeWidth` | number | 2                | Sets the stroke width of the clicked element (requires clickHighlight to be valid and sent). |

<br>

#### IHoverStyleType Definition

| Name          | Type   | Default Value(s) | Description                                                                                  |
| ------------- | ------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `color`       | string | ''               | Sets the color of the hovered element (requires hoverHighlight to be valid and sent).        |
| `strokeWidth` | number | 2                | Sets the stroke width of the hovered element (requires hoverHighlight to be valid and sent). |

```js
// example of interactivity code
// note this only tracks a single click, you need your own logic to build the array of currnet selections made by user and then pass that result back to chart
//...
const clickHandler = evt => {
  const d = evt.detail; // data is located here
  this.currentClickedElement = [d]; // this is passed to clickHighlight prop
  if ( this.shouldZoom ) { // app has a switch enabling this interactivity on chart click
    zoomHandler(d); // call handler with datum object
  }
};

const hoverHandler = evt => {
  const d = evt.detail; // data is located here
  this.currentHoveredElement = d; // this is passed to hoverHighlight prop
};

const zoomHandler = d => {
  this.zoomToElement = d; // this is passed to zoomToNode prop
};

const mouseOutHandler = evt => {
  this.currentHoveredElement = ''; // this is passed to hoverHighlight prop
};

// an example of calling these from within a stencil.js component
<circle-packing
  data=[{data}]
  nodeAccessor = {"Type"}
  parentAccessor = {"Country"}
  sizeAccessor = {"value"}
  interactionKeys={['Type']}
  onClickFunc={this.onClickFunc}
  clickHighlight={this.currentClickedElement}
  clickStyle={this.clickStyle}
  onHoverFunc={this.onHoverFunc}
  onMouseOutFunc={this.onMouseOut}
  hoverHighlight={this.currentHoveredElement}
  hoverStyle={this.hoverStyle}
  zoomToNode={this.zoomToElement}
/>
//...
```

<br>
<br>

### <a name="label-props" href="#label-props">#</a> Label Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name           | Type                 | Default Value(s)                                | Description                                                                                  |
| -------------- | -------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dataLabel`    | object (custom type) | [IDataLabelType](../types/src/prop-types.ts)    | Controls visibility, styling and placement of data labels, _see object definition below_.    |
| `showTooltip`  | boolean              | true                                            | Toggles whether to display the tooltip on hover/focus on chart geometries.                   |
| `tooltipLabel` | object (custom type) | [ITooltipLabelType](../types/src/prop-types.ts) | Controls visibility, content and format of the chart tooltip, _see object definition below_. |

<br>

#### IDataLabelType Definition

| Name            | Type    | Default Value(s) | Description                                                                                                                                              |
| --------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelAccessor` | string  | ''               | Key used to determine label's property.                                                                                                                  |
| `visible`       | boolean | true             | Toggles the visibility (opacity) of the data labels.                                                                                                     |
| `placement`     | string  | 'top'            | Only centered data label placements are currently available on this chart.                                                                               |
| `format`        | string  | '0[.][0][0]a'    | Sets the formatting for the data labels, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |

<br>

#### ITooltipLabelType Definition

| Name            | Type     | Default Value(s) | Description                                                                                                                                                                 |
| --------------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labelAccessor` | string[] | []               | An array that determines which property of the data is displayed in the tooltip.                                                                                            |
| `labelTitle`    | string[] | []               | An array that sets the title for each data property in the tooltip.                                                                                                         |
| `format`        | string   | ''               | Sets the formatting for the data properties in the tooltip, EG %b, refer to [d3-time-format](https://github.com/d3/d3-time-format) and [numeral.js](http://numeraljs.com/). |

<br>
<br>

### <a name="margin-and-padding-props" href="#margin-and-padding-props">#</a> Margin & Padding Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name      | Type                 | Default Value(s)                            | Description                                                                                                                                     |
| --------- | -------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin`  | object (custom type) | [IBoxModelType](../types/src/prop-types.ts) | Margin between the subtitle and the chart area, or between the title and chart area if no subtitle is specified, _see object definition below_. |
| `padding` | object (custom type) | [IBoxModelType](../types/src/prop-types.ts) | Padding between edge and the chart area, _see object definition below_.                                                                         |

<br>

#### IBoxModelType Definition

| Name     | Type   | Default Value(s) | Description                                             |
| -------- | ------ | ---------------- | ------------------------------------------------------- |
| `top`    | number | height \* 0.01   | Sets the top margin/padding for the chart container.    |
| `bottom` | number | height \* 0.01   | Sets the bottom margin/padding for the chart container. |
| `left`   | number | width \* 0.01    | Sets the top margin/padding for the chart container.    |
| `right`  | number | width \* 0.01    | Sets the top margin/padding for the chart container.    |

<br>
<br>

### <a name="style-props" href="#style-props">#</a> Style Props [<>](./src/components/circle-packing/circle-packing.tsx 'Source')

| Name            | Type     | Default Value(s) | Description                                                                                                                                    |
| --------------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `colorPalette`  | string   | 'single_blue'    | Included color palettes can be found in our [color utility](../utils/src/utils/colors.ts). Overridden by colors.                               |
| `colors`        | string[] | `undefined`      | Accepts array of color strings or color values to customize colors beyond our palettes. Overridden by groupAccessor, colors assigned in order. |
| `circlePadding` | number   | 5                | Sets the padding between each circle.                                                                                                          |

<br>
<br>
