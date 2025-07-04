import { useState, useRef, useEffect } from 'react';
import { TABS, TABS_KEYS } from '../../data/tabs';

function DevicesSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [showArrow, setShowArrow] = useState(false);
  const panelWrapperRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabFromUrl = params.get('tab');
    if (tabFromUrl && TABS_KEYS.includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    }
  }, []);

  useEffect(() => {
    const activePanel = document.querySelector(`#panel_${activeTab}`);
    if (activePanel && panelWrapperRef.current) {
      const items = Array.from(activePanel.querySelectorAll('.event'));
      const itemsWidth = items.reduce((acc, item) => acc + item.offsetWidth, 0);
      setShowArrow(itemsWidth > panelWrapperRef.current.offsetWidth);
    }
  }, [activeTab]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  const handleScroll = () => {
    const activePanel = panelWrapperRef.current.querySelector(
      '.section__panel:not(.section__panel_hidden)'
    );
    if (activePanel) {
      activePanel.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="section main__devices">
      <div className="section__title">
        <h2 className="section__title-header">Избранные устройства</h2>
        <select 
          className="section__select"
          value={activeTab}
          onChange={(e) => handleTabChange(e.target.value)}
        >
          {TABS_KEYS.map(key => (
            <option key={key} value={key}>{TABS[key].title}</option>
          ))}
        </select>
        <ul role="tablist" className="section__tabs">
          {TABS_KEYS.map(key => (
            <li
              key={key}
              role="tab"
              aria-selected={key === activeTab}
              className={`section__tab${key === activeTab ? ' section__tab_active' : ''}`}
              id={`tab_${key}`}
              aria-controls={`panel_${key}`}
              tabIndex={key === activeTab ? 0 : undefined}
              onClick={() => handleTabChange(key)}
            >
              {TABS[key].title}
            </li>
          ))}
        </ul>
      </div>
      <div className="section__panel-wrapper" ref={panelWrapperRef}>
        {TABS_KEYS.map(key => (
          <div
            key={key}
            role="tabpanel"
            id={`panel_${key}`}
            aria-labelledby={`tab_${key}`}
            aria-hidden={key !== activeTab}
            className={`section__panel${key !== activeTab ? ' section__panel_hidden' : ''}`}
          >
            <ul className="section__panel-list">
              {TABS[key].items.map((item, index) => (
                <li key={index} className={`event${item.slim ? ' event_slim' : ''}`}>
                  <button className="event__button">
                    <span 
                      className={`event__icon event__icon_${item.icon}`}
                      role="img"
                      aria-label={item.iconLabel}
                    />
                    <h4 className="event__title">{item.title}</h4>
                    {item.subtitle && (
                      <span className="event__subtitle">{item.subtitle}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {showArrow && (
          <div 
            className="section__arrow"
            onClick={handleScroll}
            style={{ display: showArrow ? 'block' : 'none' }}
          />
        )}
      </div>
    </section>
  );
}

export default DevicesSection; 