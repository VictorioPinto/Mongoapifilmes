import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormsContainer, Main } from "./styles";
import { userSelector } from "../../redux/user/slice";
import { useNavigate } from "react-router-dom";
import { SingInForm } from "../../codes/forms/singin";
import { SignUpForm } from "../../codes/forms/singup";
import { Tampaform } from "../../codes/tampa/tampaform";

export const SignIn = () => {
  const { logged } = useSelector(userSelector);
  const navigate = useNavigate();

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged, navigate]);

  return (
    <Main>
      <FormsContainer>
        <Tampaform />
        <SignUpForm />
        <SingInForm />
      </FormsContainer>
    </Main>
  );
};
