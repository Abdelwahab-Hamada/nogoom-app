
import Layout from './redux/components/Layout';

import { Routes, Route } from 'react-router-dom';
import Home from './redux/components/Home';
import Login from './redux/components/Login';
import FollowedTags from './redux/components/FollowedTags';
import Persist from './redux/components/Persist';
import RequireAuth from './redux/components/RequireAuth';
import Tag from './redux/components/Tag';
import Header from './redux/components/layout/Header';
import Register from './redux/components/Register';



function App() {

  return (
    <div className=' font-mono flex flex-col h-screen mx-3 '>
      <Header />
      <div className='flex-1 flex justify-center overflow-hidden'>
        <div 
        className='overflow-hidden  p-2 w-full rounded sm:w-full md:w-8/12 lg:w-6/12'>
          <Routes>
            <Route path="nogoom-app/" element={<Layout />}>

              <Route path="" element={<Home />} />
              <Route path="login/" element={<Login />} />
              <Route path="register/" element={<Register />} />



              <Route element={<Persist />}>
                <Route path="tag/" element={<Tag />} />

                <Route element={<RequireAuth />}>
                  <Route path="followed/" element={<FollowedTags />} />
                </Route>
              </Route>

            </Route>
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;
