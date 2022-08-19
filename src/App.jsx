import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Landing from "./pages/Landing";
import { AuthContext } from "./context/authContext";
import UploadImage from "./pages/UploadImage";

function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [signUp, toggleSignUp] = useState(true);
  return (
    <ChakraProvider>
      <div className="app">
        <AuthContext.Provider value={{signedIn, setSignedIn, signUp, toggleSignUp}}>
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/image/submit" element={<UploadImage />} />
              </Routes>
            </Router>
          </Layout>
        </AuthContext.Provider>
      </div>
    </ChakraProvider>
  );
}

export default App;
