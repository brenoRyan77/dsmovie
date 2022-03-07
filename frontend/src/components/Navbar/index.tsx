import {ReactComponent as GithunIcon} from 'assents/img/github.svg';
import './style.css';
function Navbar(  ){
    
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/brenoRyan77" target="_blank">
                        <div className="dsmovie-contact-container">
                            <GithunIcon />
                            <p className="dsmovie-contact-link">/brenoRyan77</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;
