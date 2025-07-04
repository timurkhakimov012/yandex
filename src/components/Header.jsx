import { useState } from 'react';

function Header({ menuExpanded, onMenuToggle }) {
  const [menuToggled, setMenuToggled] = useState(false);

  const handleMenuClick = () => {
    if (!menuToggled) setMenuToggled(true);
    onMenuToggle();
  };

  return (
    <header className="header">
      <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
      <button 
        className="header__menu" 
        aria-expanded={menuExpanded}
        onClick={handleMenuClick}
      >
        <span className="header__menu-text a11y-hidden">
          {menuExpanded ? "Закрыть меню" : "Открыть меню"}
        </span>
      </button>
      <ul className={`header__links${menuExpanded ? " header__links_opened" : ""}${menuToggled ? " header__links-toggled" : ""}`}>
        <li className="header__item">
          <a className="header__link header__link_current" href="/" aria-current="page">
            Сводка
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/devices">
            Устройства
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="/scripts">
            Сценарии
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header; 