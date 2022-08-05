import styles from "./Header.module.css";
import {ReactComponent as Logo} from "../img/logo-w.svg";
import {ReactComponent as Menu} from "../img/menu.svg";

function Header() {
    return (
        <header>
            <div className = {styles.left}>
                <a href = "#"><Logo /></a>
            </div>
            <div className = {styles.right}>
                <a href = "#"><Menu /></a>
            </div>
            <p>
                차가 필요한<br />
                모든 순간, 쏘카
            </p>
        </header>
    );
};
export default Header;