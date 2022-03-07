import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const location = useLocation()
    const { pathname } = location


    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand bg-dark text-light p-2" to="/"><i className="fab fa-superpowers text-primary"></i>SuperLead</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/leads/dashboard"><i className="fas fa-chart-bar"></i> Dashboard</Link>
                        </li>
                    </ul>
                    {
                        pathname == '/leads/add' ? <Link className="btn btn-outline-secondary" to='/leads/dashboard'><i class="fas fa-times-circle"></i> Cancel Adding Lead</Link>
                            : <Link className="btn btn-primary" to='/leads/add'><i className="fas fa-plus-circle"></i> New Lead</Link>

                    }
                </div>
            </div>
        </nav>

    </>
    )
}
