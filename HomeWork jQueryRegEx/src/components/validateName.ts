function validateName(name:any) {
  const nameValid = /^[a-zA-Z]{2,50}$/.test(name);
  return nameValid;
}

export default validateName;
