import Ember from 'ember';

let {
  Controller,
  run
} = Ember;

export default Controller.extend({
  queryParams: ['page', 'camera', 'sol', 'earth_date'],

  actions: {
    updateSol(sol) {
      run.debounce({}, () => this.set('sol', sol), 500);
    },

    updateCamera(camera) {
      run.debounce({}, () => this.set('camera', camera), 500);
    },

    updateEarthDate(date) {
      run.debounce({}, () => this.set('earth_date', date), 500);
    }
  }
});
