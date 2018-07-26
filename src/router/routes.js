import About from '@/pages/about'
import Contacts from '@/pages/contacts'
import Home from '@/pages/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  { // Always leave this as last one
    path: '*',
    name: '404',
    component: () => import('@/pages/404')
  }
]
export default routes