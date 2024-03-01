import logoSvg from "../../assets/SpaceX-Logo.svg"
import {useNavigate} from 'react-router-dom'
import NavTabs from "./NavTabs"

const Navbar = () =>{

    const navigate = useNavigate()

    return <div>
        <img style={{background: "white"}} src={logoSvg} onClick={() => navigate('/')}/>
        <NavTabs/>
    </div>
}
export default Navbar