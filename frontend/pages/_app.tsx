import "../styles/globals.css";
import type { AppProps } from "next/app";
import LoginContent from "../components/LoginContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginContent>
      <Component {...pageProps} />
    </LoginContent>
  );
}
