import {ReactComponent as Logo} from "../img/i-appicon.svg";
import styles from "./Download.module.css";

function Download() {
    return (
        <div className = {styles.down}>
            <Logo style = {{
                width : "70px",
                height : "60px",
                float : "left",
                marginLeft : "10px",
                marginTop : "10px",
            }}/>
            <p>쏘카 앱 다운로드 ↓</p>
        </div>
  );
};
export default Download;