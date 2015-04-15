import Ember from 'ember';
import DS from 'ember-data';
var { moment } = window;

export default DS.Model.extend({
  date: DS.attr('date'),
  presentations: DS.hasMany('presentations', { async: true }),

  isUpcoming: Ember.computed('date', function() {
    var date = this.get('date');
    // TODO: should be >=
    return moment(date).startOf('day') <= moment().startOf('day');
  }),

  isPast: Ember.computed.not('isUpcoming')
});
