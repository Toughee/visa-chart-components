# @visa/charts-react

This package bundles [visa chart components](../../) web components and exports them as react components. We leveage [stencil's react bindings](https://stenciljs.com/docs/framework-bindings) in the creation of @visa/charts-react.

### Installation Steps

- Using npm
  ```
  $ npm i @visa/charts-react
  ```
- Using yarn
  ```
  $ yarn add @visa/charts-react
  ```

#### Components with `Ready` status in this bundle

- [@visa/bar-chart](../bar-chart)
- [@visa/clustered-bar-chart](../clustered-bar-chart)
- [@visa/stacked-bar-chart](../stacked-bar-chart)
- [@visa/line-chart](../line-chart)
- [@visa/pie-chart](../pie-chart)
- [@visa/scatter-plot](../scatter-plot)
- [@visa/heat-map](../heat-map)
- [@visa/circle-packing](../circle-packing)
- [@visa/parallel-plot](../parallel-plot)
- [@visa/dumbbell-plot](../dumbbell-plot)
- [@visa/world-map](../world-map)
- [@visa/visa-charts-data-table](../data-table)

<hr>

#### <a name="react_components" href="#react_components">#</a> Use VCC as react components

Step 1: Install `yarn add @visa/charts-react`

Step 2: Use component as any other React component

```js
import { BarChart } from '@visa/charts-react';

<BarChart
  mainTitle={'BarChart'}
  subTitle={'Vertical (default) bar chart example'}
  data={state.data}
  ordinalAccessor={'month'}
  valueAccessor={'value'}
  height={400}
  width={600}
/>;
```
