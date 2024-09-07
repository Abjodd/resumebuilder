// src/auth.js
import { auth, database } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set, update } from 'firebase/database';

export const register = () => {
  return new Promise((resolve, reject) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const full_name = document.getElementById('full_name').value;
    const city = document.getElementById('city').value;
    const role = document.getElementById('role').value;

    if (!validate_email(email) || !validate_password(password)) {
      alert('Email or Password is not valid!');
      reject(new Error('Email or Password is not valid!'));
      return;
    }
    if (!validate_field(full_name) || !validate_field(city) || !validate_field(role)) {
      alert('One or more fields are empty!');
      reject(new Error('One or more fields are empty!'));
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const database_ref = ref(database, 'users/' + user.uid);
        const user_data = {
          email: email,
          full_name: full_name,
          city: city,
          role: role,
          last_login: Date.now()
        };
        set(database_ref, user_data);
        alert('User Created!');
        resolve();
      })
      .catch((error) => {
        alert(error.message);
        reject(error);
      });
  });
};

export const login = () => {
  return new Promise((resolve, reject) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validate_email(email) || !validate_password(password)) {
      alert('Email or Password is not valid!');
      reject(new Error('Email or Password is not valid!'));
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const database_ref = ref(database, 'users/' + user.uid);
        const user_data = {
          last_login: Date.now()
        };
        update(database_ref, user_data);
        alert('User Logged In!');
        resolve();
      })
      .catch((error) => {
        alert(error.message);
        reject(error);
      });
  });
};

const validate_email = (email) => {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
};

const validate_password = (password) => {
  return password.length >= 6;
};

const validate_field = (field) => {
  return field !== null && field.trim().length > 0;
};
