import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PlayerList} from '../models/playerlists.model'
import { Player } from '../models/player.model';

export const playerApi = createApi({
    reducerPath: 'playerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_URL,
        mode: "cors",
        prepareHeaders: (headers, {getState}) => {
            headers.set("Authorization", "fd5cd341-83dc-4614-9315-134e16b3e949")
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSearchList: builder.query<PlayerList, {search?: string, cursor?: number, per_page?: number}>({
            query: ({search, cursor, per_page}) => ({
                url: `players?search=${search ? search : ""}&per_page=${per_page ? per_page : null}&cursor=${cursor ? cursor : null}`,
                method: 'GET',
            })
        }),
    }),
});

export const {useGetSearchListQuery, useLazyGetSearchListQuery} = playerApi;