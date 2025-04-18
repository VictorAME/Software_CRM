import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

async function Client_Post_Api(data) {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            throw new Error('Error: ' + response.statusText + response.status);
        }

        return await response.json();
    } catch (e) {
        console.error(e)
        throw e
    }
}

function SignUp() {
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        country: '',
        languaje: '',
        company_size: '',
        main_interest: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    const hanldeSubmit = async(e) => {
        e.preventDefault();
        const result = await Client_Post_Api(data);

        if(result && result.message === 'Client created successfully') {
            alert('Bienvenido colega, ya eres uno de nosotros');
            Navigate('/');
        } else {
            console.error('Mal :(... no se pudo registrar')
        }
    }

    return(
        <>
            <div>
                <header>
                    <h1>Sign up</h1>
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

            <div className="div-body-home">
                <form onSubmit={hanldeSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="lastanme">Last name</label>
                                    <input type="text" name="lastname" id="lastname" value={data.lastname} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="number" name="phone" id="phone" value={data.phone} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cuntry">Country</label>
                                    <input type="text" name="country" id="country" value={data.country} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="languaje">Languaje</label>
                                    <input type="text" name="languaje" id="languaje" value={data.languaje} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="company">Company size</label>
                                    <input type="text" name="company" id="company" value={data.company_size} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="main">Main interest</label>
                                    <input type="text" name="main" id="main" value={data.main_interest} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" value={data.password} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="submit" value="Enter" className="btn btn-primary" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default SignUp;