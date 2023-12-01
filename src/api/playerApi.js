import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const rapidApiHeaders = {
    "X-RapidAPI-Key": "fa925e758fmsh34e589f2771784dp142705jsn022f2c08bb33",
    "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com"
}
const baseUrl = 'https://api-nba-v1.p.rapidapi.com'

export const playerApi = createApi({
    reducerPath: "playerApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getLeagueList: builder.query({
            query: () => `/seasons`,
            headers: rapidApiHeaders
        })
    })
})

export const {getLeagueList} = playerApi