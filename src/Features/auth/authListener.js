import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import { setUser, clearUser } from "./authSlice";
import { setCartOwner } from "../Cart/cartSlice";

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
      dispatch(setCartOwner(user.uid));
    } else {
      dispatch(clearUser());
      dispatch(setCartOwner("guest"));
    }
  });
};


