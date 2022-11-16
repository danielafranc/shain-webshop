import React from 'react';
import Vector from "./imagepaths/Vector.png";
import  SwitchButton  from "./Switch-Button";
import CardsComponent from "./Cards-component";
import Search from './Search';


function Hero(props) {
    // const campera = "./imagepaths/dataimages/campera.png"
    return (
        <div className='p-[80px] pt-[40px] flex flex-col'>
            <div className='' >
                <h1 className='pt-0 font-[Inter] font-bold text-[22px] leading-6'>Ropa para Hombre</h1>
                <p className='pt-4 font-normal leading-5 text-base'>¿Manteniendo abiertas sus opciones? Descubra todo en un solo lugar. Compre nuestra ropa masculina favorita con chaquetas, 365 esenciales, accesorios y más. Hay muchos estilos que se adaptan a todos sus deseos y necesidades.</p>
            </div>
            <div className='pt-6 pl-0'>
                <button className='rounded-full m-1 bg-zinc-50 hover:bg-slate-9 hover:bg-black hover:text-white'>Todo</button>
                <button className='rounded-full m-1 bg-zinc-50 hover:bg-slate-9 hover:bg-black hover:text-white'>Sudaderas</button>
                <button className='rounded-full m-1 bg-zinc-50 hover:bg-slate-9 hover:bg-black hover:text-white'>Pantalones</button>
                <button className='rounded-full m-1 bg-zinc-50 hover:bg-slate-9 hover:bg-black hover:text-white'>Vermudas</button>
            </div>
            <div className='flex gap-6 pt-6'>
                <ul className='items-center flex flex-start m-1 gap-6 '>
                    <li className='p-1 flex items-center justify-center m-1' onClick={() => {console.log("dianmits")}}> Color <img src={Vector} alt="" className='p-2'/></li>
                    <li className='p-1 flex items-center justify-center m-1'>Tamaño <img src={Vector} alt="" className='p-2'/></li>
                    <li className='p-1 flex items-center justify-center m-1'>Catergoria <img src={Vector} alt="" className='p-2' /></li>
                    <SwitchButton/>
                </ul>
            </div>
            <div className="flex justify-end pr-[220px] pb-6 pt-6 text-base font-normal text-[#656F7E]">
              <p>268 Artículos</p>
            </div>
          <CardsComponent/>                       
    </div>
    );
}

export default Hero;

// const itemData = [

//     {
//     img: campera,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',
//   },
//   {
//     img: campera1,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  },
//   {
//     img: campera2,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  },
//   {
//     img: campera3,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  },
//   {
//     img: campera4,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD', 
//  },
//   {
//     img: campera5,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  
// },
//   {
//     img: campera6,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  
// },
//   {
//     img: campera7,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  
// },
//   {
//     img: campera8,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  
// },
//   {
//     img: campera9,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',  
// },
//   {
//     img: campera10,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',
//   },
//   {
//     img: hoodie,
//     color: 'Negro',
//     colors: colors,
//     text: '365 Signature sudadera con capucha',
//     price: '$ 175 USD',
//   },
// ];