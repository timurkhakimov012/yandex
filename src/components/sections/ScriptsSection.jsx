function ScriptsSection() {
  return (
    <section className="section main__scripts">
      <h2 className="section__title section__title-header">Избранные сценарии</h2>
      <ul className="event-grid">
        <li className="event event_slim">
          <button className="event__button">
            <span className="event__icon event__icon_light2" role="img" aria-label="Освещение"></span>
            <h4 className="event__title">Выключить весь свет в доме и во дворе</h4>
          </button>
        </li>
        <li className="event event_slim">
          <button className="event__button">
            <span className="event__icon event__icon_schedule" role="img" aria-label="Расписание"></span>
            <h4 className="event__title">Я ухожу</h4>
          </button>
        </li>
        <li className="event event_slim">
          <button className="event__button">
            <span className="event__icon event__icon_light2" role="img" aria-label="Освещение"></span>
            <h4 className="event__title">Включить свет в коридоре</h4>
          </button>
        </li>
        <li className="event event_slim">
          <button className="event__button">
            <span className="event__icon event__icon_temp2" role="img" aria-label="Температура"></span>
            <h4 className="event__title">Набрать горячую ванну</h4>
            <span className="event__subtitle">Начнётся в 18:00</span>
          </button>
        </li>
        <li className="event event_slim">
          <button className="event__button">
            <span className="event__icon event__icon_temp2" role="img" aria-label="Температура"></span>
            <h4 className="event__title">Сделать пол тёплым во всей квартире</h4>
          </button>
        </li>
      </ul>
    </section>
  );
}

export default ScriptsSection; 