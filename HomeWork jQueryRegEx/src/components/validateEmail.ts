function validateEmail(email:any) {
  const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  return emailValid;
}

export default validateEmail;
