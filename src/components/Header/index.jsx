import { AiOutlineHome, AiOutlineCloseCircle, AiFillDelete, AiOutlineOrderedList, AiFillEdit, AiOutlineMenuUnfold} from 'react-icons/ai';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export function Header (){
    const user = localStorage.getItem('username');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    function Logout(){
        localStorage.clear()
        window.location.reload()
    }

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    
    return (

    <header className="header_container">
        <div className="header_content">
                <span>Bem Vindo {user}</span>
                <button className="menu" onClick={toggleMenu}> <AiOutlineMenuUnfold/> </button>
        </div>
        <div className="menu_container">
            <div className={`fullscreen_menu ${menuOpen ? 'open' : ''}`}>
                <img className="logo" src="./20230530_647621f885b05.png" alt="" />
                <button className="close_button" onClick={toggleMenu}><AiOutlineCloseCircle/></button>
                <ul className='ul_menu'>
                    <li className='li_menu title3 body'><Link to="/" ><AiOutlineHome/>Cadastrar Produto</Link></li>
                    <li className='li_menu title3 body'><Link to="/products" ><AiOutlineOrderedList/>Produtos</Link></li>
                    <li className='li_menu title3 body'><Link to="/delete"   ><AiFillEdit/>Editar Produto</Link></li>
                    <button className='logout' onClick={Logout}>Logout</button>
                </ul>
            </div>
        </div>
    </header>
    )
}