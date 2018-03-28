<?php 

// assets.php

// Library of pre-built components as part of Project Dawn

// ** ** Delete file as appropriate ** **

?>


<!-- CODE -->
<div class="code">
	<span>filename.js</span>
	<pre><code></code></pre>
</div>




<!-- BLOCKQUOTE -->
<blockquote>
	A successful man is one who can lay a firm foundation with the bricks others have thrown at him.
	<span>David Brinkley</span>
</blockquote>




<!-- TABLE -->
<table cellspacing="0" cellpadding="0">
	<thead>
		<tr>
			<th>Name</th>
			<th>Mobile</th>
			<th>Email</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Jack Whitehall</td>
            <td>07865034280</td>
            <td>London</td>
		</tr>
	</tbody>
</table>




<!-- HERO -->
<div class="hero">
    <div class="hero-background"></div>
    <div class="hero-content">
		<h1>Heading</h1>
		<p>Content</p>
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
	<div class="checkbox">
		<input type="checkbox" name="">
		<label>join the newsletter</label>
	</div>
	<input type="submit" name="submit">
</form>




<!-- POPUP -->
<div class="popup">
	<div class="x"><span></span></div>
	<h4>Heading</h4>
	<p>Content</p>
</div>




<!-- ITEM -->
<div class="item-container">

	<?php for ( $i = 0; $i < 6; $i++ ) { ?>

	<div class="item">
		<h5>Heading</h5>
		<div class="thumbnail">
			<img src="assets/" alt="Image">
		</div>
		<p>Content</p>
	</div>

	<?php } ?>
</div>


<?php 

// ** ** Delete file as appropriate ** **

?>