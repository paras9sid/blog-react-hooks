// import {Switch , Route} from 'react-router-dom';
//Swtich replaced by Routes -      {/* <Switch> --replace by Routes from react router dom v6 onwards*/} 
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

// import { Switch, Route } from "react-router-dom";
// to

// import { Routes ,Route } from 'react-router-dom';
// ------------------------------------------------

import {Routes , Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail';
import CreatePost from './CreatePost';

// import {Navbar,Home,PostDetail,CreatePost} from './index.js'; // webpack error index.js in new version

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        {/*  //element to use instead of componenet in latest version of react */}
        <Route path="/" element={<Home />} exact/>
        <Route path="/post/:postId" element={<PostDetail />} exact/>
        <Route path="/create-post" element={<CreatePost />}  exact/>
      </Routes>
    </div>
  );
}

export default App;
