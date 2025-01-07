import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Settings from './components/Settings';
import Signup from "./components/auth/signup";
import Login from './components/auth/login';
import ForgetPassword from './components/auth/forgetPassword'; 
import LogOut from './components/auth/LogOut';
import RefferalCode from "./components/auth/RefferalCode";
import ChangePinCode from './components/auth/ChangePinCode';
import Contact from "./components/Contact/Contact";
import VoucherRedeem from './components/VoucherRedeem';
import PaymentMethods from "./components/Contact/PaymentMethods";
import PaymentMethodDetails from "./components/Contact/PaymentMethodDetails";
import Profile from "./components/Profile/Profile";
import AppsSection from './components/Home/Apps/AppsSection';
import SocialSection from './components/Home/Social/SocialSection'; 
import LinesSection from './components/Home/Lines/LinesSection'
import GemingSection from './components/Home/Geming/GemingSection';
import BalanceSection from './components/Home/Balance/BalanceSection';
import CardsSection from './components/Home/Cards/CardsSection';
import ProductDetailLines from './components/Home/Lines/ProductDetailLines';
import ProductDetailBalance from "./components/Home/Balance/ProductDetailBalance";
import ProductDetailGeming from "./components/Home/Geming/ProductDetailGeming";
import ProductDetailApps from "./components/Home/Apps/ProductDetailApps";
import ProductDetailSocial from "./components/Home/Social/ProductDetailSocial";
import ProductDetailCards from "./components/Home/Cards/ProductDetailCards"; 
import ProductDetailPageSocial from "./components/Home/Social/ProductDetailPageSocial";
import Favourites from './components/Favourites';
const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />    
            <Route path="/forgot" element={<ForgetPassword />} />    
            <Route path="/logout" element={<LogOut />} />   
            <Route path="/refferalcode" element={<RefferalCode />} />   
            <Route path="/changepincode" element={<ChangePinCode />} /> 
            <Route path="/settings" element={<Settings />} />  
            <Route path="/favourites" element={<Favourites />} />  
            <Route path="/voucherredeem" element={<VoucherRedeem />} />  
            <Route path="/contact" element={<Contact />} />
            <Route path="/payment-methods/:country" element={<PaymentMethods />} />
            <Route path="/payment-method/:methodId" element={<PaymentMethodDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lines" element={<LinesSection />} />
            <Route path="/product/:productId" element={<ProductDetailLines />} />
            <Route path="/apps" element={<AppsSection />} />
            <Route path="/product/:productId" element={<ProductDetailApps />} />
            <Route path="/social" element={<SocialSection />} />
            <Route path="/product/:productId" element={<ProductDetailSocial />} />
            <Route path="/geming" element={<GemingSection />} />
            <Route path="/product/:productId" element={<ProductDetailGeming />} />
            <Route path="/balance" element={<BalanceSection />} />
            <Route path="/product/:productId" element={<ProductDetailBalance />} />
            <Route path="/cards" element={<CardsSection />} />
            <Route path="/product/:productId" element={<ProductDetailCards />} />
            <Route path="/product/:productId/detail/:detailId" element={<ProductDetailPageSocial />} />
        </Routes>
    );
};
export default RoutesApp;