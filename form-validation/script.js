function seterror(id, error) {
  var element = document.getElementById(id);
  console.log(element);
  element.innerHTML = error;
  element.style.color = "red";
}
function check_alpha(pass) {
  for (let i = 0; i < pass.length; i++) {
    if (
      (pass[i] >= "a" && pass[i] <= "z") ||
      (pass[i] >= "A" && pass[i] <= "Z")
    ) {
      return 1;
    }
  }
  return 0;
}

function check_digit(pass) {
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "0" && pass[i] <= "9") {
      return 1;
    }
  }
  return 0;
}

function check_special_char(pass) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(pass);
}

function valid() {
  // Validate the form
  // use seterror function to set error inside tag and id
  // retrun true if no error found, else return false

  var name = document.forms["form"]["name"].value;
  var email = document.forms["form"]["email"].value;
  var phone = document.forms["form"]["phone"].value;
  var pass = document.forms["form"]["pass"].value;
  var cpass = document.forms["form"]["cpass"].value;

  if (name.length <= 5) {
    seterror("name", "");
    seterror("name", "*Length of name is too short");
    return false;
  } else if (phone.length != 10) {
    seterror("phone", "");
    seterror("phone", "*Length of phone number should be 10");
    return false;
  } else if (email.indexOf("@") <= 0) {
    seterror("email", "");
    seterror("email", "*Invalid Email");
    return false;
  } else if (pass.length < 8 || pass.length > 20) {
    seterror("pass", "");
    seterror("pass", "*Password length should be between 8 to 20");
    return false;
  } else if (check_alpha(pass) == 0) {
    seterror("pass", "");
    seterror("pass", "*Password should contain atleast one alphabet");
    return false;
  } else if (check_digit(pass) == 0) {
    seterror("pass", "");
    seterror("pass", "*Password should contain atleast one digit");
    return false;
  } else if (check_special_char(pass) == 0) {
    seterror("pass", "");
    seterror("pass", "*Password should contain atleast one special character");
    return false;
  } else if (pass != cpass) {
    seterror("cpass", "");
    seterror("cpass", "*Password and Confirm Password should be same");
    return false;
  } else {
    return true;
  }
  return true;
}
