import Ember from "ember";

export default Ember.Controller.extend({
	actions:{
	  setonadapter: function() {
	    console.log(this.container.lookup('adapter:application').get('headers'));
      this.container.lookup('adapter:application').set('session.authToken', true);
      console.log(this.container.lookup('adapter:application').get('headers'));
    }
  }
});