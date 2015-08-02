angular.module('rhythmIntervals').factory('Metronome', function() {

  return {
    tempo: 120,

    getDelayInMs: function() {
      return 60000 / this.tempo;
    }
  }

});
