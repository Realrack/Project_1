import Toast from 'react-native-toast-message';

export const createValidation = data => {
  console.log(
    !data.name,
    data.name.length < 3,
    data.name.trim() == '',
    '======',
  );
  //   console.log(!data.name || data.name.length < 3 || data.name.trim() == '');
  if (!data.name || data.name.length < 3 || data.name.trim() == '') {
    Toast.show({
      type: 'error',
      text1: 'Create',
      text2: 'Plz Fill Valid name👋',
    });
  }
  if (!data.number || data.number.length < 10 || data.number.trim() == '') {
    Toast.show({
      type: 'error',
      text1: 'Create',
      text2: 'Plz Fill Valid name👋',
    });
  }
  return;
};
