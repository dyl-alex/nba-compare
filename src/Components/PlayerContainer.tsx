import { FC } from "react"
import { PlayerLists } from "../models/playerlists.model"
import {PlayerList} from './PlayerList'
import { Grid } from "@mui/material"

interface Players {
   playerOne: PlayerLists | undefined,
   playerTwo: PlayerLists | undefined
}

export const PlayerContainer: FC<Players> = ({playerOne, playerTwo}) => {

    return (
        <div>
            <Grid container spacing={2} style={{marginTop: "25px", justifyContent: "center", justifyItems: "center"}}>
            {playerOne ? playerOne?.data.length >= 1 && <PlayerList playerList={playerOne}/> : ''}
            {playerTwo ? playerTwo?.data.length >= 1 && <PlayerList playerList={playerTwo}/> : ''}
            </Grid>

        </div>
    )
}