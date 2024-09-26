import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "./redux/user/slice";
import { apiUrl } from "./url";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/singin";

function App() {
  const dispatch = useDispatch();
  const { user_id, logged } = useSelector(userSelector);

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === "/") {
      document.body.style.background = "#f8f4e4";
    }
  }, []);

  useEffect(() => {
    if (logged && user_id) {
      getUserInfo();
    }
  }, [logged, user_id]); // Added user_id as dependency

  const getUserInfo = async () => {
    try {
      const res = await fetch(`${apiUrl}/user/${user_id}`);

      if (res.ok) {
        // Use res.ok for checking status
        const data = await res.json();

        dispatch(
          setUser({
            user_id: data._id,
            user: data.name,
            email: data.email,
            filmes: data.filmes,
            // Avoid including sensitive info like password
          })
        );
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
