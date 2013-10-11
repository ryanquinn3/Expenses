(function ($) {

Expense = Backbone.Model.extend({
//Create a model to hold friend atribute
name: null
});

Expenses = Backbone.Collection.extend({
//This is our Friends collection and holds our Friend models
initialize: function (models, options) {
this.bind("add", options.view.addExpenseLi);
//Listen for new additions to the collection and call a view function if so
}
});

AppView = Backbone.View.extend({
el: $("body"),
initialize: function () {
this.expenses = new Expenses( null, { view: this });
//Create a friends collection when the view is initialized.
//Pass it a reference to this view to create a connection between the two
},
events: {
"click #add-expense":  "showPrompt",
},
showPrompt: function () {
var expense_amount = prompt("What is the amount?");
var expense_model = new Expense({ name: expense_amount});
//Add a new friend model to our friend collection
this.expenses.add( expense_model );
},
addExpenseLi: function (model) {
//The parameter passed is a reference to the model that was added
$("#expense-list").append("<li>" + model.get('name') + "</li>");
//Use .get to receive attributes of the model
}
});

var appview = new AppView;

})(jQuery);