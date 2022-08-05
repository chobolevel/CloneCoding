import {ReactComponent as Insta} from "../img/i-instagram.svg";
import {ReactComponent as Fbook} from "../img/i-facebook.svg";
import {ReactComponent as Blog} from "../img/i-blog.svg";
import {ReactComponent as Ytube} from "../img/i-youtube.svg";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <ul className = {styles.sns}>
                <li><a href = "#"><Insta /></a></li>
                <li><a href = "#"><Fbook /></a></li>
                <li><a href = "#"><Blog /></a></li>
                <li><a href = "#"><Ytube /></a></li>
            </ul>
            <ul className = {styles.navi}>
                <li><a href = "#">회사소개</a></li>
                <li><a href = "#">인재채용</a></li>
                <li><a href = "#">나눔카</a></li>
                <li><a href = "#">이용약관</a></li>
                <li><a href = "#">개인정보처리방침</a></li>
                <li><a href = "#">위치정보 이용약관</a></li>
                <li><a href = "#">차량손해면책제도</a></li>
                <li><a href = "#">고객센터</a></li>
                <li><a href = "#">제휴 문의</a></li>
            </ul>
            <div className = {styles.con}>
                <p>주소. 제주특별자치도 제주시 연미길 42(오라삼동)</p>
                <p>전화. 1661-3315</p>
                <p>팩스. 02-6969-9333</p>
            </div>
            <div className = {styles.company}>
                <p>(주)쏘카 통신판매업 <a href = "#">사업자정보 확인</a></p>
                <p>신고 : 제 2019-제주오라-3호, 사업자등록번호 : 616-81-90529, 대표자 : 박재욱</p>
                <p>&copy; SOCAR All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;