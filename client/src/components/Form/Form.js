import React, { Component } from 'react';



class Form extends Component {


    render() {
        console.log('Props: ', this.props);

        return (
            <div>
                <h2>I am the Form</h2>
                <form action="">
                    <div>
                        <label htmlFor="">Username: </label>
                        <input type="text" onChange={this.props.handleChange} name="username" />
                    </div>

                    <div>
                        <label htmlFor="">Age</label>
                        <input type="number" onChange={this.props.handleChange} name="age" />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={this.props.handleChange} name="password" />
                    </div>

                    <button>Submit Data</button>
                </form>
            </div>
        )
    }
}
export default Form;