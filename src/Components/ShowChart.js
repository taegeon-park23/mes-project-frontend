import React from "react";
import { ResponsivePie } from '@nivo/pie';

const data = [
    {
      "id": "java",
      "label": "java",
      "value": 207,
      "color": "hsl(125, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 449,
      "color": "hsl(238, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 47,
      "color": "hsl(216, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 466,
      "color": "hsl(125, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 361,
      "color": "hsl(305, 70%, 50%)"
    }
  ];

const MyResponsivePie = (data) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={false}
        motionStiffness={90}
        motionDamping={15}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

class ShowChart extends React.Component {
    render() {
        return(
            <div style={ShowChartStyle}>
                <p style={title}>분석 차트</p>
                {MyResponsivePie(data)}
            </div>
        );
    }
}

const ShowChartStyle = {
    position: "relative",
    left: "5%",
    backgroundColor: "white",
    maxWidth: "90vw",
    maxHeight: "410px",
    borderRadius: "5px",
};

const title = {
    paddin:"5px",
    textAlign: "center",
    font: "bold sans-serif",
}
export default ShowChart