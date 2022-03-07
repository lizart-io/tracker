import React from 'react'
import { Link } from 'react-router-dom'

export default function NoLeads() {
    return (
        <>
            <img src="https://i.imgur.com/uX1M1r7.png" className="rounded mx-auto d-block" alt="No Leads, uh." style={{
                maxHeight: '50vh',
                width: 'auto'
            }} />
            <p className='h2 text-muted text-center my-3'>You have no leads right now. <Link className='link text-decoration-none' to='/leads/add'>Add Lead</Link> </p>
        </>

    )
}
