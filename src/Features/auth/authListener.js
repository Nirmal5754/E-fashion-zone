import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { setUser, clearUser } from "./authSlice";

export const listenToAuthChanges = (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } else {
      dispatch(clearUser());
    }
  });
};


