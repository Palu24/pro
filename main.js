//client
Meteor.subscribe('department');
Meteor.subscribe('year');
Meteor.subscribe('data');
Template.department.events({
	'submit form':function(event){
			event.preventDefault();
			var deptt= event.target.deptt.value;
			var desc= event.target.desc.value;
			var hod= event.target.hod.value;
			Meteor.call('insert',deptt,desc,hod);
			event.target.deptt.value="";
			event.target.desc.value="";
			event.target.hod.value="";
			}

});

Template.displayRoll.events({
	'submit form':function(event){
			event.preventDefault();
			var first= event.target.first.value;
			var last= event.target.last.value;
			Meteor.call('tenure',first,last);
			event.target.first.value="";
			event.target.last.value="";
			}

});


Template.displayDepartment.helpers({
	'department':function(){
		return DataBase.find().fetch();
		}
});
Template.displayYear.helpers({
	'year':function(){
			
			return CourSes.find().fetch();
			}
});
