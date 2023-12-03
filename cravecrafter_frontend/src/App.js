import { Login } from "./components/Login";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";
import { OrderDetails } from "./components/OrderDetails";
import { SurpriseOption } from "./components/SurpriseOption";


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signin /> */} 
      {/* <Signup /> */}
      <OrderDetails />
      <SurpriseOption />
      {/* <Checkout /> */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;
