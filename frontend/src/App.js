import * as React from 'react';
import Map from 'react-map-gl'
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
      <div>
        <ReactMapGL 
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={nextViewport => setViewport(nextViewport)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
      </div>
  );
}

export default App;
