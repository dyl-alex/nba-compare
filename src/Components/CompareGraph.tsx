import * as d3 from "d3";
import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'
import { PlayerStats } from "../models/playerstats.model";
import { ApexOptions } from "apexcharts";
import { UseAppSelector, useAppDispatch } from "../store/Store";

interface props {
    playerStats: PlayerStats | undefined
}

const CompareGraph = ({playerStats}: props) => {


    const dispatch = useAppDispatch();
    const playerOne = UseAppSelector(store => store.app.playerStats.playerOne);
    const playerTwo = UseAppSelector(store => store.app.playerStats.playerTwo);
    const playerOneName = UseAppSelector(store => store.app.playerName.nameOne);
    const playerTwoName = UseAppSelector(store => store.app.playerName.nameTwo);

    const [options, setOptions] = useState<ApexOptions>({
        series: [
            {name: '',
             data: [0]
            },
            {
                name: '',
                data: [0]
            }
        ],
        chart: {
            type: 'radar',
            height: 500,
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 0
          },
          yaxis: {
            stepSize: 20,
          },
          xaxis: {
            categories: ['PPG', 'Rebounding (REB)', 'Shooting (EFG)', 'Floor Defense (STL)', 'Rim Defense (BLK)', 'Playmaking (AST)'],
          }
    })

    useEffect(() => {
        console.log(playerOne);
        console.log(playerTwo);
        setOptions({
            series: [
                {name: playerOneName,
                 data: playerOne ? [playerOne.data[0].pts / 33.9 * 100, playerOne.data[0].reb / 13.7 * 100, ((playerOne.data[0].fgm + (0.5 & playerOne.data[0].fg3m)) / playerOne.data[0].fga) * 100 / 74.7 * 100, playerOne.data[0].stl / 2.0 * 100, playerOne.data[0].blk / 3.6 * 100, playerOne.data[0].ast / 10.9 * 100] : [1,2,3, 4, 5, 6]
                },
                {
                    name: playerTwoName,
                    data: playerTwo ? [playerTwo.data[0].pts / 33.9 * 100, playerTwo.data[0].reb / 13.7 * 100, ((playerTwo.data[0].fgm + (0.5 & playerTwo.data[0].fg3m)) / playerTwo.data[0].fga) * 100 / 74.7 * 100, playerTwo.data[0].stl / 2.0 * 100, playerTwo.data[0].blk / 3.6 * 100, playerTwo.data[0].ast / 10.9 * 100] : [1,2,3, 4, 5, 6]
                }
            ],
            chart: {
                type: 'radar',
                height: 500,
                dropShadow: {
                  enabled: true,
                  blur: 1,
                  left: 1,
                  top: 1
                }
              },
              stroke: {
                width: 2
              },
              fill: {
                opacity: 0.1
              },
              markers: {
                size: 0
              },
              yaxis: {
                stepSize: 20,
              },
              xaxis: {
                categories: ['PPG', 'Rebounding (REB)', 'Shooting (EFG%)', 'Floor Defense (STL)', 'Rim Defense (BLK)', 'Playmaking (AST)']
              }
        })
    }, [playerStats])

    return (
        <div className="graph">
            <ReactApexChart options={options} series={options.series} type="radar"/>
        </div>
    )
}

export default CompareGraph;