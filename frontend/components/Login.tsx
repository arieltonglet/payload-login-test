"use client";
import React, { FormEvent, MouseEventHandler, useRef } from "react";
import { logIn, logOut } from "../graphql";

type Props = {
  callback: Function;
};

const Login: React.FC<Props> = ({ callback }) => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = await logIn(email, password);
    console.log("logged user: ", user);
    callback();
  };

  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
          <label>
            email <input ref={emailRef} type="text" />
          </label>
          <label>
            password <input ref={passwordRef} type="text" />
          </label>
          <button formAction="submit">ok</button>
        </form>
      </div>
    </>
  );
};

export default Login;
