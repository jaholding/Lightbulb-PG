
$("#psubmit").click( function() {
	
	
	//var data = $("#myform :input").serializeArray();
	
	$.ajax({
      url: '../www/php/putuser.php',
      type: 'post',
      data: $('#pform').serialize(),
      success: function(info) {
		$("#profilepage").empty();
		session_user = info;	
		getuser(session_user);
		$("#profilepage").html(session_user);
		
	  }});
		
		
	$("#pform").submit(function() {
		return false;
		});
	
 
});



function getuser(UID) {
	
	$.ajax({
      url: '../www/php/getuser.php',
      type: 'post',
      data: UID,
      success: function(info) {
	
		$("#profilepage").empty();
		session_user = info;	
		getuser(session_user);
		$("#profilepage").html(session_user);
		
	  }});
	
	
	
	

$("#isubmit").click( function() {
	
	alert("triggered");
	//var data = $("#myform :input").serializeArray();
	
	$.ajax({
      url: '../www/php/putidea.php',
      type: 'post',
      data: $('#iform').serialize(),
      success: function(info) {
		$("#ideapage").empty();
		$("#ideapage").html(info);
		
	  }});
		
		
	$("#iform").submit(function() {
		return false;
		});
	
 
});
}