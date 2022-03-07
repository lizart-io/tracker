import Leads from "../apps/Leads"
import Add from "../apps/leads/Add"
import Dashboard from "../apps/leads/Dashboard"

const add = (path, component) => {
    return {
        path: path,
        component: component
    }
}

const router = [
    add('/', <Leads />),
    add('/leads/add', <Add />),
    add('/leads/dashboard', <Dashboard />)
    ,
    add('*', <>404</>)
]

export default router