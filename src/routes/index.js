import Home from './../pages/Home';
import Following from './../pages/Following';
import Profile from './../pages/Profile';


const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/Profile', component: Profile },
];

const privateRoutes = [
    
];

export { publicRoutes, privateRoutes }
