// import {Switch , Route} from 'react-router-dom';
//Swtich replaced by Routes -      {/* <Switch> --replace by Routes from react router dom v6 onwards*/} 
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

// import { Switch, Route } from "react-router-dom";
// to

// import { Routes ,Route } from 'react-router-dom';
// ------------------------------------------------

import {Routes , Route} from 'react-router-dom';
import {Navbar,CreatePost,Home,PostDetail} from './';

function App() {
  return <div className="container">
      <Navbar />
      <Routes>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/post/:postId" component = {PostDetail} />  
          <Route exact path="/create-post" component = {CreatePost} />         
        </Routes>
    </div>;
  
}

export default App;
