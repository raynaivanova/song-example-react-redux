import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: "No scrub", duration: "4:05"},
        {title: "Macarena", duration: "2:10"},
        {title: "All star", duration: "3:40"},
        {title: "I want it that way", duration: "2:30"}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});