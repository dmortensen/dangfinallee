(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function getList(){
	var params = {};
	params['key'] = $("#search").val();

	list = $.post('../src/php/return_list.php', params, function(data){
		if(data.status == "Success"){
			var result = data.result;
			var html = '';
			$.each(result, function(i, obj) {
			  html += '<div class="invitee">';
			  html += '<label class="underline">'+obj+'</label>';
			  html += '<div class="dropdown">';
			  html += '<select class="rsvp dropdown-content" name="rsvp">';
			  html += '<option value="yes:'+obj+'"> Am Attending</option>';
			  html += '<option value="no:'+obj+'"> Cannot Attend</option>';
			  html += '</select>';
			  html += '</div></div>';
			});
			html += '<p>the festivities.</p>'
			html += '<div><button class="btn btn-primary" type="submit" onClick=rsvp()>Submit</button></div>';

			$('.form').html(html);

		}else{
			$('.form').html("<p>"+data.status+"</p>");
		}

		$('.form').html(html);
	}, 'json');
}

function rsvp(){
	var rsvps = $(".rsvp");
	var params = {};
	var yes = '';
	var no = '';
	var html = '';
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
			html = '<p>Thank you!</p>';
		}else{
			html = '<p>Error: Could no process your request.';
		}

		$('.form').html(html);
	}, 'json');
}

},{}]},{},[1]);
