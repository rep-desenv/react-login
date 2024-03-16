import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Private = () => {
    const auth = useContext(AuthContext)
    return (
        <div>
            <h2>Private - Privada</h2>
            <h1>Olá {auth.user?.name }</h1>
        </div>
    )
}
export default Private