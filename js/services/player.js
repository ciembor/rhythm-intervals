angular.module('rhythmIntervals').factory('Player', [
  'ngAudio', 'Tracks', 'Metronome', '$interval', 
  function(ngAudio, tracks, metronome, $interval) {

    var streams = []

    return {
      playTracks: function() {
        streams.forEach(function(stream) {
          $interval.cancel(stream);
        });
        tracks.getTracks().forEach(function(track) {
          track.sound = ngAudio.load("sounds/" + track.soundName + ".wav");
          var stream = $interval(
            function() {
              track.sound.progress = 0; 
              track.sound.play()
            },
            metronome.getDelayInMs() * track.interval.denominator / track.interval.numerator
          );
          streams.push(stream);
        });
      }
    }

  }
]);