import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
 export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'e8f6e5dca2mshf358f8696f6cb19p187c43jsnc41e6f838af6');
        return headers;
      },
   }),
   endpoints: (builder) => ({ //building all the end points of an API that we are going to call
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
   }),

  }); //calling the createApi function, we are providing just one object inside it, API NEEDS TO HAVE A REDUCER PATH, that will just be the name pof the API

  export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery, 
    useGetArtistDetailsQuery, 
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
  } = shazamCoreApi;