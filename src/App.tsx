import Avatar from "./assets/img/image-jeremy.png";
import Data from "../data.json";
import Ellipsis from "./assets/img/icon-ellipsis.svg";
import Work from "./assets/img/icon-work.svg";
import Play from "./assets/img/icon-play.svg";
import Study from "./assets/img/icon-study.svg";
import Exercise from "./assets/img/icon-exercise.svg";
import Social from "./assets/img/icon-social.svg";
import Self_Care from "./assets/img/icon-self-care.svg";
import { useState } from "react";

function App() {
  const [dailyButton, setDailyButton] = useState(false);
  const [weeklyButton, setWeeklyButton] = useState(true);
  const [monthlyButton, setMonthlyButton] = useState(false);

  const images = [Work, Play, Study, Exercise, Social, Self_Care];
  const colors = [
    "var(--orange)",
    "var(--blue)",
    "var(--red)",
    "var(--lime)",
    "var(--violet)",
    "var(--yellow)",
  ];

  const chargeDaily = ( ) => {
    !dailyButton ? setDailyButton(true) : null;
    setMonthlyButton(false);
    setWeeklyButton(false);
  }

  const chargeWeekly = ( ) => {
    !weeklyButton ? setWeeklyButton(true) : null;
    setDailyButton(false);
    setMonthlyButton(false);
  }

  const chargeMonthly = ( ) => {
   !monthlyButton ? setMonthlyButton(true) : null;
    setDailyButton(false);
    setWeeklyButton(false);
  }

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
            <button onClick={chargeDaily} className={dailyButton ? 'active' : ''}>Daily</button>
            <button onClick={chargeWeekly} className={weeklyButton ? 'active' : ''}>Weekly</button>
            <button onClick={chargeMonthly} className={monthlyButton ? 'active' : ''}>Monthly</button>
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
                      {dailyButton ? data.timeframes.daily.current :
                      (monthlyButton ? data.timeframes.monthly.current :
                      weeklyButton ? data.timeframes.weekly.current : '00')}
                      {dailyButton ? (data.timeframes.daily.current === 1 ? 'hr' : 'hrs') : null}
                      {monthlyButton ? (data.timeframes.monthly.current === 1 ? 'hr' : 'hrs') : null}
                      {weeklyButton ? (data.timeframes.weekly.current === 1 ? 'hr' : 'hrs') : null}
                    </p>
                  </div>
                  <div className="container__data__block__right">
                    <img src={Ellipsis} alt="" />
                    <p>{dailyButton ? "Yesterday " :
                    (monthlyButton ? "Last month " : "Last week ")}
                    - {dailyButton ? data.timeframes.daily.previous :
                      (monthlyButton ? data.timeframes.monthly.previous :
                      weeklyButton ? data.timeframes.weekly.previous : '00')}
                      {dailyButton ? (data.timeframes.daily.previous === 1 ? 'hr' : 'hrs') : null}
                      {monthlyButton ? (data.timeframes.monthly.previous === 1 ? 'hr' : 'hrs') : null}
                      {weeklyButton ? (data.timeframes.weekly.previous === 1 ? 'hr' : 'hrs') : null}
                      </p>
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
