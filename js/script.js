$(document).ready(function(){
	
	var PersonalCard = true;
	var Valid = false;
	

	$("#submit").click(function(){
		event.preventDefault();

		var backgroundColour = $("#background-change").val();
		var fonts = $("#Fonts").val();
		var Message = $("#Comment").val();
		var Event = $("#Event").val();
		var border = $("#Border").val();

	if ($('#Comment').val().length === 0) {
			$('#Comment').parent().find('#errors').text("This field is required");
			return;
		}

		

		if (PersonalCard === true) {
			$("#personal-message").empty();
			$("#color").css('backgroundColor', backgroundColour);
			$("#personal-message").append("<h1>"+Message+"</h1>");
			$("#personal-message").find("h1").css("fontFamily", fonts);
			$("#card").css('backgroundImage', "url('img/"+Event+".jpg')");
			$("#card").css('border',"5px "+border+" white");
		}


	});

	$('#Comment').blur(function(){
		$(this).parent().find('span');
		var errors = $(this).parent().find('#errors')
		errors.empty();
		if ($(this).val().length === 0) {
			errors.text("This field is required");
			return;
		}

		//Max Length
		if ($(this).val().length > 20){
			errors.text("This field cannot to be more than 20 characters");
			return;
		}
		Valid = true;
		
	})


		
			


});


