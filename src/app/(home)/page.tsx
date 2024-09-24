import Link from "next/link";
import NavbarPage from "./_components/Navbar";
import Slider from "./_components/slider/Slider";
import Footer from "./_components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserButton } from "@clerk/nextjs";
import Intro from "./_components/Intro";


const Home = () => {
    return ( 
        <>
        <NavbarPage/>
        <Slider/>
        <Intro/>
        <UserButton/>
        <Footer/>  
        </>
     );
}
 
export default Home;