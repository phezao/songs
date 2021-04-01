import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: "We will rock you", duration: '3:35'},
    {title: "All star", duration: "3:15"},
    {title: "Macarena", duration: "2:30"},
    {title: "Smells Like Teen Spirit", duration: "4:45"}
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED"){
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})