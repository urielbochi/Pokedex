import React, { Component } from 'react';

export default class DataHandler extends Component {
    render(){
        const { pokeInformation } = this.props
        return(
            <div>
                {pokeInformation.map((item) => {
                    return(
                     <div>
                         <h3>{item.name}</h3>
                         <p>{item.type}</p>
                         <img src={item.image} /> 
                         <p>{item.averageWeight.value} {item.averageWeight.measurementUnit}</p>   
                     </div>
                    )

                })}
            </div>
        )

    }
}