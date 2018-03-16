<?php 

// assets.php

// Library of pre-built components as part of Project Dawn

// ** ** Delete file as appropriate ** **

?>


<!-- BLOCKQUOTE -->
<blockquote>
	A successful man is one who can lay a firm foundation with the bricks others have thrown at him.
	<span>David Brinkley</span>
</blockquote>




<!-- TABLE -->
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Mobile</th>
			<th>Email</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Alex Dunnett</td>
			<td>07765031280</td>
			<td>alex.louise96@gmail.com</td>
		</tr>
	</tbody>
</table>




<!-- HERO -->
<div class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
		<h1>Sunrise</h1>
		<p>The content within</p>
    </div>
</div>




<!-- FORM -->
<form>
	<div>
		<label>name</label>
		<input type="name" name="name" placeholder="John Smith">
	</div>
	<div>
		<label>email</label>
		<input type="email" name="email" placeholder="johnsmith@earth.co.uk">
	</div>
	<div>
		<label>message</label>
		<textarea></textarea>
	</div>
	<div data-input="checkbox">
		<input type="checkbox" name="">
		<label>join the newsletter</label>
	</div>
	<input type="submit" name="submit">
</form>




<!-- POPUP -->
<div class="popup">
	<div class="x"><span></span></div>
	<h4>Popup window</h4>
	<p>The conten within</p>
</div>




<!-- ITEM -->
<div class="item-container">

	<?php for ( $i = 0; $i < 6; $i++ ) { ?>

	<div class="item">
		<h5>Heading</h5>
		<div class="thumbnail">
			<img src="assets/images/dock.jpg" alt="Image">
		</div>
		<p>The content within</p>
	</div>

	<?php } ?>
</div>




<!-- CAROUSEL -->
<div class="carousel">
	<div>
		<img src="assets/images/bridge.jpg" alt="1">
	</div>
	<div>
		<img src="assets/images/fish.jpg" alt="1">
	</div>
	<div>
		<img src="assets/images/dock.jpg" alt="1">
	</div>
</div>


<?php 

// ** ** Delete file as appropriate ** **

?>