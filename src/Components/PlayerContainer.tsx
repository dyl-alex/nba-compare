import { FC } from "react"
import { Player } from "../models/player.model"
import {PlayerList} from './PlayerList'

interface Players {
   playerOne: Player | undefined,
   playerTwo: Player | undefined
}

export const PlayerContainer: FC<Players> = ({playerOne, playerTwo}) => {

    return(
    <div>
        {playerOne ? playerOne?.data.length > 1 && <PlayerList playerList={playerOne}/> : ''}
        {playerTwo ? playerTwo?.data.length > 1 && <PlayerList playerList={playerTwo}/> : ''}
    </div>
    )
}