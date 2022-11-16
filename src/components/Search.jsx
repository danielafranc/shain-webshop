import React, {useState} from 'react';
import lupa from "./imagepaths/lupa.png";
import data from "./cards-data";
import CardsComponent from './Cards-component';


function Search(props) {

    const [searchTerm, setSeachTerm] = useState("");

    return (
        <div className='container'>
            <div className='search flex  justify-end'>
            <form className='flex flex-row items-center border-solid border-2 border-gray-400 rounded-full p-1 text-center w-[233px]'>
                <img src={lupa} className="flex justify-center items-center h-6 pl-2 "/>
                <input type="text" name="s" id="search-items" placeholder='search' className='rounded-none outline-none text-1xl font-normal p-2 pl-[10px] pr-[10px] w-[150px] h-7' onChange={(event) => {
                    setSeachTerm(event.target.value);
                }} />
            </form>
            </div>
           {/* <div className='template_container'> 
                {
                    data
                    .filter((val) => {
                        if(searchTerm == ""){
                            return val;
                        }else if(val.color.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                    .map((val) => {
                        return(
                            <div className='template' key={val.img}>
                                <img src={val.img} alt="" />
                                <h3>{val.color}</h3>
                                <p>{val.price}</p>
                            </div>
                        )
                    })
                }
               

            </div>   */}
        </div>
    
    );
}

export default Search; 