$(document).ready(function(){
	
	var PersonalCard = true;
	

	$("#submit").click(function(){
		event.preventDefault();

		var backgroundColour = $("#background-change").val();
		var fonts = $("#Fonts").val();
		var Message = $("#Comment").val();
		var Event = $("#Event").val();
		var border = $("#Border").val();
		var errors = $('.form-group').find("span");
		

		if (PersonalCard === true) {
			$("#personal-message").empty();
			$("#color").css('backgroundColor', backgroundColour);
			$("#personal-message").append("<h1>"+Message+"</h1>");
			$("#personal-message").find("h1").css("fontFamily", fonts);
			$("#card").css('backgroundImage', "url('img/"+Event+".jpg')");
			$("#card").css('border',"5px "+border+" white");
		}

	var valid = true;
	function personalMessageForm(){
		event.preventDefault();
		personalMessage();
		var message = document.getElementById('Comment').value;
		if (valid === true) {
			console.log('hello');
			document.getElementById('Form').submit();

		};

	};

	function personalMessage(){
		var message = document.getElementById('Comment');
		var errors = document.getElementById('errors');
		errors.innerText = "";
		if (message.length == 0) {
			errors.innerText = "This field is required";
			valid = false;
			return;

		}else if (message.length > 30){
			errors.innerText = "This field needs to be less than 30 characters";
			valid = false;
			return;
		}

	};

	});
		
	
		


});


