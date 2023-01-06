import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const CreateUser = data => {
  return new Promise(function (resolve, reject) {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async () => {
        await SaveUser(data);
        resolve('Success');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject({message: 'This email address is already in use!'});
        }

        if (error.code === 'auth/invalid-email') {
          reject({message: 'This email address is invalid!'});
        }
      });
  });
};
export const SignInUser = (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error.message);
      });
  });
};
export const SaveUser = data => {
  return new Promise(function (resolve, reject) {
    const UserId = auth().currentUser.uid;
    database()
      .ref(`/users/${UserId}`)
      .set({
        name: data.name,
        email: auth().currentUser.email,
        uid: UserId,
      })
      .then(() => resolve('Data set.'))
      .catch(error => {
        reject(error);
      });
  });
};
