import {useEffect} from 'react';
import { useLazyGetLeagueListQuery } from '../api/playerApi';
import { playerApi } from '../api/playerApi';

export const Landing = () => {
    const [getLeagueList, {data: leagueList}] = useLazyGetLeagueListQuery();

    useEffect(() => {
      getLeagueList({page: 1, pageCount: 25, name: "Anthony Davis"})
    }, [])
    
    useEffect(() => {
        console.log(leagueList);
    }, [leagueList])

    return (
        <div className="landingContainer">
            <h1>Welcome to Basketball Compare</h1>
        </div>
    )
}