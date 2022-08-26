import { Route, Routes } from "react-router-dom";
import { Footer, Header, Sidenav } from "./components";
import { ErrorPage, HomePage, Login, Signup } from "./pages";
import { RequireAuth } from "./pages/auth/RequireAuth";
import "./styles/root.css";

function App() {
   
  return (
    <div className="App darken">
      <div id="root" className="hide-m">
      <Header />
      <Sidenav />
          <Routes>
            <Route path='/' element={<RequireAuth />} >
              <Route index element={<HomePage />} />
            </Route>   
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
