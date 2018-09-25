<?php 

	// index.php

	$title = 'Home';

	include 'include/header.php'; ?>
		

		<!-- MASTER HERO -->
		<div class="hero">
            <div class="hero-background" id="hero-bg"></div>
            <div class="hero-content">
        		<h1>Heading</h1>
        		<p>Content</p>
        		
            </div>
        </div>

        
		<!-- MAIN CONTAINER -->
		<main>
			<div>
				
				<article>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					<p><a href="" class="button">read more</a></p>
				</article>

				<!-- ITEM -->
				<div class="item-container">

					<?php for ( $i = 0; $i < 5; $i++ ) { ?>

					<div class="item">
						<div>

							<h5>Heading</h5>
							<div class="thumbnail">
								<img src="assets/imagery/dawn-back.jpg" alt="Image">
							</div>
							<p><a href="" class="button">read more</a></p>
							
						</div>
					</div>

					<?php } ?>
				</div>
			
			</div>
		</main>
    

<?php include 'include/footer.php'; ?>