import React, { useEffect } from "react";
import styles from "./App.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/useSlice";
import { auth } from "./firebase";

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const onSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      onSub();
    };
  }, [dispatch]);

  return <div className="App"></div>;
};

export default App;
