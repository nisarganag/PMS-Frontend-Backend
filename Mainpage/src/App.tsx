import './App.css'
import Sidebar from './Components/Sidebar'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import My_profile from "./routes/My-profile"
import Advanced_search from './routes/Advances-search';
import Metrices from './routes/metrices';
import My_library from './routes/My-library';
import Settings from './routes/settings';
import Alerts from './routes/Alerts';
import Home from './routes/Homepage';
import Login from './routes/Login';


function App() {

  return (
    <>
    <div >
      <div>
        <Sidebar/>
      </div>

      <div className="routes">
        <Routes>
          <Route path="/My_profile" element = {<My_profile/>}/>
          <Route path="/Advanced_search" element = {<Advanced_search/>}/>
          <Route path="/Metrices" element = {<Metrices/>}/>
          <Route path="/My_library" element = {<My_library/>}/>
          <Route path="/Settings" element = {<Settings/>}/>
          <Route path="/Alerts" element = {<Alerts/>}/>
          <Route path="/Home" element = {<Home/>}/>
          <Route path="/Login" element = {<Login/>}/>
        </Routes>
      </div>
      
    </div>
      
      

    </>
  )
}
export default App


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element = {<App/>}>
//       <Route path="/My_profile" element = {<My_profile/>}/>
//       <Route path="/Advanced_search" element = {<Advanced_search/>}/>
//       <Route path="/Metrices" element = {<Metrices/>}/>
//       <Route path="/My_library" element = {<My_library/>}/>
//       <Route path="/Settings" element = {<Settings/>}/>
//       <Route path="/Alerts" element = {<Alerts/>}/>
//     </Route>
//   )
// )


// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );