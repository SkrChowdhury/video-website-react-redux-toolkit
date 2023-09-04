import { getVideos } from "./videosAPI"

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    videos : [],
    isLoading : false,
    isError: false,
    error: ''
}

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const videos = await getVideos()
    return videos
})


const videoSlice = createSlice({
    name: 'videos', initialState, extraReducers: (builder) => {
        builder.addCase()
    }
})