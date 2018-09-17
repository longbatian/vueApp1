import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'City',
      component: City,
      // meta:{
      //   title:'this is city',
      //   description:'asdas'
      // },
      // children:[
      //   {
      //     path:'test',
      //     component:Home
      //   }
      // ]
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      // children:[
      //   {
      //     path:'test',
      //     component:Home
      //   }
      // ]
    }
  ],
  scrollBehavior(to,from,savedPositon){
    // return {x:0,y:0}
    if(savedPositon){
      return savedPositon
    }else{
      return {x:0,y:0}
    }
  },
  mode:'history',
  // parseQuery(query){

  // },
  // stringfyQuery(obj){

  // }
  fallback:true//history变成hashhistory

})
