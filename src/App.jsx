import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listenToAuthChanges } from "./features/auth/authListener";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { auth } from "./services/firebase";

function App() {
  const dispatch = useDispatch();
  const { authChecked } = useSelector((state) => state.auth);

  useEffect(() => {
    listenToAuthChanges(dispatch);
  }, [dispatch]);

  if (!authChecked) {
    return <div>Loading Firebase auth...</div>;
  }
  console.log("Firebase Auth : ", auth);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
