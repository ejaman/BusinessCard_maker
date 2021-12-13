import firebase from "firebase";
import app from "./firebaseAuth";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }

  // 사용자가 바뀔 때 마다 전달받는 사용자 정보를 전달
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
