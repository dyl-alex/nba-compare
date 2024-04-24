import { useEffect, useState } from "react";
import { createCsv } from "../Util/CreateCsv";
import { UseAppSelector, useAppDispatch } from "../store/Store";
import { DSVRowString } from "d3";
import { DataGrid } from '@mui/x-data-grid';
import { PlayerStats } from "../models/playerstats.model";
import { setPlayerStats } from "../slice/appSlice";



interface props {
    player: number,
    nbaId: string,
    playerStats: PlayerStats | undefined,
}

const CompareStatsContainer = ({player, nbaId, playerStats} : props) => {

    const dispatch = useAppDispatch();

    const playerName = UseAppSelector(store => player === 1 ? store.app.playerName.nameOne : store.app.playerName.nameTwo)
    const playerIds = UseAppSelector(store => store.app.playerIds)
    const playerOne = UseAppSelector(store => store.app.playerStats.playerOne);
    const playerTwo = UseAppSelector(store => store.app.playerStats.playerTwo);


    const [stats, setStats] = useState({
        pts: 0,
        ast: 0,
        turnover: 0,
        pf: 0,
        fga: 0,
        fgm: 0,
        fta: 0,
        ftm: 0,
        fg3a: 0,
        fg3m: 0,
        reb: 0,
        oreb: 0,
        dreb: 0,
        stl: 0,
        blk: 0,
        fg_pct: 0,
        fg3_pct: 0,
        ft_pct: 0,
        min: '',
        games_played: 0,
        player_id: 0,
        season: 0
      });


    useEffect(() => {
        if (playerStats) {
            if (playerStats?.data.length > 1) {
                const x = player === 1 ? playerIds[0] : playerIds[1]
                playerStats.data.forEach((item, index) => {
                    if (item.player_id === x) {
                        setStats(item)
                        dispatch(setPlayerStats({stats: {data: [item]}, search: player}))
                    }
                })
            }
        }
    }, [playerStats])
    return (
        <>
            <div className={`w-full h-full mt-5 bg-slate-100`}>
                <div className={`w-[100px] sm:w-[200px] md:w-[300px] lg:w-[400px] h-[70px] sm:h-[160px] md:h-[250px] lg:h-[300px] m-auto`}>
                    {nbaId &&
                    <img src={`${nbaId && nbaId === '0' ? 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' : `https://cdn.nba.com/headshots/nba/latest/1040x760/${nbaId && player === 1 ? nbaId : (nbaId && player === 2 ? nbaId : '')}.png`}`} style={{}}></img>
                    }
                </div>
                <div className="w-full m-auto min-h-[30px] text-2xl">{playerName}</div>
                <div className="w-[90%] m-auto min-h-[50px] mt-3 flex">
                    <div className="flex-1 sm:text-lg bg-slate-400 pt-2 rounded-tl-lg">PPG: </div>
                    <div className={`flex-1 sm:text-lg pt-2 rounded-tr-lg ${player === 1 && playerOne.data[0].pts > playerTwo.data[0].pts ? 'bg-green-300' : (player === 2 && playerOne.data[0].pts < playerTwo.data[0].pts ? 'bg-green-300' : 'bg-red-300')}`}>{stats.pts}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 text-sm sm:text-lg bg-slate-400 pt-2">Rebounds: </div>
                    <div className={`flex-1 text-md sm:text-lg pt-2 ${player === 1 && playerOne.data[0].reb > playerTwo.data[0].reb ? 'bg-green-300' : (player === 2 && playerOne.data[0].reb < playerTwo.data[0].reb ? 'bg-green-300' : 'bg-red-300')}`}>{stats.reb}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 sm:text-lg bg-slate-400 pt-2">Assists: </div>
                    <div className={`flex-1 sm:text-lg pt-2 ${player === 1 && playerOne.data[0].ast > playerTwo.data[0].ast ? 'bg-green-300' : (player === 2 && playerOne.data[0].ast < playerTwo.data[0].ast ? 'bg-green-300' : 'bg-red-300')}`}>{stats.ast}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 sm:text-lg pt-2 bg-slate-400">Steals: </div>
                    <div className={`flex-1 sm:text-lg pt-2 ${player === 1 && playerOne.data[0].stl > playerTwo.data[0].stl ? 'bg-green-300' : (player === 2 && playerOne.data[0].stl < playerTwo.data[0].stl ? 'bg-green-300' : 'bg-red-300')}`}>{stats.stl}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 sm:text-lg pt-2 bg-slate-400">Blocks: </div>
                    <div className={`flex-1 sm:text-lg pt-2 ${player === 1 && playerOne.data[0].blk > playerTwo.data[0].blk ? 'bg-green-300' : (player === 2 && playerOne.data[0].blk < playerTwo.data[0].blk ? 'bg-green-300' : 'bg-red-300')}`}>{stats.blk}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 sm:text-lg pt-2 bg-slate-400">FG%: </div>
                    <div className={`flex-1 sm:text-lg pt-2 ${player === 1 && playerOne.data[0].fg_pct > playerTwo.data[0].fg_pct ? 'bg-green-300' : (player === 2 && playerOne.data[0].fg_pct < playerTwo.data[0].fg_pct ? 'bg-green-300' : 'bg-red-300')}`}>{stats.fg_pct * 100 + "%"}</div>
                </div>
                <div className="w-[90%] m-auto min-h-[50px] flex">
                    <div className="flex-1 text-md sm:text-lg pt-2 bg-slate-400 rounded-bl-lg">3FG%: </div>
                    <div className={`flex-1 sm:text-lg pt-2 rounded-br-lg ${player === 1 && playerOne.data[0].fg3_pct > playerTwo.data[0].fg3_pct ? 'bg-green-300' : (player === 2 && playerOne.data[0].fg3_pct < playerTwo.data[0].fg3_pct ? 'bg-green-300' : 'bg-red-300')}`}>{stats.fg3_pct * 100 + "%"}</div>
                </div>
            </div>
        </>
    )
}

export default CompareStatsContainer;