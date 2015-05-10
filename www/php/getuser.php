<?php
  /* getuser.php  */
  /* Parsed profile_id, gets key user info and returns an array of details to be displayed
  /* Jonathan Holding  */

  /* Get profile id */
  
  $profile_id = intval($_POST['session_user']);
  
  /* connect to the db */
  $link = mysql_connect('websys3.stern.nyu.edu','websysS15GB5','websysS15GB5!!') or die('Cannot connect to the DB');
  mysql_select_db('websysS15GB5',$link) or die('Cannot select the DB');
 
  /* Query DB for profile details of profile_id */
  
  $query = "SELECT fname,lname,email,education,company  FROM profile WHERE profile_id = $profile_id'";  //Check working
  
  $result = mysql_query($query,$link) or die('Errant query:  '.$query);
    
  header('Content-type: application/json'); 
  echo json_encode($result);
 
  /* disconnect from the db */
  @mysql_close($link);

?>

