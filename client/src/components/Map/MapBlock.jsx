import { load } from "@2gis/mapgl";
import { useContext, useEffect } from "react";
import MapWrapper from "./MapWrapper";
import { MapContext } from "./MapProvider";
import { Directions } from "@2gis/mapgl-directions";

const MapBlock = () => {
  const [_, setMapInstance] = useContext(MapContext);

  useEffect(() => {
    let map;

    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [55.31878, 25.23584],
        zoom: 13,
        // key: "52",
      });

      const directions = new Directions(map, {
        // directionsApiKey: '52',
      });

      directions.carRoute({
        points: [
          [55.27887, 25.21001],
          [55.30771, 25.20314],
        ],
      });

      setMapInstance(map);
    });

    // Удаляем карту при размонтировании компонента
    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, [setMapInstance]);

  return (
    <div id="map-container" style={{ width: "100%", height: "100%" }}>
      <MapWrapper />
    </div>
  );
};

export default MapBlock;
