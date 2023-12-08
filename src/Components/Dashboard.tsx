import { TextField } from "@mui/material"
import store, { UseAppSelector, useAppDispatch } from "../store/Store"
import { setPlayerOne, setPlayerTwo } from "../slice/appSlice";
import { useLazyGetLeagueListQuery } from "../api/playerApi";
import { Player } from "../models/player.model";
import { useEffect, useState } from "react";

export const Dashboard = () => {

    const [getLeagueList, {data: player}] = useLazyGetLeagueListQuery();

    const dispatch = useAppDispatch();

    const playerTwo = UseAppSelector(store => store.app.playerTwo);
    const playerOne = UseAppSelector(store => store.app.playerOne);

    const [calledPlayerOne, setCalledPlayerOne] = useState<Player>();
    const [calledPlayerTwo, setCalledPlayerTwo] = useState<Player>();
    const [numPlayer, setNumPlayer] = useState<Number>(0);

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
            console.log(calledPlayerOne);
        } else {
            setCalledPlayerTwo(player);
            console.log(calledPlayerTwo);
        }
    }, [player])

    return (
       <div>
        <TextField id="outlined-basic" variant="outlined" label="Player 1" style={{marginLeft: '25px', marginRight: '25px'}}
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
        ></TextField>
        {calledPlayerOne?.data.first_name}{calledPlayerTwo?.data.first_name}
        <TextField id="outlined-basic" variant="outlined" label="Player 2" style={{marginLeft: '25px', marginRight: '25px'}}
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
        <div>
            <p>
                {calledPlayerOne?.data.first_name}
            </p>
        </div>
        <div>
            <p>
                {playerTwo}
            </p>
        </div>
       </div> 
    )
}