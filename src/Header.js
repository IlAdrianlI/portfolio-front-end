import './Header.css';
import Menu from "./images/menu.svg";

function Header() {
  return (

    <header>
        <div className="nav-bar">
            
            <header className='logo'>
                <h1>Logo</h1>
            </header>

            <div className='nav-list'>
                <ul>
                    <li className='nav-item'><a className='nav-link' href='#'>Inicío</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Sobre mim</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Projetos</a></li>
                    <li className='nav-item'><a className='nav-link' href='#'>Habilidades</a></li>
                </ul>
            </div>{/*nav-list*/}

            <div className='menu-mobile-icon'>
                <button><img className='icon' src={Menu} id='menu'/></button>
            </div>

        </div>{/*nav-bar*/}

        <div className='menu-mobile'>
            <ul>
                <li className='nav-item'><a className='nav-link' href='#'>Inicío</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Sobre mim</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Projetos</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Habilidades</a></li>
            </ul>
        </div>

    </header>
  );

}

export default Header;

