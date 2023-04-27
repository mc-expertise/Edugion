import Header from './Components/Header';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ESearch from './Components/ESearch';
import imgsociaux from './asset/Frame5.png';
import imgfloat from './asset/image.png';
import { useLocation } from 'react-router-dom';
import ResetPassword from './Components/ResetPassword';
import Validation from './Components/Validation';
function App() {
  const location = useLocation();
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  console.log('loged', isLoggedIn);
  return (
    <div
      className="App w-full h-[100vh] 
      box-border overflow-x-hidden ">
      <Header />
      <div className="h-[calc(100vh-110px)] relative">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn == 'true' ? <ESearch /> : <SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/esearch" element={<ESearch />}></Route>
          <Route path="/reset" element={<ResetPassword />}></Route>
          <Route path="/validation" element={<Validation />}></Route>
        </Routes>
        {location.pathname === '/esearch' ? (
          <>
            <img
              src={imgsociaux}
              alt=""
              className="max-w-full absolute top-[50%] 
        translate-y-[-50%] left-5 cursor-pointer"
            />
            <img
              src={imgfloat}
              alt=""
              className="h-[80%] w-[90%] absolute 
        bottom-0 right-0 -z-10"
            />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default App;
