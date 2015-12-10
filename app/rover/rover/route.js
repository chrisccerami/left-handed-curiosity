import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
    camera: { refreshModel: true},
    sol: { refreshModel: true },
    earth_date: { refreshModel: true }
  },

  model(params) {
    let rover = this.store.find('rover', params.roverName);
    let photos = this.store.query('photo', { rover_id: params.roverName,
                                             sol: params.sol,
                                             camera: params.camera,
                                             earth_date: params.earth_date });

    return {
      rover,
      photos
    };
  }
});
