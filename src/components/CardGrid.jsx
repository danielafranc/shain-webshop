import React from 'react';
import CardItem from "./CardItem";

function CardGrid({value}) {
    return (
        <div>
            <CardItem/>
            <div>
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
            </div>
        </div>
    );
}

export default CardGrid;