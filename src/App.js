import { useEffect, useState } from 'react';
import './App.css';
import MyNavbar from './MyNavbar';
import RoutePaths from './RoutePaths'
import jwt_decode from "jwt-decode";
import Loading from './Loading';

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(window.location.pathname !== "/login" && window.location.pathname !== "/sign-up" ){
      if (localStorage.JWTtoken) {
        const token = localStorage.getItem('JWTtoken');
        // Decode token and get user info and exp
        const decoded = jwt_decode(token);
        // Set user and isAuthenticated
        // store.dispatch(setCurrentUser(decoded));
        // Check for expired token
        console.log(decoded)
        const currentTime = Date.now() / 1000; // to get in milliseconds
        if (decoded.exp < currentTime) {
          window.location.href = "./login";
        }
        else{
          decoded.isLogged = true;
          setUserDetails(decoded);
          console.log(decoded)
        }
      }
      else{
        // dispatch(logoutUser());
        console.log(window.location.pathname);
        // window.location.href = "/login";
      }
    }
    setLoading(false);
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="main-outer-div">
        <RoutePaths userDetails={userDetails} />
      </div>
    </>
  );
}

export default App;
