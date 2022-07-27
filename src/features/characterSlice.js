import { createSlice } from "@reduxjs/toolkit";

    const initialState = [
        {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "muerto",
        },
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
        },
    ]

    export const characterSlice = createSlice({
        name: "character",
        initialState,
            reducer : {
                addCharacter : (state, action) => {
                    console.log(action, state);

            }
        }
    })
    // export addCharacter from characterSlice;
    export const { addCharacter } = characterSlice.actions;

    export default characterSlice.reducer;