import Avatar from "./assets/img/image-jeremy.png";
import Data from "../data.json";
import Ellipsis from "./assets/img/icon-ellipsis.svg";
import Work from "./assets/img/icon-work.svg";
import Play from "./assets/img/icon-play.svg";
import Study from "./assets/img/icon-study.svg";
import Exercise from "./assets/img/icon-exercise.svg";
import Social from "./assets/img/icon-social.svg";
import Self_Care from "./assets/img/icon-self-care.svg";

function App() {
  const images = [Work, Play, Study, Exercise, Social, Self_Care];
  const colors = [
    "var(--orange)",
    "var(--blue)",
    "var(--red)",
    "var(--lime)",
    "var(--violet)",
    "var(--yellow)",
  ];

  return (
    <>
      <main className="container">
        <header className="container__header">
          <div className="container__header__top">
            <div className="container__header__avatar">
              <img className="container__header__image" src={Avatar} alt="" />
            </div>
            <div className="container__header__info">
              <span>Report for</span>
              <p>Jeremy Robson</p>
            </div>
          </div>
          <div className="container__header__bottom">
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
          </div>
        </header>
        <section className="container__data">
          <div className="container__data__map">
            {Data.map((data, i) => (
              <div>
                <div
                  className="container__data__background"
                  key={i}
                  style={{
                    background: colors[i],
                    backgroundImage: "url(" + images[i] + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                  }}
                ></div>
                <div className="container__data__block">
                  <div className="container__data__block__left">
                    <p className="container__data__block__left__title">
                      {data.title}
                    </p>
                    <p className="container__data__block__left__hours">
                      {data.timeframes.weekly.current}hrs
                    </p>
                  </div>
                  <div className="container__data__block__right">
                    <img src={Ellipsis} alt="" />
                    <p>Last Week - {data.timeframes.weekly.previous}hrs</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
