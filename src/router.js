import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage'
import StepZero from '@/pages/StepZero'
import StepOne from '@/pages/StepOne'
import StepTwoOne from '@/pages/StepTwoOne'
import StepTwoTwo from '@/pages/StepTwoTwo'
import StepTwoThree from '@/pages/StepTwoThree'
import StepTwoFour from '@/pages/StepTwoFour'
import StepThree from '@/pages/StepThree'
import StepFourOne from '@/pages/StepFourOne'
import StepFourTwo from '@/pages/StepFourTwo'

Vue.use(VueRouter)

const routes = [
    {
        name: 'main',
        component: MainPage,
        path: '/'
    },
    {
        name: 'stepZero',
        component: StepZero,
        path: '/step/0'
    },
    {
        name: 'stepOne',
        component: StepOne,
        path: '/step/1'
    },
    {
        name: 'stepTwoOne',
        component: StepTwoOne,
        path: '/step/2/1'
    },
    {
        name: 'stepTwoTwo',
        component: StepTwoTwo,
        path: '/step/2/2'
    },
    {
        name: 'stepTwoThree',
        component: StepTwoThree,
        path: '/step/2/3'
    },
    {
        name: 'stepTwoFour',
        component: StepTwoFour,
        path: '/step/2/4'
    },
    {
        name: 'stepThree',
        component: StepThree,
        path: '/step/3'
    },
    {
        name: 'stepFourOne',
        component: StepFourOne,
        path: '/step/4/1'
    },
    {
        name: 'stepFourTwo',
        component: StepFourTwo,
        path: '/step/4/2'
    },
]

const router = new VueRouter({
    routes
})

export default router