import { useSelector } from "react-redux";
import { FormsContainer, Main } from "./styles";
import { userSelector } from "../../redux/user/slice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../codes/forms/signin"; // Fixed the import name
import { SignUpForm } from "../../codes/forms/signup"; // Fixed the import name

export const SignIn = () => {
  const { logged } = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged, navigate]); // Added navigate to dependency array

  return (
    <Main>
      <FormsContainer>
        <SignUpForm />
        <SignInForm />
      </FormsContainer>
    </Main>
  );
};
