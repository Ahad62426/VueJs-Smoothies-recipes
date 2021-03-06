import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/add-smoothie',
            name: 'AddSmoothie',
            component: AddSmoothie
        },
        {
            path: '/edit-smoothie/:slug',
            name: 'EditSmoothie',
            component: EditSmoothie
        }
    ]
})