<?php
	session_start();
	$username = $_SESSION['username'];
	if(!isset($username))
	{
		header('Location: http://www.atlaselect.com/index.html') ;
	}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>BeFriend: Friend around You</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="http://twitter.github.com/bootstrap/assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="http://twitter.github.com/bootstrap/assets/css/bootstrap-responsive.css">
	<link rel="stylesheet" type="text/css" href="style/main.css" />
    <style type="text/css">
      body {
        padding-top: 30px;
      }
    </style>
  </head>
  <body>

    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="#">BFriend</a>
          <div class="nav-collapse">
            <p class="navbar-text pull-right">Logged in as <a href="#"><?php echo $_SESSION['username']; ?></a></p>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
              <li class="nav-header">User name</li>
			  <div >
				<img class="profile_picture_large" src="img/profilePic.jpg" alt="profile picture">
			  </div>
              	<li><a href="#profileEditor" data-toggle="modal" >Add Interest</a></li>
			  	<li><a href="#" id="scanLocation"><strong>BFriend</strong></a></li>
			  	<li class="emptySpace"></li>
            </ul>
          </div><!--/.well -->
        </div><!--/span-->
        <div class="span6">
          <div class="hero-unit">
            <h2>Your future BFriend: </h2>
          </div>
        </div><!--/span-->
		<div class= "span3">
			<div class="row-fluid">
				<div class="messageboard">
					<h2>Message Board</h2>
						<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.</p>
				</div>		
			</div>
		</div>
      </div><!--/row-->
      <hr>
      <footer>
        <p>&copy; Company 2012</p>
      </footer>
    </div><!--/.fluid-container-->
	
	<div class="container">
		<div id="profileEditor" class="modal hide fade in" style="display: none; ">
			<div class="modal-header">
			<a class="close" data-dismiss="modal">X</a>
			<h3>Edit profile</h3>
			</div>
			<div class="modal-body">
			<form>
				<script>
					var xmlhttp;
					if (window.XMLHttpRequest)
					{// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp=new XMLHttpRequest();
					}
					else
					{// code for IE6, IE5
					  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
					}
				</script>
			</form> 
			<div class="btn-group">
							<button class="btn">Interest</button>
							<button class="btn dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
							</button>
							<ul class="dropdown-menu">
								<li><a id="sport_rec">Sports &amp; Recreation</a></li>
								<li><a id="movie_tv">Movies/TV</a></li>
								<li><a id="books_magazines">Books/Magazines</a></li>
								<li><a id="animals">Animals</a></li>
								<li><a id="art">Art</a></li>
								<li><a id="food_drink">Food/Drink</a></li>
								<li><a id="music">Music</a></li>
							</ul>
			</div><br />
			<h5>Interest Available</h5>
			<p id="buttonArea"></p>		        
			</div>
			<div class="modal-footer">
			<a href="#" id="clear_interest_buttons" class="btn btn-warning">Reset</a>
			<a href="#" id="submit_interest" class="btn btn-success">Submit</a>
			<a href="#" class="btn" data-dismiss="modal">Close</a>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
		<script src="../bootstrap/js/bootstrap-modal.js" type="text/javascript"></script>
		<script src="../bootstrap/js/bootstrap-dropdown.js" type="text/javascript"></script>
		<script src="javascript/geolocation.js" type="text/javascript"></script>
		<script src="javascript/fetchInterest.js" type="text/javascript"></script>
	</div>
  </body>
</html>
