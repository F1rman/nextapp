import "@/styles/globals.css";
import { MyThemeContextProvider } from "./providers/theme";

export default function App({ Component, pageProps }) {
  return (
    <MyThemeContextProvider>
      <Component {...pageProps} />
    </MyThemeContextProvider>);
}
