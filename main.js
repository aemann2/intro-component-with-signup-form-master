const form = document.querySelector('.form__main');
const fname = document.querySelector('input[name="fname"]');
const lname = document.querySelector('input[name="lname"]');
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const handleSubmit = (e) => {
  e.preventDefault();

  const errArray = [fname, lname, email, password];

  errArray.forEach((err) => {
    const errMsg = document.querySelector(`.error__${err.name}`);

    if (err.name === 'email' && !validateEmail(err.value)) {
      err.style.background =
        'url("../images/icon-error.svg") no-repeat 95% 50%';
      err.style.borderColor = 'hsl(0, 100%, 74%)';
      errMsg.style.display = 'block';
    } else if (err.value === '') {
      err.style.background =
        'url("../images/icon-error.svg") no-repeat 95% 50%';
      err.style.borderColor = 'hsl(0, 100%, 74%)';
      errMsg.style.display = 'block';
    } else {
      err.style.background = 'none';
      err.style.borderColor = 'hsl(246, 25%, 77%)';
      errMsg.style.display = 'none';
    }
  });
};

form.addEventListener('submit', handleSubmit);
