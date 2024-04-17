import { PlayerStats } from "../models/playerstats.model"
import CompareGraph from "./CompareGraph"
import CompareStatsContainer from "./CompareStatsContainer"

interface props {
    playerStats: PlayerStats | undefined
}

const CompareContainer = ({playerStats}: props) => {

    return (
        <div>
            <div className="flex w-full">
                <div className="flex-1 ml-3">
                    <CompareStatsContainer player={1}/>
                </div>
                <div className="flex-1 mr-3">
                    <CompareStatsContainer player={2}/>
                </div>
            </div>
        </div>
    )
}

export default CompareContainer