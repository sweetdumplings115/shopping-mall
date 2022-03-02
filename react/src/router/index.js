import { Navigate } from "react-router-dom";
import React from "react";



const Login = React.lazy(() => import("../pages/user/login/index"));
const Shop = React.lazy(() => import("../pages/shop/index"));
const Reg = React.lazy(() => import("../pages/user/register/index"));
const NotFound =React.lazy(() => import("../pages/NotFound"));
const AccountManagement = React.lazy(() => import("../pages/user/account-management/index"));
const Carts = React.lazy(() => import("../pages/user/carts/index"));
const UploadGoods = React.lazy(() => import("../pages/user/upload-goods/index"));
const Goods = React.lazy(() => import("../pages/shop/goods/index"));
const Loading = React.lazy(() => import("../components/loading/index"));


const routes = [
    {
        path:'/shop',
        element:<Shop/>
    },
    {
        path:"/loading",
        element:<Loading/>
    },
    {
        path:"/shop/goods/:id",
        element:<Goods/>
    },
     {
        path:"/",
        element:<Shop/>
    },
    {
        path:"/user",
        element:<Login/>,
        // children:[
        //     {
        //         path:"/user/login",
        //         element:<Login/>
        //     },
        //     {
        //         path:"/user/reg",
        //         element:<Reg/>
        //     }
        // ]
    },
    {
        path:"/user/login",
        element:<Login/>
    },
    {
        path:"/user/reg",
        element:<Reg/>
    },
    {
        path:"/user/carts",
        element:<Carts/>
    },
    {
        path:"/user/account",
        element:<AccountManagement/>
    },
    {
        path:"/user/upload",
        element:<UploadGoods/>
    },
    { path: '*', element: <NotFound/> }
]

function MyNavigate(props){ 
    return(
        <Navigate to={props.to}/>
    )
}

export  default routes;