import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://mars-photos.herokuapp.com',
  namespace: 'api/v1'
});
