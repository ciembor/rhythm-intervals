rhythmIntervals.controller('TracksController', [
  '$scope', '$log', '$rootScope', 'ngAudio', 'Player', 'Tracks', 'Metronome', 'INTERVALS', 'SOUNDS', 
  function($scope, $log, $rootScope, ngAudio, player, tracks, metronome, INTERVALS, SOUNDS) {

    $scope.soundNames = SOUNDS;
    $scope.intervals = INTERVALS;
    $scope.tracks = tracks.getTracks();
    $scope.tempo = metronome.tempo;
    
    $scope.updateTempo = function() {
      metronome.tempo = $scope.tempo;
      player.playTracks();
    }

    $scope.updateTracks = function() {
      tracks.setTracks($scope.tracks);
      player.playTracks();
    }

    $scope.addTrack = function() {
      tracks.addTrack();
      player.playTracks();
    };

    $scope.removeTrack = function(id) {
      tracks.removeTrack(id);
      player.playTracks();
    };

  }
]);