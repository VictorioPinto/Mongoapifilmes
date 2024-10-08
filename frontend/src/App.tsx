import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "./redux/user/slice";
import { apiUrl } from "./url";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/singin";
import CardFilmes from "./codes/components/Cardfilmes";
import FilmesList from "./codes/components/FilmesList";
import { CreateMoviePage } from "./pages/CreateMoviePage";

function App() {
  const dispatch = useDispatch();
  const { user_id, logged } = useSelector(userSelector);

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === "/") {
      document.body.style.background = "#050505";
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
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create/movie" element={<CreateMoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
