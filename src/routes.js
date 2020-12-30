import compHome from './components/Home'

import compCustomer from './components/Customer/Customer'
import compCustomerDetail from './components/Customer/CustomerDetail'
import compCustomerEdit from './components/Customer/CustomerEdit'
import compCustomerStart from './components/Customer/CustomerStart'
export const routes = [
    {
        path:'*',
        component: compHome

    },
    {
        path: '',
        component: compHome
    },

    {
        path: '/customer',
        component: compCustomer,
        children: [
            {
                path: '',
                component: compCustomerStart
            },
            {
                path: ':id',
                component: compCustomerDetail
            },
            {
                path: ':id/edit',
                component: compCustomerEdit
            },
        ]
    },

]