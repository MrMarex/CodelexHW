/* eslint-disable no-useless-escape */
function validatePassword(password:any) {
  const passwordValid = /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/.test(password);
  return passwordValid;
}

export default validatePassword;
