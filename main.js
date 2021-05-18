const form = document.querySelector('.form__main');
const fname = document.querySelector('input[name="fname"]');
const lname = document.querySelector('input[name="lname"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const error = document.querySelector('.form__main__error');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const fnameErr = document.querySelector('.error__fname');
  const lnameErr = document.querySelector('.error__lname');
  const emailErr = document.querySelector('.error__email');
  const pwordErr = document.querySelector('.error__pword');

  if (fname.value === '') {
    fnameErr.style.display = 'block';
    fname.style.background =
      'url("../images/icon-error.svg") no-repeat 95% 50%';
    fname.style.borderColor = 'hsl(0, 100%, 74%)';
  } else {
    fnameErr.style.display = 'none';
    fname.style.background = 'none';
    fname.style.borderColor = 'hsl(246, 25%, 77%)';
  }
  if (lname.value === '') {
    lnameErr.style.display = 'block';
    lname.style.background =
      'url("../images/icon-error.svg") no-repeat 95% 50%';
    lname.style.borderColor = 'hsl(0, 100%, 74%)';
  } else {
    lnameErr.style.display = 'none';
    lname.style.background = 'none';
    lname.style.borderColor = 'hsl(246, 25%, 77%)';
  }
  if (!validateEmail(email.value)) {
    emailErr.style.display = 'block';
    email.style.background =
      'url("../images/icon-error.svg") no-repeat 95% 50%';
    email.style.borderColor = 'hsl(0, 100%, 74%)';
  } else {
    emailErr.style.display = 'none';
    email.style.background = 'none';
    email.style.borderColor = 'hsl(246, 25%, 77%)';
  }
  if (password.value.length < 1) {
    pwordErr.style.display = 'block';
    password.style.background =
      'url("../images/icon-error.svg") no-repeat 95% 50%';
    password.style.borderColor = 'hsl(0, 100%, 74%)';
  } else {
    pwordErr.style.display = 'none';
    password.style.background = 'none';
    password.style.borderColor = 'hsl(246, 25%, 77%)';
  }
};

const handleInvalid = () => {
  console.log('invalid');
};

form.addEventListener('submit', handleSubmit);

fname.addEventListener('oninvalid', handleInvalid);
