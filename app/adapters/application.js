import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: {
	  authToken: false
	},

  headers: function() {
    return {
      "API_KEY": this.get("session.authToken"),
      "ANOTHER_HEADER": "Some header value"
    };
  }.property("session.authToken")
});