import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Articles from "./pages/Articles/Articles";
import Favorites from "./pages/Favorites/Favorites";
import NoMatch from "./pages/NoMatch/NoMatch";
import Summary from "./pages/Summary/Summary";
import Form from './components/Form/Form';
import Input from './components/Form/Input';

const HandleChangeComponent = (WrapComponent) => {

  return class extends React.Component {
    handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      const obj = {
        [name]: value
      };
      console.log(obj)
    };
    
    render() {
      return <WrapComponent handleChange={this.handleChange} />
    }
  }
}


const InputComponent = HandleChangeComponent(Input);
const FormComponent = HandleChangeComponent(Form);


// Functional Component
const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/form" component={FormComponent} />
        <Route exact path="/input" component={InputComponent} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/favorites" component={Favorites} />
        <Route exact path="/articles/:id" component={Summary} />
        <Route component={NoMatch} />
        <h1>Hello World</h1>
      </Switch>
    </div>
  </Router>
);



// // 4 different type of components

// // Class Componentn
// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       username: 'accimeesterlin',
//       age: 5,
//       address: {
//         street: '',
//         code: ''
//       }
//     };
//   }
//   gradData = () => {

//   };
//   // TODO


//   render() {

//     return(
//       <div>
//         <h2> {this.state.username}</h2>

//         <p>{this.state.age}</p>
//       </div>
//     );
//   }
// }


// // Class vs Functional
// // Functional Component
// const Header = () => {
//   // TODO

//   // NO API
//   // NO State
//   // No Functions

//   // JSX
//   return();
// };


// // Side effects
// // Doesn't mutate data



// // Higher Order Component (Advanced)
// const MainApp = () => {
//   return class Main extends React.Component {
//     // TODO
//   }
// }





// // Pure Component
// class App extends React.PureComponent {

//   shouldComponentUpdate = () => {
//     // TODO
//   }
// }









export default App;
