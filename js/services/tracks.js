angular.module('rhythmIntervals').factory('Tracks', [
  'ngAudio', 'INTERVALS', 'SOUNDS', 
  function(ngAudio, INTERVALS, SOUNDS) {

    var tracks = [];
    var idCounter = 0;

    return {
      addTrack: function() {
        var soundName = SOUNDS[0];
        idCounter += 1;

        tracks.push({
          id: idCounter,
          soundName: SOUNDS[0],
          sound: ngAudio.load("sounds/" + soundName + ".wav"),
          interval: INTERVALS[0]
        })
      },

      removeTrack: function(id) {
        track = _.findWhere(tracks, {id: id});
        index = _.indexOf(track, tracks);
        tracks.splice(index, 1);
      },

      getTracks: function() {
        return tracks;
      },

      setTracks: function(t) {
        tracks = t
      }
    }

  }
]);