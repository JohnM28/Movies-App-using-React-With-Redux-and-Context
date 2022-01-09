import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserForm from "./components/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Regform from './components/Regform'
import Movies from './pages/movies'
import MovieDetails from "./pages/MovieDetail";
import Favourites from "./pages/favouritesPage"
import { LanguageContext } from "./context/languageContext";
import { useState } from "react";



const App = () => {
    const [contextLang, setContextLang] = useState("en");
    return (
        <div>
       {/*     <div className={contextLang === "ar" ? "text-right" : "text-left"}*/}
       {/*dir={contextLang === "ar" ? "rtl" : "ltr"}>*/}
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={Movies} />
            <Route path={"/movies/:id"} exact component={MovieDetails} />
            {<Route path={"/favourites"} exact component={Favourites} />}
            <Route path={"/login"} exact component={UserForm} />
            <Route path={"/register"} exact component={Regform} />
          </Switch>
          <Footer />
        </Router>
          </LanguageContext.Provider>
      </div>
    );

}

export default App;
