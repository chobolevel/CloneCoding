import img1 from "../img/usp_a.jpg";
import img2 from "../img/usp_b.jpg";
import img3 from "../img/usp_c.jpg";
import img4 from "../img/usp_d.jpg";
import styles from "./Section.module.css";

function Section() {
    return (
        <section>
            <article>
                <h1>24시간 언제나<b>.</b></h1>
                <p>
                    한밤중이나 주말에도 스마트폰으로<br />
                    시간에 구애받지 않고<br />
                    쏘카와 함께 이동하세요.
                </p>
                <img src = {img1} alt = "img1" />
            </article>
            <article>
                <h1>원하는 곳에서<b>.</b></h1>
                <p>
                    내 주변 3분 거리 쏘카존에서<br />
                    혹은 내가 멀리 있는 곳에서 쏘카를 불러<br />
                    어디서나 편하게 출발하세요.
                </p>
                <img src = {img2} alt = "img2" />
            </article>
            <article>
                <h1>필요한 시간만큼<b>.</b></h1>
                <p>
                    간단한 장보기부터 주말여행까지<br />
                    10분 단위로 원하는 만큼만 이용하세요.
                </p>
                <img src = {img3} alt = "img3" />
            </article>
            <article>
                <h1>다양한 차종을<b>.</b></h1>
                <p>
                    연인과의 드라이브부터 가족 캠핑까지<br />
                    상황에 맞게 50여 종의 차량을<br />
                    선택해서 이용하세요.
                </p>
                <img src = {img4} alt = "img4" />
            </article>
            <article>
                <p>
                    <em>8,044,184</em> 명의 회원이 쏘카와<br />
                    함께하고 있습니다.<br />
                    지금 바로 <em>쏘카 드라이브</em>를<br />
                    시작하세요.
                </p>
            </article>
        </section>
    );
};
export default Section;