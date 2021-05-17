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
  const fnameErr = document.querySelector('.error__fname');
  const fnameErr = document.querySelector('.error__fname');
  const fnameErr = document.querySelector('.error__fname');

  if (fname.value === '') {
    fnameErr.style.display = 'block';
  } else {
    fnameErr.style.display = 'none';
  }
  if (lname.value === '') {
  }
  if (!validateEmail(email.value)) {
  }
  if (password.value.length < 6) {
  }
};

const handleInvalid = () => {
  console.log('invalid');
};

form.addEventListener('submit', handleSubmit);

fname.addEventListener('oninvalid', handleInvalid);
