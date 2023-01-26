import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const shazamCoreApi = createApi({
    reducerPath:'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '6c9f1863damsh61951e86ba9eeb0p158ae2jsn80a3dfb43fe0')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query:() => '/charts/track'}),
        getSongDetails: builder.query({query:({songid}) => `/songs/get-details?key=${songid},local='en-US'`}),
    }),
});

export const {
    useGetTopChartsQuery,
    usegetSongDetailsQuery
} = shazamCoreApi