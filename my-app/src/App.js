import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"
import Articles ,{articleLoader} from "./pages/Artilcles"
import Home from "./layout/Home"
import Gallery from "./pages/Gallery"
import Features from "./pages/Features"
import OtherLinks from "./pages/Other"
import Skils, { skilsLoader } from "./pages/Skils"
///provider function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home></Home>}>
      <Route path="/article" element={<Articles />} loader ={articleLoader}  />
      <Route path="/skils" element={<Skils />} loader={skilsLoader} />
      <Route path="/galerry" element={<Gallery />} />
      <Route path="/features" element={<Features />} />
      <Route path="/other" element={<OtherLinks />} />
    </Route>
  )
)

//main
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
