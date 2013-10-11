(function ($) {

Expense = Backbone.Model.extend({
//Create a model to hold friend atribute
name: null,
incoming: false
});

Expenses = Backbone.Collection.extend({
//This is our Friends collection and holds our Friend models
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
		"keypress #add-expense":  "showPrompt",
	},
	showPrompt: function (e) {

		var input = $("#add-expense");
		if (e.keyCode != 13) return;
     	if (!input.val()) return;
		if(input.val().charAt(0) === "$")
		{
			var correct =  input.val();
		}
		else
		{
			var correct = "$"+ input.val();
		}
		var income = $("#incoming-expense").is(":checked");
		
		var expense_model = new Expense({ name: correct, incoming: income});
		//Add a new friend model to our friend collection
		this.expenses.add( expense_model );
		input.val("");
		$("#incoming-expense").attr("checked",false);
	},
	addExpenseLi: function (model) {
	//The parameter passed is a reference to the model that was added
		if(!model.get('incoming'))
			$("#expense-list").append("<li class='red'>" + model.get('name') + "</li>");
		else
			$("#expense-list").append("<li class='green'>" + model.get('name') + "</li>");
	}
});

var appview = new AppView;

})(jQuery);
