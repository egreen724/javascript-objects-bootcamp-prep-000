var playlist = {
<<<<<<< HEAD
  'Slowdive': 'Alison',
  'My Bloody Valentine': 'Sometimes'
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist['Phil Ochs'] = "Here's to the State of Mississippi"
=======
  johnDenver: "Country Road" 
}

function updatePlaylist(playlist, artist, songTitle) {
  playlist.u2 = 'Sunday';
>>>>>>> c71844a1b5d0a9fb5808105af9ba623ab2afc9f6
  return playlist;
}

function removeFromPlaylist(playlist, artist){
<<<<<<< HEAD
  delete playlist.Slowdive;
=======
  delete playlist.u2;
>>>>>>> c71844a1b5d0a9fb5808105af9ba623ab2afc9f6
  return playlist;
}