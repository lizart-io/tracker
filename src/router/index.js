import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import router from '../config/router'

export default function GlobalRouter() {
    return (
        <Router>
            <Routes>
                {
                    router.map(({ path, component }, index) => (
                        <Route path={path} element={component} key={index} />
                    ))
                }
            </Routes>
        </Router>
    )
}
