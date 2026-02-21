import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

// imports rotas genéricas
import Login from './pages/login/Login.jsx'
import Profile from './pages/profile/Profile.jsx'
import DetailsCalled from './pages/detailsCalled/DetailsCalled.jsx'

//imports rotas de usuário
import HomeUser from './pages/user/Home.jsx'
import CreateCalled from './pages/user/CreateCalled.jsx'
import FeedBackCalled from './pages/user/FeedBackCalled.jsx'

//imports rotas de tecnico
import HomeTechnical from './pages/technical/HomeTechnical.jsx'
import CallQueue from './pages/technical/CallQueue.jsx'
import BkTechnical from './pages/technical/BkTechnical.jsx'
import CallClosing from './pages/technical/CallClosing.jsx'
import HomeAdmin from './pages/admin/HomeAdmin.jsx'
import UsersManagement from './pages/admin/UsersManagement.jsx'
import BkManagement from './pages/admin/BkManagement.jsx'

const router = createBrowserRouter([
  // Rotas genéricas
{
  path:'/', 
  element: <Login /> 
}, 
{
  path:'/profile',
  element: <Profile />
},
{
  path: '/detailsCalled',
  element: <DetailsCalled />
},
  //Rotas de usuário
{
  path:'/homeUser',
  element: <HomeUser />
},
{
  path: '/createCalled',
  element: <CreateCalled />
},
{
  path: '/feedBackCalled',
  element: <FeedBackCalled />
},
// rotas de técnico 
{
  path: '/homeTechnical',
  element: <HomeTechnical />,
  children: [
    {
      path: '/callQueue',
      element: <CallQueue />
    },
    {
      path: '/bkTechnical',
      element: <BkTechnical />
    },
    {
      path: '/callClosing',
      element: <CallClosing />
    }
  ]
},
// rotas de admin
{
  path: '/homeAdmin',
  element: <HomeAdmin />
},
{
  path: '/usersManagement',
  element: <UsersManagement />
},
{
  path: '/bkManagement',
  element: <BkManagement />
}

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
