import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {
            id: 1,
            name: "Rick Sanchez",
            image:  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            status: "Alive",
            species: "Human",
            type: "",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1",
            },
            location: {
                name: "Earth (Replacement Dimension)",
                url: "https://rickandmortyapi.com/api/location/20",
            },
            created: "2017-11-04T18:48:46.250Z",
            episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",

    
            ],
            url: "https://rickandmortyapi.com/api/character/1",
        },
        {
            id: 2,
            name: "Morty Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            status: "Alive",
            species: "Human",
            type: "",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1",
            },
        },
        {
            id: 3,
            name: "Summer Smith",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            status: "Alive",
            species: "Human",
            type: "",
            origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1",
            },
        },

               
    ] ;
    const characterSlice = createSlice({
        name: "character",
        initialState,
        reducers: {
          addCharacter: (state, action) => {
            state.push(action.payload);
          }
            
        }
    });

    // export addCharacter from characterSlice;
    export const { addCharacter } = characterSlice.actions;

    export default characterSlice.reducer;