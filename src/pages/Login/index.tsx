import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async() =>{
        if(email && password){
            const isLogged = await auth.signin(email, password)          
            
            if (isLogged) {
                navigate('/')              
            } else {
                alert('Não deu certo!!!!!')
            }
        }
    }


    return (
        <div>
            <h2>Página Fechada</h2>
            <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email."
            />
            <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)} 
                placeholder="Digite seu password." 
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}