import { FC } from "react"
import { Player } from "../models/player.model"

interface Players {
   playerOne: Player,
   playerTwo: Player
}

export const PlayerContainer: FC<Players> = ({playerOne, playerTwo}) => {
    return(<div>

    </div>
    )
}