//  ////  ////  --  --|    script.js - v0.1




//  --|    TOGGLE NAV MENU

const menu = document.querySelector( '.toggle' ),
	  nav  = document.querySelector( '.nav' ),
	  body = document.body;

menu.addEventListener( 'click', ( event ) => {
	menu.classList.toggle( 'bar-change' );
	nav.classList.toggle( 'nav-change' );
	body.classList.toggle( 'no-scroll' );
});