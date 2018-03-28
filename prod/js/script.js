'use strict';

//  ////  ////  --  --|    script.js - v1.0


//  ////  --|    FIND PAGE

// This component finds out what page the user is on
// then does something about it.

// By default, this is only used to add the .active
// class for the navigation, but can do more!

var page = window.location.pathname,
    page = page.split('/').pop(),
    page = page.replace('.php', '');

switch (page) {

  case 'index':
    document.querySelector('a[href="index.php"]').classList.add('active');
    break;

  case 'about':
    document.querySelector('a[href="about.php"]').classList.add('active');
    break;

  case 'services':
    document.querySelector('a[href="services.php"]').classList.add('active');
    break;

  case 'contact':
    document.querySelector('a[href="contact.php"]').classList.add('active');
    break;

}

//  ////  --|    TOGGLE NAV MENU

var menu = document.querySelector('.toggle'),
    nav = document.querySelector('nav'),
    body = document.body;

menu.addEventListener('click', function () {
  menu.classList.toggle('bar-change');
  nav.classList.toggle('nav-change');
  body.classList.toggle('no-scroll');
});

//  ////  --|    POPUPS

var open = document.querySelector('#open'),
    popup = document.querySelector('.popup'),
    close = document.querySelector('.x');

open.addEventListener('click', function () {
  popup.classList.add('popup-appear');
  body.classList.add('no-scroll');
});

close.addEventListener('click', function () {
  popup.classList.add('popup-disappear');
  body.classList.remove('no-scroll');
  setTimeout(function () {
    popup.classList.remove('popup-appear');
    popup.classList.remove('popup-disappear');
  }, 1200);
});

// ////  --|    JQUERY
$(document).ready(function () {

  //  --|    FORM HANDLING

  // The following is a basic set-up for form handling and validation,
  // adjust the values and names accordingly to match intended purpose.

  // Also bare in mind if multiple forms are used in a project, use a global
  // submit function for common input types, then use individual submit functions
  // that tailor to specific forms.

  $('form').submit(function (e) {

    // Use preventDefault if you want user to stay on same page
    e.preventDefault();

    // Get elements of the form
    var name = $(this).find('input[ type="name" ]'),
        email = $(this).find('input[ type="email" ]'),
        message = $(this).find('textarea'),
        n = true,
        e = true,
        m = true;

    // Name validation
    if (name.val() == '' || !name.val().match(/^[a-zA-Z\s]*$/) || name.val().length > 120) {

      name.addClass('invalid');
      n = false;
    }

    // Email validation
    if (email.val() == '' || !email.val().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/) || email.val().length > 120) {

      email.addClass('invalid');
      e = false;
    }

    // Message validation
    if (message.val() == '' || message.val().length > 800) {

      message.addClass('invalid');
      m = false;
    }

    // If validation on all elements passed, run handling function
    if (n === true, e === true, m === true) {
      handler(name.val(), email.val(), message.val());
    }
  });

  // Remove invalid class when user focuses on element again
  $('input[ type="name" ]').focus(function () {
    $(this).removeClass('invalid');
  });
  $('input[ type="email" ]').focus(function () {
    $(this).removeClass('invalid');
  });
  $('textarea').focus(function () {
    $(this).removeClass('invalid');
  });

  // Handling function that does something with form values
  function handler(name, email, message) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        // Retrieve response from php file
        var verify = this.responseText;

        if (verify == 'success') {

          // Tell the user that submission was successful
          alert('Thanks for the message!');

          // Reset form
          $('input[ type="name" ]').val('');
          $('input[ type="email" ]').val('');
          $('textarea').val('');
        } else {

          // If something went wrong
          alert('Ohh dear; something wasn\'t right...');
        }
      }
    };
    xmlhttp.open("GET", "include/handler.php?name=" + name + '&email=' + email + '&message=' + message, true);
    xmlhttp.send();
  }

  //  --|    PARALLAX
  function parallax() {

    var stage = $(window),
        scrollTop,
        scrollOpa;

    // Add elements to animate here
    var hero_background = $('#hero-bg'),
        hero_background_pos = hero_background.offset().top;

    stage.on('scroll resize', function () {

      // Variables for scrollTop and scrollOpa
      scrollTop = window.pageYOffset, scrollOpa = scrollTop / 100;

      // Update Element
      var a = hero_background_pos + scrollTop / 4;
      hero_background.css({ 'top': a });
    });
    stage.trigger('scroll');
  };
  parallax();
});