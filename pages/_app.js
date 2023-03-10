import "../styles/globals.css";

// Internal Imports
import { Navbar } from "../components/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
