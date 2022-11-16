import React, {useState} from 'react';
import mainImage from "./imagepaths/mainImage.png";
import lupa from "./imagepaths/lupa.png";
import cart from "./imagepaths/cart.png";
import data from "./cards-data";
import Search from './Search';


function NavBar(props) {
    const [searchTerm, setSeachTerm] = useState("");
    return (
        <div className='display flex flex-row justify-between items-center gap-10 pt-4  pl-10 pr-10 pb-4'>
            <h1 className='flex font-bold text-[35px]'>SHAIN</h1>
            {/* <img src={mainImage} alt="" className='flex flex-row items-center gap-4 justify-between' /> */}
            <Search/>
            {/* <input type="search" placeholder="Buscar" className="border-2 border-gray-400 rounded-full p-1 m-auto text-center float-right" onChange={(event) => {
                    setSeachTerm(event.target.value);
                }} />
            <img src={lupa} alt="" className="w-6 h-6 flex flex-row  p-0 gap-2" /> */}
            <img src={cart} alt="" className="ml-1" />
       
        </div>

        
    );
}

export default NavBar;