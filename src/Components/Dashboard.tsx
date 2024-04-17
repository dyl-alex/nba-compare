import { Button } from "@mui/material";
import { useGetSearchListQuery, useLazyGetSearchListQuery } from "../api/playerApi";
import { UseAppSelector } from "../store/Store";
import PlayerSearchContainer from "./PlayerSearchContainer";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate();
    const showButton = UseAppSelector(store => store.app.showButton);

    const handleClick = () => {
        navigate('/compare')
    }
    return (
       <div>
            <div className="w-5/6 min-h-screen bg-slate-300 m-auto rounded">
                {showButton.button1 && showButton.button2 ?
                    <Button variant="contained" size="large" style={{marginTop: '10px'}} onClick={handleClick}>
                        Compare
                    </Button> : ''
                }
                <div className="w-full h-full flex mt-[15px]">
                    <div className="flex-1 w-full h-full">
                        <PlayerSearchContainer playerSearch={1}                            
                        />
                    </div>
                    <div className="flex-1 w-full h-full">
                        <PlayerSearchContainer playerSearch={2}/>
                    </div>
                </div>
            </div>
       </div> 
    )
}