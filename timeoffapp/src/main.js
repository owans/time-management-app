import React, { Component } from 'react';
// import Home from './home';
import SignUp from './signup.js';
import { BrowserRouter, Route } from 'react-router-dom';
class Main extends Component {
  render() {
    return (
    <div>
      <BrowserRouter>
        <div>
            {/* <Route exact path='/' component={Home}/> */}
            <Route path="/signup.js" component={SignUp}/>
            <Route />
        </div>
      </BrowserRouter>
      </div>
      
    );
  }
}

export default Main;

// class Main extends Component{
//     render(){
//     return (
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/signup">SignUp</Link>
//             </li>
//           </ul>
  
//           <hr />
  
//           <Route exact path="/" component={Home} />
//           <Route path="/signup" component={SignUp} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default Main;