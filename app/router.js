import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rover', { path: '/rovers' }, function() {
    this.route('rover', { path: '/:roverName' });
  });
});

export default Router;
