const Home = () => import ('./components/Home.vue')


export default[
  {
    path:'/',
    component: Home
  },
  {
    path: '/*/',
    redirect: '/'
  },
]

