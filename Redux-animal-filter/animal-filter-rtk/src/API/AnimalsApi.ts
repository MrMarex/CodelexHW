import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const endpoint = 'http://localhost:5000';

export const animalsApi = createApi({
    reducerPath: "animals",
    baseQuery: fetchBaseQuery({ baseUrl: endpoint }),
    endpoints: (builder) => ({
        addAnimal: builder.mutation({
            query: (animal) => ({
                url: "/add-animal",
                method: "POST",
                body: animal,
            }),
            onQueryStarted: (_, { dispatch, queryFulfilled }) => {
                queryFulfilled.then(() => {
                    dispatch(animalsApi.endpoints.getAllAnimals.initiate({ skip: false }))
                })
            },
        }),
        getAllAnimals: builder.query({
            query: () => "/animals",
        }),
        deleteAnimal: builder.mutation({
            query: (animalId) => ({
                url: `/animals/${animalId}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useAddAnimalMutation, useGetAllAnimalsQuery, useDeleteAnimalMutation } = animalsApi;
