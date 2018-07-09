import React, { Component } from 'react';



class Input extends Component {

    render() {
        console.log('Props: ', this.props);
        return (
            <div>
                <h2>I am the Form</h2>
                <form action="">
                    <div>
                        <label htmlFor="">Username: </label>
                        <input type="text" onChange = {this.props.handleChange} name = "username"/>
                    </div>

                    <button>Submit Data</button>
                </form>
            </div>
        )
    }
}
export default Input;