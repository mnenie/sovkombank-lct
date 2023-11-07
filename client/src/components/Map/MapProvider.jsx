import React, { createContext, useState } from 'react';

const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [mapInstance, setMapInstance] = useState();

  return (
    <MapContext.Provider value={[mapInstance, setMapInstance]}>
      {children}
    </MapContext.Provider>
  );
};

export { MapContext, MapProvider };
