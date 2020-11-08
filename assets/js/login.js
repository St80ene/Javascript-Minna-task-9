const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

const checkInput = () => {
  //getting the values of the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  //validating usernmae
  if (usernameValue === '') {
    //show error
    //add error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    //add success class
    setSuccessFor(username);
  }

  //validating email
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  //validating password
  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (!isPassword(passwordValue)) {
    setErrorFor(password, 'Password is not valid');
  } else {
    setSuccessFor(password);
  }

  //confirm password
  if (confirmPasswordValue === '') {
    setErrorFor(confirmPassword, 'Password cannot be blank');
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, 'Passwords does not match');
  } else {
    setSuccessFor(confirmPassword);
  }

  //show a success message
};

const setErrorFor = (input, message) => {
  const formControl = input.parentElement; //get the form control
  const small = formControl.querySelector('small');

  //add error message
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
};

const setSuccessFor = (input) => {
  const formControl = input.parentElement; //get the form control
  formControl.className = 'form-control success';
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const isPassword = (password) => {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/.test(password);
};
