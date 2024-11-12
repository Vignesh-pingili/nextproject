import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
  xAxis: [
    {
      label: 'price',
    },
  ],
  width: 900,
  height: 400,
  sx: {
    [` .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },m:'28px 0px'
  },
};

export default function BarCharts(data:any) {
  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div  style={{display:"inline-block",margin:"20px"}} className="card transition-transform duration-300 ease-in-out transform hover:scale-80 hover:translate-z-10">
 <BarChart 
      dataset={data.data}
      yAxis={[{ scaleType: 'band', dataKey: 'name' }]}
      series={[
        { dataKey: 'market_cap',}
      ]}
      layout="horizontal"
      {...chartSetting}
    />
    </div>
   
    </div>
  );
}

