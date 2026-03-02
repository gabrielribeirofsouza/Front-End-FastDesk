import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

// imports rotas genéricas
import Login from './pages/login/Login.jsx'

//imports rotas de usuário
import HomeUser from './pages/user/Home.jsx'
import CreateCalled from './pages/user/CreateCalled.jsx'
import FeedBackCalled from './pages/user/FeedBackCalled.jsx'
import UserProfile from './pages/profile/userProfile/UserProfile.jsx'
import Chat from './pages/user/Chat.jsx'

//imports rotas de tecnico
import HomeTechnical from './pages/technical/HomeTechnical.jsx'
import CallQueue from './pages/technical/CallQueue.jsx'
import BkTechnical from './pages/technical/BkTechnical.jsx'
import CallClosing from './pages/technical/CallClosing.jsx'
import HomeAdmin from './pages/admin/HomeAdmin.jsx'
import UsersManagement from './pages/admin/UsersManagement.jsx'
import BkManagement from './pages/admin/BkManagement.jsx'
import TecnichalProfile from './pages/profile/tecnichalProfile/TecnichalProfile.jsx'
import AdminProfile from './pages/profile/adminProfile/AdminProfile.jsx'
import DetailsCalledTecnichal from './pages/detailsCalled/DetailsCalledTecnichal/DetailsCalledTecnichal.jsx'
import DetailsCalledUser from './pages/detailsCalled/detailsCalledUser/DetailsCalledUser.jsx'

const router = createBrowserRouter([
  // Rotas genéricas
{
  path:'/', 
  element: <Login /> 
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
{
  path: '/chat',
  element: <Chat />
},
{
  path: '/userProfile',
  element: <UserProfile />
},
{
  path: '/detailsCalledUser',
  element: <DetailsCalledUser />
},
// rotas de técnico 
{
  path: '/homeTechnical',
  element: <HomeTechnical />,
  children: [
    {
      path: 'callQueue',
      element: <CallQueue />
    },
    {
      path: 'bkTechnical',
      element: <BkTechnical />
    },
    {
      path: 'callClosing',
      element: <CallClosing />
    },
    {
      path: 'tecnichalProfile',
      element: <TecnichalProfile />
    },
    {
      path: 'detailsCalledTecnichal',
      element: <DetailsCalledTecnichal />
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
},
{
    path: '/adminProfile',
    element: <AdminProfile />
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
