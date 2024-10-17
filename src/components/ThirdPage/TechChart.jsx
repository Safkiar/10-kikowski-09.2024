import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { projectImages } from '../../path/images';
import styled from 'styled-components';
import ChartWrapperComponent from './ui/ChartWrapperComponent';

const countTechnologies = (projects) => {
  const techCounts = {
    frontEnd: {},
    backend: {},
    styles: {},
  };

  Object.values(projects).forEach((project) => {
    project.technologyUsed.frontEnd.forEach((tech) => {
      techCounts.frontEnd[tech] = (techCounts.frontEnd[tech] || 0) + 1;
    });
    project.technologyUsed.backend.forEach((tech) => {
      techCounts.backend[tech] = (techCounts.backend[tech] || 0) + 1;
    });
    project.technologyUsed.styles.forEach((tech) => {
      techCounts.styles[tech] = (techCounts.styles[tech] || 0) + 1;
    });
  });

  return techCounts;
};

const technologyCounts = countTechnologies(projectImages);
const projectNumber = Object.keys(projectImages).length;


const chartData = [
  ...Object.entries(technologyCounts.frontEnd).map(([technology, count]) => ({
    category: 'Front-End',
    technology,
    count,
  })),
  ...Object.entries(technologyCounts.backend).map(([technology, count]) => ({
    category: 'Backend',
    technology,
    count,
  })),
  ...Object.entries(technologyCounts.styles).map(([technology, count]) => ({
    category: 'Styles',
    technology,
    count,
  })),
];


export const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const TechChart = () => {

  const [chartHeight, setChartHeight] = useState(420);
  const [chartWidth, setChartWidth] = useState(600);
  const [chartMargin, setChartMargin] = useState({ top: 5, right: 30, left: 60, bottom: 5 });
  const [yAxisWidth, setYAxisWidth] = useState(150);

  const updateChartDimensions = () => {
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    if (viewportHeight <= 400) {
      setChartHeight(270);
      setChartMargin((prevMargin) => ({ ...prevMargin, left: 30}));
    } else if (viewportHeight <= 500) {
      setChartHeight(300);
      setChartMargin((prevMargin) => ({ ...prevMargin, left: 40 }));
    } else if (viewportHeight <= 600) {
      setChartHeight(350);
      setChartMargin((prevMargin) => ({ ...prevMargin, left: 50 }));
    } else {
      setChartHeight(430);
      setChartMargin((prevMargin) => ({ ...prevMargin, left: 60 }));
    }

    if (viewportWidth <= 400) {
      setChartWidth(300);
      setYAxisWidth(80);
    } else if (viewportWidth <= 500) {
      setChartWidth(400);
      setYAxisWidth(100);
    } else if (viewportWidth <= 600) {
      setChartWidth(500);
      setYAxisWidth(120);
    } else {
      setChartWidth(600);
      setYAxisWidth(150);
    }
  };

  useEffect(() => {
    updateChartDimensions(); 
    window.addEventListener('resize', updateChartDimensions); 
    return () => {
      window.removeEventListener('resize', updateChartDimensions); 
    };
  }, []);

  return (
    <ChartWrapperComponent projectNumber={projectNumber}>
      <ChartWrapper>
        <BarChart
          width={chartWidth}
          height={chartHeight}
          data={chartData}
          layout="vertical"
          margin={chartMargin}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 14, fill: '#dce6ec' }}
          />
          <YAxis
            dataKey="technology"
            type="category"
            tick={{ fontSize: 12, fill: '#dce6ec' }}
            width={yAxisWidth}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#000000' }}
            formatter={(value) => [`${value}`, 'Projects']}
          />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ChartWrapper>
    </ChartWrapperComponent>
  );
};

export default TechChart;