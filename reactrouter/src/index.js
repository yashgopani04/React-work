import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contect from './Components/Contect/Contect';
import User from './Components/Users/User';
import Capital , {userwithLoader} from './Components/Countries/Capital';


// const router = createBrowserRouter([

//   {
//     path : '/',
//     element : <Root/>,
//     children : [

//       {

//         path : '',
//         element : <Home/>

//       },
//       {
      
//         path : 'about',
//         element : <About/>

//       },
//       {

//         path : 'contectus',
//         element : <Contect/>

//       }

//     ]

//   }



// ])

const router = createBrowserRouter(

  createRoutesFromElements(

  <Route path='/' element={<Root/>}>

    <Route path='' element= {<Home/>} />
    <Route path='about' element= {<About/>} />
    <Route path='contectus' element= {<Contect/>} />
    <Route path='user/:userid' element= {<User />} />
    <Route loader={userwithLoader} path='capitals' element= {<Capital/>} />

  </Route>

  )

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
