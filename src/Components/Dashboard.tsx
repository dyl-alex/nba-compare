import { Button } from "@mui/material";
import { useGetSearchListQuery, useLazyGetSearchListQuery } from "../api/playerApi";
import { UseAppSelector } from "../store/Store";
import PlayerSearchContainer from "./PlayerSearchContainer";

export const Dashboard = () => {

    const showButton = UseAppSelector(store => store.app.showButton);

    return (
       <div>
            <div className="w-5/6 min-h-screen bg-slate-300 m-auto rounded">
                {showButton && 
                    <Button variant="contained" style={{marginTop: '4px'}}>
                        Compare
                    </Button>
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