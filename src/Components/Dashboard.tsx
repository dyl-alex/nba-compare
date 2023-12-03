import { TextField } from "@mui/material"
import store, { UseAppSelector, useAppDispatch } from "../store/Store"
import { setPlayerOne, setPlayerTwo } from "../slice/appSlice";

export const Dashboard = () => {

    const dispatch = useAppDispatch();
    const playerTwo = UseAppSelector(store => store.app.playerTwo);
    const playerOne = UseAppSelector(store => store.app.playerOne);
    const onSubmit = () => {

    }

    return (
       <div>
        <TextField id="outlined-basic" variant="outlined" label="Player 1" style={{marginLeft: '25px', marginRight: '25px'}}
        // modifies state for player one
        onKeyDown={
            (ev) => {
                if (ev.key === 'Enter') {
                    onSubmit();
                }
            }
        }
        onChange={(e) => {
            dispatch(setPlayerOne(e.target.value))
        }}
        ></TextField>
        <TextField id="outlined-basic" variant="outlined" label="Player 2" style={{marginLeft: '25px', marginRight: '25px'}}
        // modifies state for player two 
        onKeyDown={
            (ev) => {
                if (ev.key === 'Enter') {
                    onSubmit();
                }
            }
        }
        onChange={(e) => {
            dispatch(setPlayerTwo(e.target.value))
        }}
        ></TextField>
       </div> 
    )
}