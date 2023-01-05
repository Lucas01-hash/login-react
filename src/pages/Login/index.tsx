import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    console.log({ email, password });
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      console.log(isLogged)
      if (isLogged) {
        navigate("/");
      } else {
        alert("Não foi possivel logar");
      }
    }
  };

  return (
    <div>
      <h2>Pagina fechada</h2>
      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu email"
      />

      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />

      <button onClick={handleLogin}>Logar</button>
    </div>
  );
};
