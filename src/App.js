import logo from './logo.svg';
import './App.css';
import {Navigate,Routes,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MainNavBar from './components/MainNavBar';
import ProductList from './pages/ProductList';
import AboutUs from './pages/AboutUs';
import HomeComponent from './pages/HomeComponent';
import ProductForm from './pages/ProductForm';
import ProductEdit from './pages/ProductEdit';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <div>
      <MyHeader></MyHeader>
      <MainNavBar></MainNavBar>
      <Routes>
         <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
         <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
         <Route path="/list" element={<ProductList></ProductList>}>
             <Route path="details/:pid" element={<ProductDetails></ProductDetails>}></Route>
         </Route>
         <Route path="/edit/:pid" element={<ProductEdit></ProductEdit>}></Route>
          <Route path="/form" element={<ProductForm></ProductForm>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
