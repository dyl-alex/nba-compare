import { Button } from "@mui/material"
import CompareContainer from "./CompareContainer"
import { useNavigate } from "react-router-dom";
import { UseAppSelector, useAppDispatch } from "../store/Store";
import { useLazyGetPlayerStatsQuery } from "../api/playerApi";
import { useEffect, useState } from "react";
import { setShowButton } from "../slice/appSlice";
import { PlayerStats } from "../models/playerstats.model";
import { csv } from 'd3-request';
import * as d3 from "d3";

const ComparePage = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [cannotCompare, setCannotCompare] = useState(false);

    const playerIds = UseAppSelector(store => store.app.playerIds)

    const [getPlayerStats, {data: playerData, isSuccess: playerDataSuccess, isLoading: playerDataLoading, isFetching: playerDataFetching}] = useLazyGetPlayerStatsQuery();


    const handleClick = () => {
        dispatch(setShowButton({showButton: false, search: 1}))
        dispatch(setShowButton({showButton: false, search: 2}))
        navigate('/');
    }
    
    useEffect(() => {
        console.log(playerIds);
        getPlayerStats({season: 2023, player_ids: playerIds})
    }, [])

    useEffect(() => {
        if (playerData?.data.length && playerData?.data.length <= 1) {
            setCannotCompare(true);
        }
    }, [playerData])

    return (
        <div>
            <div className="w-full h-screen">
                <div className="w-[90%] h-full bg-slate-200 m-auto">
                    <div className="flex w-full bg-slate-100 pb-5">
                        <div className="flex-none mt-3 pl-3 fixed">
                            <Button variant="contained" size="large" onClick={handleClick}>Return</Button>
                        </div>
                        <div className="flex-initial w-full text-2xl mt-3">Compare</div>
                    </div>
                    {cannotCompare && 
                        <div className="m-auto w-5/6 bg-red-500 h-[100px] rounded-lg mt-5 text-white flex">
                            <div className="m-auto mt-8 text-xl">You cannot compare one or more of the players based on lack of data</div>
                        </div>
                    }
                    {!cannotCompare &&
                            <CompareContainer playerStats={playerData}/>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default ComparePage