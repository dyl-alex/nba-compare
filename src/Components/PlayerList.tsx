import { FC } from "react";
import { Player } from "../models/player.model";
import { List, ListItem, ListItemText } from "@mui/material";

interface PlayerList {
    playerList: Player | undefined,
}

export const PlayerList : FC<PlayerList> = ({playerList}) => {
    
    const generateList = () => {
        if (playerList?.data != undefined) {
            return (
                <List>
                    {playerList?.data.map((value) => <ListItem key={value.id}>
                        <ListItemText primary={value.first_name + " " + value.last_name}></ListItemText>
                    </ListItem>)}
                </List>   
            )
        }
    }

    return (
        <div>
            {generateList()}
        </div>
    );
}