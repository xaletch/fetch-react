import { RouterProvider } from "react-router"
import { router } from './router/index'

export { Login } from '../pages'

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
