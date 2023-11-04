import { YMaps, Map, Placemark, RouteEditor,GeoObject } from '@pbe/react-yandex-maps';

const Home = () => {
  return (
    <div>
      <YMaps>
      <Map
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 9,
          controls: [],
        }}
      >
        <Placemark geometry={[55.751574, 37.573856]}/>
        <Placemark geometry={[55.684758, 37.738521]}/>
        <RouteEditor />
        <GeoObject
        geometry={{
        type: "Point",
        coordinates: [
          [55.751574, 37.573856],
          [55.684758, 37.738521],
        ],
      }}
      options={{
        geodesic: true,
        strokeWidth: 5,
        strokeColor: "#F008",
      }}
    />
      </Map>  
      </YMaps>
    </div>
  );
};

export default Home;