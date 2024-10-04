import React, { useState, useEffect } from 'react';

const Maps = () => {
  const [widgetUrl, setWidgetUrl] = useState('https://ria.ru/20220622/spetsoperatsiya-1795199102.html');

  useEffect(() => {
    const iframe = document.getElementById('widget-iframe');
    iframe.src = widgetUrl;
  }, [widgetUrl]);

  return (
    <div>
      <iframe id="widget-iframe" src={widgetUrl}
        frameborder="0"
        width="100%"
        height="700"
        title='Maps'
      />
    </div>
  );
};

export default Maps;
