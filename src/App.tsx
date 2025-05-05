import { RouterProvider } from "react-router-dom"

import routers from "./serverAPI/routers.ts";
function App() {
  return(
    <>
    <RouterProvider router={routers}/>
    </>
  )
}

export default App
