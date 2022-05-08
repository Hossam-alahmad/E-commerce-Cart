import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { AppProvider } from "./Hooks/context";

function App() {
    return (
        <AppProvider>
            <div className="cart-app">
                <Navbar />
                <Cart />
            </div>
        </AppProvider>
    );
}

export default App;
