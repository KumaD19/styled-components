import { useState } from "react";
import UserLogged from "./UserLogged";
import Form from "./Form";
import { LoginContainer } from "./styles";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <LoginContainer>
      {isLoggedIn ? (
        <UserLogged user={user} onLogout={handleLogOut} />
      ) : (
        <Form onSubmit={handleLogin} />
      )}
    </LoginContainer>
  );
};

export default Login;
