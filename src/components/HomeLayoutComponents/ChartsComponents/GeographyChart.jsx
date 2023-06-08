import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { geoFeatures} from "../../../dataMock/mockGeoFeatures"
import { mockGeographyData as data } from "../../../dataMock/mockData";

export const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
                domain:{
                    line: {
                        stroke: colors.blackAccent[100]
                    }
                },
                legend:{
                    text: {
                        stroke: colors.blackAccent[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.blackAccent[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.blackAccent[100]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.blackAccent[100]
                }
            }
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[ 0, 0, 0 ]}
        graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor={colors.blackAccent[900]}
        legends={
          !isDashboard ? 
            [{
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.yellowAccent[300],
                            itemOpacity: 1
                        }
                    }
                
            ]}
        ] : undefined
      }
    />
    );
}