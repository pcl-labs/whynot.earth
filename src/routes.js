const Home = () => import ('./components/Home.vue')
const Career = () => import ('./components/Career.vue')


export default[
  {
    path:'/',
    component: Home
  },
  {
    path:'/career',
    component: Career
  },
  {
    path: '/*/',
    redirect: '/'
  },
]

