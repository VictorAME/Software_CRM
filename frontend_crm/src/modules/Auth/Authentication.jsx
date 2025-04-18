import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

async function Login_Post_Client(data) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Error: ' + response.statusText + response.status)
        }
    } catch (e) {
        console.error(e);
        throw e
    }
}

export default function Authentication() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const hanldleSubmit = async(e) => {
        e.preventDefault();

        const result = await Login_Post_Client(data);

        if(result && result.message === 'admin') {
            alert('Bienvenido Administrador')
        } 
        else if(result && result.message === 'client') {
            alert('Bienvenido Cliente');
        }
        else if(result && result.message === 'emprendedor') {
            alert('Bienvenido emprendedor')
        }
        else {
            console.error(e);
        }
    }

    return (
        <>
            <div>
                <header>
                    <h1>Bienvenido colega, inicia sesion</h1>
                </header>

                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div>
                <form onSubmit={hanldleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" required value={data.email} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" required value={data.password} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="button" value="Enter" className="btn btn-primary" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}