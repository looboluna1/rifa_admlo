import React, { useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router";

export function Login() {
  const [userValue, setUserValue] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate()

  async function handleSignIn() {
    const userData = {
      username: userValue,
      password: userPassword,
    };

    try {
      const response = await api.post("/auth/signin", userData);
      const data = await response.data;
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("username", data.user.username);
      navigate("/")
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <div className="page">
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSignIn()
      } } className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>
        <label htmlFor="user">E-mail</label>
        <input
          value={userValue}
          onChange={(e) => setUserValue(e.target.value)}
          placeholder="Digite seu e-mail"
          id="user"
          autoFocus={true}
        />
        <label htmlFor="password">Senha</label>
        <input
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Digite sua senha"
        />
        <a href="/">Cadastrar-se</a>
        <button type="submit"  className="btn">
          Acessar
        </button>
      </form>
    </div>
  );
}
