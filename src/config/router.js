import Leads from "../apps/Leads"

const add = (path, component) => {
    return {
        path: path,
        component: component
    }
}

const router = [
    add('/', <Leads />),
    add('*', <>404</>)
]

export default router