import { MENU } from 'defines'
import { AboutPage, HomePage } from 'page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: MENU.HOME,
      element: <HomePage />
    },
    {
      path: MENU.ABOUT,
      element: <AboutPage />
    }
  ])
  return <RouterProvider router={router} />
}
