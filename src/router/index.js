import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SeleccionSabores from '../components/SeleccionSabores.vue'
import SeleccionPotes from '../components/SeleccionPotes.vue'
import { useIceCream } from '@/store/useIceCream'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
    {   
        name: "initial", 
        path: "/", 
        component: HomeView
    },
    {   
        name: "seleccionpotes", 
        path: "/potes", 
        component: SeleccionPotes
    },
    {
        name: "sabores", 
        path: "/sabores", 
        component: SeleccionSabores,
        
        beforeEnter: (to, from, next) => {
            const icecream = useIceCream();

            if(icecream.amount === 0) {
                return next("/potes");
            }

            next();

        //console.log("from beforeEnter", icecream.amount);
        }
    },
    {
        path: "/:pathMatch(.*)", 
        component: PageNotFound 
    }

];

const router = createRouter({
    routes: routes,
    history: createWebHistory()
}); 

export default router