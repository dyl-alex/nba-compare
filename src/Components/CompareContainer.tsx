import { useEffect, useState } from "react"
import { PlayerStats } from "../models/playerstats.model"
import CompareGraph from "./CompareGraph"
import CompareStatsContainer from "./CompareStatsContainer"
import { UseAppSelector, useAppDispatch } from "../store/Store"
import { DSVRowString } from "d3"
import { createCsv } from "../Util/CreateCsv"
import { setShowGraph } from "../slice/appSlice"

interface props {
    playerStats: PlayerStats | undefined
}

const CompareContainer = ({playerStats}: props) => {

    const playerNames = UseAppSelector(store => store.app.playerName);
    const showGraph = UseAppSelector(store => store.app.showButton);

    const [nbaIds, setNbaIds] = useState<DSVRowString<string>[]>();

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        const players = createCsv(playerNames.nameOne, playerNames.nameTwo).then((item) => {
            if (item[0] === undefined) {
                item[0] = {"Name": playerNames.nameOne, " NbaId": '0'}
            } else if (item[1] === undefined) {
                item[1] = {"Name": playerNames.nameOne, " NbaId": '0'}
            }
            console.log(item);
            setNbaIds(item)
        });
        }, [])

    useEffect(() => {
        dispatch(setShowGraph(true));
    }, [playerStats])


    return (
        <div>
            <div className="flex w-full">
                <div className="flex-1 ml-3">
                    <CompareStatsContainer player={1} nbaId={nbaIds ? nbaIds[0][" NbaId"] : ''} playerStats = {playerStats ? playerStats : undefined}/>
                </div>
                <div className="flex-1 mr-3">
                    <CompareStatsContainer player={2} nbaId={nbaIds ? nbaIds[1][" NbaId"] : ''} playerStats = {playerStats ? playerStats : undefined}/>
                </div>
            </div>
            <div className="flex w-full">
            <div className="bg-slate-50 mt-10 w-[85%] flex-1">
                <div className="text-2xl">Attribute Chart</div>
                <div className="text-lg">All data shown is based on percentile compared to stat leaders in each category</div>
                {showGraph &&
                    <div>
                    <CompareGraph playerStats={playerStats}/>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}

export default CompareContainer