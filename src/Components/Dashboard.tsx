import { MenuItem, TextField } from "@mui/material"
import store, { UseAppSelector, useAppDispatch } from "../store/Store"
import { setPlayerOne, setPlayerTwo } from "../slice/appSlice";
import { useLazyGetLeagueListQuery } from "../api/playerApi";
import { PlayerLists } from "../models/playerlists.model";
import { useEffect, useState } from "react";
import { PlayerContainer } from "./PlayerContainer";

export const Dashboard = () => {


    const [getLeagueList, {data: player}] = useLazyGetLeagueListQuery();

    const dispatch = useAppDispatch();

    const playerTwo = UseAppSelector(store => store.app.playerTwo);
    const playerOne = UseAppSelector(store => store.app.playerOne);

    const [calledPlayerOneList, setCalledPlayerOne] = useState<PlayerLists>();
    const [calledPlayerTwoList, setCalledPlayerTwo] = useState<PlayerLists>();
    const [numPlayer, setNumPlayer] = useState<Number>(1);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    const onSubmit = (e : number) => {
        if (e === 0) {
            setNumPlayer(1);
            getLeagueList({page: 1, pageCount: 25, name: playerOne});
        } else {
            setNumPlayer(2);
            getLeagueList({page: 1, pageCount: 25, name: playerTwo});
        }
    }

    useEffect(() => {
        if (numPlayer === 0) {
            console.log("nothing");
        } else if (numPlayer === 1) {
            setCalledPlayerOne(player);
        } else {
            setCalledPlayerTwo(player);
        }
    }, [player])
    
    return (
       <div>
        <TextField id="outlined-basic" variant="outlined" label="Player 1" error={isInvalid} style={{marginLeft: '25px', marginRight: '25px'}}
        // modifies state for player one
        onKeyDown={
            (ev) => {
                if (ev.key === 'Enter') {
                    onSubmit(0);
                }
            }
        }
        onChange={(e) => {
            dispatch(setPlayerOne(e.target.value))
        }}
        >
        </TextField>
        <TextField id="outlined-basic" variant="outlined" label="Player 2" error={isInvalid} style={{marginLeft: '25px', marginRight: '25px'}}
        // modifies state for player two 
        onKeyDown={
            (ev) => {
                if (ev.key === 'Enter') {
                    onSubmit(1);
                }
            }
        }
        onChange={(e) => {
            dispatch(setPlayerTwo(e.target.value))
        }}
        ></TextField>
        <PlayerContainer playerOne={calledPlayerOneList} playerTwo={calledPlayerTwoList}/>
       </div> 
    )
}