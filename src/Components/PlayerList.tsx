import { FC, MouseEventHandler } from "react";
import { PlayerLists } from "../models/playerlists.model";
import { Button, Container, List, ListItem, ListItemText } from "@mui/material";
import { Player } from "../models/player.model";

interface PlayerList {
    playerList: PlayerLists | undefined,
}

export const PlayerList : FC<PlayerList> = ({playerList}) => {
    
    const onClick = (displayPlayer: Player) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(displayPlayer)
        return(
            <Container>
                
            </Container>
        )
    }

    const generateList = () => {
        if (playerList?.data != undefined) {

            return (

                <List>
                    {playerList?.data.map((value) => <ListItem key={value.id}>
                        <Button variant="contained" onClick={onClick(value)}>{value.first_name + " " + value.last_name}</Button>
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