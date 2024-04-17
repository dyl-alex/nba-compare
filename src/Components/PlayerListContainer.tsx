import React, { useEffect, useState } from "react";
import { PlayerList } from "../models/playerlists.model";
import { Button, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import CachedIcon from '@mui/icons-material/Cached';
import { useAppDispatch } from "../store/Store";
import { setShowButton } from "../slice/appSlice";

interface props {
    list?: PlayerList,
    playerSearch?: number
}
const PlayerListContainer = ({list, playerSearch}: props) => {
    const dispatch = useAppDispatch();

    const [isSelect, setIsSelected] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerList["data"]>();
    const [selectId, setSelectId] = useState(0);

    const handleClick = (item: PlayerList["data"]) => {
        if (selectId == item[0].id) {
            setIsSelected(false);
            setSelectId(0);
            if (playerSearch) {
                dispatch(setShowButton({showButton: false, search: playerSearch}))
            }
        } else {
            setIsSelected(true);
            setSelectedPlayer(item);
            setSelectId(item[0].id);
            if (playerSearch) {
                dispatch(setShowButton({showButton: true, search: playerSearch}))
            }
        }
    }

    return(
        <div>
            <div className="flex">
            <div className="m-auto">
                <List subheader="Results" style={{fontSize: list ? '30px' : '0px'}}>
                    {isSelect &&
                        <div className="w-full h-48 mb-4 bg-white border-b border-2 border-solid rounded-lg shadow-xl flex-col">
                            <div className="text-lg flex-1 m-auto">{selectedPlayer ? selectedPlayer[0].first_name + " " + selectedPlayer[0].last_name : ''}</div>
                            <div className="text-lg flex-1 m-1">Team: {selectedPlayer ? selectedPlayer[0].team.full_name : ''}</div>
                            <div className="text-lg flex-1 m-1">Draft Year: {selectedPlayer ? selectedPlayer[0].draft_year : ''}</div>
                        </div>
                    }
                    {list?.data.map(item => {
                        return(
                            <ListItem style={{backgroundColor: selectId == item.id ? '#A7E8F5' : 'white', borderRadius: '5px', margin: '3px'}}>
                                <ListItemText primary={item.first_name + " " + item.last_name}/>
                                <ListItemButton onClick={() => {
                                    handleClick([item]);
                                }}>
                                    <CachedIcon style={{margin: 'auto'}}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
            </div>
        </div>
    )
}

export default PlayerListContainer;