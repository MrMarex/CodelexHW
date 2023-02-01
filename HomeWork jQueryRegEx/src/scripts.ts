import * as $ from 'jquery';
import validateEmail from './components/validateEmail';
import validateName from './components/validateName';
import validatePassword from './components/validatePassword';

// eslint-disable-next-line no-undef
$('form').on('submit', (event: JQuery.Event) => {
  event.preventDefault();

  const name = $('#name').val();
  const email = $('#email').val();
  const password = $('#password').val();

  function successFunction() {
    $('#error').hide();
    $('#error-name').hide();
    $('#error-email').hide();
    $('#error-password').hide();
    $('#success').show();
  }

  if (validateName(name) && validateEmail(email) && validatePassword(password)) {
    successFunction();
  } else {
    $('#error').show();
    $('#success').hide();

    if (!validateName(name)) {
      $('#error-name').show();
    } else {
      $('#error-name').hide();
    }

    if (!validateEmail(email)) {
      $('#error-email').show();
    } else {
      $('#error-email').hide();
    }

    if (!validatePassword(password)) {
      $('#error-password').show();
    } else {
      $('#error-password').hide();
    }
  }
});
