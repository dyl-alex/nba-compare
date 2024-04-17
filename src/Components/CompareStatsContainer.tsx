import { useEffect, useState } from "react";
import { createCsv } from "../Util/CreateCsv";
import { UseAppSelector } from "../store/Store";
import { DSVRowString } from "d3";

interface props {
    player: number
}

const CompareStatsContainer = ({player} : props) => {
    
    const playerNames = UseAppSelector(store => store.app.playerName);
    const [nbaIds, setNbaIds] = useState<DSVRowString<string>[]>();
    const [img, setImg] = useState('');


    useEffect(() => {
    const players = createCsv(playerNames.nameOne, playerNames.nameTwo).then((item) => {
        setNbaIds(item)
    });
    }, [])
    
    
    return (
        <>
            <div className={`w-full h-full mt-5 bg-slate-100`}>
                <div className={`w-full h-[300px]`}>
                    <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${nbaIds && player === 1 ? nbaIds[0].NbaId : (nbaIds && player === 2 ? nbaIds[1].NbaId : '')}.png`}></img>
                </div>
            </div>
        </>
    )
}

export default CompareStatsContainer;