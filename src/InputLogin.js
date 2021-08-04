import React, { Component } from 'react'

export default class InputLogin extends Component {
    render() {
        const {type, name, value} = this.props
        return(
            <div>
                <input
                type={type}
                name={name}
                value={value} />
            </div>
        )
    } 
}