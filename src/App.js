import 'styles/global.css';
import 'styles/variables.css';
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { ToastContainer } from "react-toastify";
import Navbar from "components/navbar";
import { Provider } from "react-redux";
import Context from "providers/themeProvider";
import { store } from "./redux/store";
import useTheme from "hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Provider store={store}>
      <Context.Provider value={{ theme, toggleTheme }}>
        <div className={theme === "light" ? "" : "darkmode"}>
          <Navbar />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <ToastContainer/>
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
