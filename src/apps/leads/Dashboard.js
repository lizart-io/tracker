import React, { useEffect, useState } from 'react'
import { readLeads } from '../../api'
import Navbar from '../../components/Navbar'
import NoLeads from './NoLeads'

export default function Dashboard() {
    const [leads, setLeads] = useState([])

    const loadLeads = async () => {
        const leads = await readLeads()
        setLeads(leads)
    }

    useEffect(() => {
        loadLeads()
    }, [])

    return (<>
        <Navbar />
        <div className='row'>
            {
                leads.length >= 1 ? <code>You have {leads.length} leads</code> : <NoLeads />
            }
        </div>
    </>)
}
