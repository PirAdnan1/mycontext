import "@/styles/globals.css";

// components
import MyContextProvider from "@/context/Context";

export default function App({ Component, pageProps }) {
  return (
    <MyContextProvider>
      <Component {...pageProps} />
    </MyContextProvider>
  );
}
