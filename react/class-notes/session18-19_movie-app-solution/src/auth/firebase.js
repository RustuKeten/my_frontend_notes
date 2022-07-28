import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    //? Kullanıcı profilini güncelleyen firebase metodu.(9)
    await updateProfile(auth.currentUser, {
      displayName: displayName, //*sadece displayName de yazabilirdik ES7 dan sonra gelen özellik.
    });

    navigate("/");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async (email, password, navigate) => {
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  try {
    let userCredential = await signInWithEmailAndPassword(
      //? mevcut kullanıcının giriş yapması için kullanıyoruz.
      auth,
      email,
      password
    );
    navigate("/");
    // sessionStorage.setItem("user", JSON.stringify(userCredential.user));
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  //   //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};

//* http://concole.firebase.google.com/
//* =>Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* Authentication => sign-in method => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkiin ekle

export const signUpProvider = (navigate) => {
  //? google ile giriş yapılması için kullanılna firebase methodu
  const provider = new GoogleAuthProvider();
  //? açılır menü pop-up ile
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
