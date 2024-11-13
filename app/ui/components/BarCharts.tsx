import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
  xAxis: [
    {
      label: 'price',
    },
  ],
  width: 400,
  height: 500,
  sx: {
    [` .${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    }
  },
};

export default function BarCharts(data:any) {
  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div  style={{display:"inline-block"}} >
 <BarChart
      dataset={data.data}
      yAxis={[{ scaleType: 'band', dataKey: 'name',tickFontSize:10,tickSize:1}]}
      series={[
        { dataKey: 'market_cap'}
      ]}
      layout="horizontal"
      {...chartSetting}
    />
    </div>
    </div>
  );
}

