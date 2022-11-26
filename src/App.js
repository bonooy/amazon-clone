import './App.css';
import Header from "./Header";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import PaymentPage from "./pages/PaymentPage";


function App() {
    const [{}, dispatch] = useStateValue();


    useEffect(() => {
            auth.onAuthStateChanged(authUser => {
                console.log('현재 사용자는' + authUser + '입니다' );

                if (authUser) {
                    //유저가 방금 로그인하거나 이미 한상태
                    dispatch({
                        type: 'SET_USER',
                        user: authUser

                    })

                } else {
                    //사용자가 로그아웃 되었을때
                    dispatch({
                        type: 'SET_USER',
                        user: null
                    })
                }
            })


        }, []


    )

    return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/payment" element={<PaymentPage/>}/>
                </Route>
            </Routes>
        </div>
      </Router>
  );
}

export default App;


// https://www.youtube.com/watch?v=b5BH7kPboMk
// https://github.com/reactbacksu/amazon-clone