import React from 'react';
import './Product.css';

const Display = (props) => {
    // console.log(props)

    const renderProduct = props.prodData.map((item) => {
        return (
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                    <h3>{item.name} by {item.brand}</h3>
                    <p>{item.description} {item.uses}</p>
                    <p>Rs.{item.cost} {item.discount}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="main">
            {renderProduct}
        </div>
    )
}


export default Display