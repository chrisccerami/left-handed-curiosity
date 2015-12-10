import Ember from 'ember';
import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  name: attr('string'),
  landing_date: attr('date'),
  max_sol: attr('number'),
  max_date: attr('date'),
  total_photos: attr('number')
});
