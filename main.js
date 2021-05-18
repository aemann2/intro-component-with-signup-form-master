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
  const passwordErr = document.querySelector('.error__pword');

  const errArray = [fname, lname, email, password];

  errArray.forEach((err) => {
    if (err.name === 'email' && !validateEmail(err.value)) {
      err.style.background =
        'url("../images/icon-error.svg") no-repeat 95% 50%';
      err.style.borderColor = 'hsl(0, 100%, 74%)';
    } else if (err.value === '') {
      err.style.background =
        'url("../images/icon-error.svg") no-repeat 95% 50%';
      err.style.borderColor = 'hsl(0, 100%, 74%)';
    } else {
      err.style.background = 'none';
      err.style.borderColor = 'hsl(246, 25%, 77%)';
    }
  });

  if (fname.value === '') {
    fnameErr.style.display = 'block';
  } else {
    fnameErr.style.display = 'none';
  }
  if (lname.value === '') {
    lnameErr.style.display = 'block';
  } else {
    lnameErr.style.display = 'none';
  }
  if (!validateEmail(email.value)) {
    emailErr.style.display = 'block';
  } else {
    emailErr.style.display = 'none';
  }
  if (password.value.length < 1) {
    passwordErr.style.display = 'block';
  } else {
    passwordErr.style.display = 'none';
  }
};

const handleInvalid = () => {
  console.log('invalid');
};

form.addEventListener('submit', handleSubmit);

fname.addEventListener('oninvalid', handleInvalid);
