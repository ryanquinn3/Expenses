(function ($) {

Expense = Backbone.Model.extend({
name: null
});

Expenses = Backbone.Collection.extend({
initialize: function (models, options) {
this.bind("add", options.view.addExpenseLi);
}
});

AppView = Backbone.View.extend({
el: $("body"),
initialize: function () {
this.expenses = new Expenses( null, { view: this });
},
events: {
"click #add-expense":  "showPrompt",
},
showPrompt: function () {
var expense_amount = prompt("What is the amount?");
var expense_model = new Expense({ name: "$" + expense_amount });
this.expenses.add( expense_model );
},
addExpenseLi: function (model) {
$("#expense-list").append("<li>" + model.get('name') + "</li>");
}
});

var appview = new AppView;

})(jQuery);