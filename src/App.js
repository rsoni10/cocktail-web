import { BrowserRouter as Router,useRoutes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
function App() {

 const MyRoutes=()=>{
   const routess = useRoutes([
    {path:"/" , element:<HomePage/>},
    {path:"/product/:id" , element:<ProductDetails/>},
   ])
   return routess;
  }
  return (
  <>
    <Router>
    <Header/>
      <MyRoutes/>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
