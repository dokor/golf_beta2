



Template._loginButtonsLoggedOutWithoutDropdown.replaces("_loginButtonsLoggedOutDropdown");
Template._loginButtonsLoggedOutWithoutDropdown.inheritsHelpersFrom("_loginButtonsLoggedOutDropdown");
Template._loginButtonsLoggedOutWithoutDropdown.inheritsEventsFrom("_loginButtonsLoggedOutDropdown");



Template.slider_connexion.rendered = function () {
$('.carousel').carousel()
};

/*************************************Connexion************************************************/

/*************************************Inscription***********************************************/
Template.inscription.events({
  'submit form': function(e) {
    e.preventDefault();

    if($(e.target).find('[name=username]').val() === "username")
    {
    	alert("coucou");
    }
	/*Meteor.users.update({_id:Meteor.user()._id}, {$set: { surname: $(e.target).find('[name=username]').val()
	firstname: $(e.target).find('[name=fname]').val(),
	lastname: $(e.target).find('[name=lname]').val(),
    level : 'beginner',
    accounttype : 'regular'
	}});*/
    
  }
});
