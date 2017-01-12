import DS from 'ember-data';

// https://guides.emberjs.com/v2.10.0/models/customizing-adapters/#toc-toggle

// parent adapter for typicode API... see post and user for specifics
export default DS.RESTAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com',
  // namespace: 'api/etc'
});