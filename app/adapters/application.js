import DS from 'ember-data';

// the end-point / as far as I know so far
// https://sheriffderek.prismic.io/api/documents

// https://guides.emberjs.com/v2.10.0/models/customizing-adapters/

export default DS.JSONAPIAdapter.extend({
  host: 'https://sheriffderek.prismic.io',
  namespace: 'api'
});