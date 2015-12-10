import DS from 'ember-data';

const {
  Model,
  attr,
  belongsTo
} = DS;

export default Model.extend({
  sol: attr('number'),
  camera: attr('string'),
  img_src: attr('string'),
  earth_date: attr('date'),
});
