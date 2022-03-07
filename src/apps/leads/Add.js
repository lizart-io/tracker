import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createLead } from '../../api'
import Navbar from '../../components/Navbar'

export default function Add() {
    const navigate  = useNavigate()
    const [lead, setLead] = useState({
        loading: false,
        error: null,
        comments: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        city: '',
        state: 'MA',
        zipCode: ''
    })

    const onChange = (e) => {
        console.log({
            id: e.target.id,
            value: e.target.value
        })
        setLead({ ...lead, [e.target.id]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLead({ ...lead, loading: true })
        const data = lead
        delete data.loading
        delete data.error
        const response = await createLead(data)
        if (response === 200) {
            toast.success('New Lead has been saved!')
            navigate('/leads/dashboard')
        } else {
            toast.error(`Could not complete this action. Error: ${response}`)
        }

        setLead({ ...lead, loading: false })

    }
    return (
        <>
            <Navbar />
            <div className='container py-1 bg my-3 pb-3 bg-light shadow-lg'>
                <form className="row g-3 needs-validation px-3" id='add' noValidate onSubmit={onSubmit}>
                    <div className="col-md-4">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" id="firstName" onChange={onChange} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="lastName" onChange={onChange} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">+1</span>
                            <input type="text" className="form-control" id="phone" aria-describedby="inputGroupPrepend" onChange={onChange} required />
                            <div className="invalid-feedback">
                                Please choose a phone.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} />
                        <div id="emailHelp" className="form-text">Super important, make sure to double check spelling.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" onChange={onChange} required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <select className="form-select" id="state" onChange={onChange} required>
                            <option defaultValue disabled value="">Choose...</option>
                            <option value={'MA'} >MA</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="zipCode" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="zipCode" onChange={onChange} required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="comments" style={{ height: "100px" }} onChange={onChange}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>

                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit" disabled={lead.loading}>

                            {
                                lead.loading ? <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    &nbsp;Loading...</> : 'Save Lead'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

