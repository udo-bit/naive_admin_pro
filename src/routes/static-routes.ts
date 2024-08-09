import {RouteRecordRaw} from "vue-router";
import {Layout} from "../layouts";

const staticRoutes:RouteRecordRaw[]=[
    {
        path:'/',
        name:'index',
        component:Layout,
        redirect:'/home',
        children:[
            {
                path:'/home',
                component:()=>import("../pages/index.vue"),
                meta:{
                    title:'Home',
                }
            },
            {
                path:'workspace',
                component:()=>import("../pages/workspace/index.vue"),
                name:'workspace',
                meta:{
                    title:'工作台'
                }
            }
        ]


    },
]
export default staticRoutes
