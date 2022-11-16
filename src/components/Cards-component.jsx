import React from 'react';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/joy/Card';
import itemData from './cards-data';




function CardsComponent({img, text,color, colors, price}) {
    return (

            <div>
            <ImageList cols={3} rowHeight={200} sx={{}}>
        {itemData.map((item) => (
        <Card key={item.img} sx={{margin: 0, p: 1, pb: 9.7}}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            sx={{width: 384, height: 618}}
          />
          <div>
            <p className='font-light text-base text-neutral-900 pt-2 pr-[290px] pb-4' >{item.color}</p>         
            <img src={item.colors} alt={item.color}  className='pb-3' />
            <div className="flex flex-row gap-9">
            <p className="font-inter text-neutral-900" >{item.text}</p>
            <span className="text-neutral-900 font-extrabold">{item.price}</span>
          </div>
          </div>
        </Card>
        
      ))}
    </ImageList> 
    </div>
)}


export default CardsComponent;