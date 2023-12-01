import {useEffect} from 'react'
import {getLeagueList} from '../api/playerApi'

export const Landing = () => {

    const [getLeagueList, {data: leagueList} ] = getLeagueList();


    useEffect(() => {
        getLeagueList();
    }, [])
    return (
        <div className="landingContainer">
            <h1>Welcome to Basketball Compare</h1>
        </div>
    )
}