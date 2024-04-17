import { Button } from "@mui/material"
import CompareContainer from "./CompareContainer"
import { useNavigate } from "react-router-dom";
import { UseAppSelector, useAppDispatch } from "../store/Store";
import { useLazyGetPlayerStatsQuery } from "../api/playerApi";
import { useEffect } from "react";
import { setShowButton } from "../slice/appSlice";

const ComparePage = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const playerIds = UseAppSelector(store => store.app.playerIds)

    const [getPlayerStats, {data: playerData, isSuccess: playerDataSuccess, isLoading: playerDataLoading, isFetching: playerDataFetching}] = useLazyGetPlayerStatsQuery();


    const handleClick = () => {
        dispatch(setShowButton({showButton: false, search: 1}))
        dispatch(setShowButton({showButton: false, search: 2}))
        navigate('/');
    }
    
    useEffect(() => {
        getPlayerStats({season: 2023, player_ids: playerIds})
    }, [])

    useEffect(() => {
        console.log(playerData);
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
                    <CompareContainer/>
                </div>
                
            </div>
        </div>
    )
}

export default ComparePage