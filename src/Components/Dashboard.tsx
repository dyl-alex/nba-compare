import { useGetSearchListQuery, useLazyGetSearchListQuery } from "../api/playerApi";
import PlayerSearchContainer from "./PlayerSearchContainer";

export const Dashboard = () => {

    const result = useGetSearchListQuery({search: "Anthony", cursor: 50, per_page: 50})
    console.log(result);
    return (
       <div>
            <div className="w-5/6 min-h-screen bg-slate-300 m-auto rounded">
                <div className="w-full h-full flex">
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