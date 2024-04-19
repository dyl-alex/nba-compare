import { useEffect, useState } from "react"
import { PlayerStats } from "../models/playerstats.model"
import CompareGraph from "./CompareGraph"
import CompareStatsContainer from "./CompareStatsContainer"
import { UseAppSelector } from "../store/Store"
import { DSVRowString } from "d3"
import { createCsv } from "../Util/CreateCsv"

interface props {
    playerStats: PlayerStats | undefined
}

const CompareContainer = ({playerStats}: props) => {
    const playerNames = UseAppSelector(store => store.app.playerName);
    const [nbaIds, setNbaIds] = useState<DSVRowString<string>[]>();
    
    useEffect(() => {
        const players = createCsv(playerNames.nameOne, playerNames.nameTwo).then((item) => {
            setNbaIds(item)
        });
        if (nbaIds) console.log(nbaIds[0][" NbaId"])
        }, [])


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
        </div>
    )
}

export default CompareContainer