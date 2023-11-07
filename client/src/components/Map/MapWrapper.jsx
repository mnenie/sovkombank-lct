import React, { useMemo } from 'react';

const MapWrapper = () => {
  const memoizedMap = useMemo(
    () => <div id="map-container" style={{ width: '100%', height: '100%' }}></div>,
    [] // Пустой массив зависимостей означает, что компонент будет мемоизирован один раз при монтировании
  );

  return memoizedMap;
};

export default MapWrapper;
