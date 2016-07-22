function getList(){
	var params = {};
	params['key'] = $("#search").val();
	
	list = $.post('../src/php/return_list.php', params, function(data){
		if(data.status == "Success"){
			var result = data.result;
			var html = '';
			$.each(result, function(i, obj) {
			  html += "<label>"+obj+"</label>&nbsp;<select class=\"rsvp\" name=\"rsvp\"><option value=\"yes:"+obj+"\">Yes</option><option value=\"no:"+obj+"\">No</option></select>";
			});
			
			html += "<input type=\"submit\" value=\"Submit\" onClick=rsvp()>";
			
			$("#party").html(html);
			
		}else{
			$("#party").html("<div>"+data.status+"</div>");
		}
	}, 'json');
}

function rsvp(){
	var rsvps = $(".rsvp");
	var params = {};
	var yes = '';
	var no = '';
	$.each(rsvps, function(i, obj){
		var answer = obj.options[obj.selectedIndex].value.split(':');
		if(answer[0] == 'yes'){
			yes += answer[1]+",";
		}else{
			no += answer[1]+",";
		}
	});
	
	console.log("Yes: "+yes);
	console.log("No "+no);
	
	params['yes'] = yes;
	params['no'] = no;
	
	reserve = $.post('../src/php/rsvp.php', params, function(data){console.log(data);
		if(data.status == "Success"){
			$("#party").html("Thank you for your RSVP.");
			
		}else{
			$("#party").html("Error: Could not process your request.");
		}
	}, 'json');
	
	
}
