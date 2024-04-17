import { useEffect, useState } from "react";
import { createCsv } from "../Util/CreateCsv";
import { UseAppSelector } from "../store/Store";
import { DSVRowString } from "d3";

interface props {
    player: number,
    nbaId: string
}

const CompareStatsContainer = ({player, nbaId} : props) => {
    return (
        <>
            <div className={`w-full h-full mt-5 bg-slate-100`}>
                <div className={`w-full h-[300px]`}>
                    {nbaId &&
                    <img src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${nbaId && player === 1 ? nbaId : (nbaId && player === 2 ? nbaId : '')}.png`}></img>
                    }
                </div>
            </div>
        </>
    )
}

export default CompareStatsContainer;