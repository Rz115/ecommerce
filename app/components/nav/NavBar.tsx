import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
import SearchBar from "./SearchBar";

const redressed = Redressed({subsets:["latin"], weight: ["400"]});
const NavBar = () => {
    return ( <div className="
    sticky
    top-0
    w-full
    bg-slate-200
    z-300
    shadow-sm
    ">
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                items-center
                justify-between
                gap-3
                md:gap-0
                ">
                    <Link href="/" className={`${redressed.className} font-bold text-2xl`}>E-PawiShop</Link>
                    <div className="hidden md:block"> <SearchBar/> </div>
                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-8
                    md:gap-12
                    ">CartCount</div>
                    <div>UserMenu</div>
                </div>
            </Container>
        </div>
        </div> );
}
 
export default NavBar;