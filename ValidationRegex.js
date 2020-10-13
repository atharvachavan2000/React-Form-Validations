export const emptyValidation = (data) => {
  if (data) {
    if (data.length <= 0 || data === undefined || /^ *$/.test(data)) {
      return true;
    }
    return false;
  }
  return true;
};

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const validateMobile = (mobile) => {
  if(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)){
    return true
  }
  return false
}
