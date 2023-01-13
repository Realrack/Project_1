import Toast from 'react-native-toast-message';
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//Minimum eight characters, at least one letter, one number and one special character:
var passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const createValidation = data => {
  if (!data.name || data.name.length < 3 || data.name.trim() === '') {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Plz Fill Valid name👋',
    });
    return true;
  } else if (
    !data.phone ||
    data.phone.length < 10 ||
    data.phone.trim() === ''
  ) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Please Fill Valid number👋',
    });
    return true;
  } else if (!data.email || !emailRegex.test(data.email)) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Plz Fill Valid email👋',
    });
    return true;
  } else if (!data.password || !passwordRegex.test(data.password)) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Plz Fill Valid password👋',
    });
    return true;
  } else if (data.password !== data.confirmPassword) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: 'Password and confirmPassword not match👋',
    });
    return true;
  } else {
    return false;
  }
};
