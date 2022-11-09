"use client";
import { createContext, ReactElement, useEffect, useState } from "react";
import { fetchMe } from "../graphql";
import { User } from "../types";
import Login from "./Login";

type Props = {
  children: ReactElement;
};

const LoginContent: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const checkUser = async () => {
    const user = await fetchMe();
    setUser(user);
    console.log("checking user: ", user);
  };

  useEffect(() => {
    checkUser();
  }, []);

  if (!user) {
    return <Login callback={() => checkUser()} />;
  }

  return children;
};

export default LoginContent;
