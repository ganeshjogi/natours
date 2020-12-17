export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2FuZXNoam9naSIsImEiOiJja2ltcHZsMHUwaGF6MnBwMzBnd25kdTUzIn0.LQ8jDQDsYiIO2T6B6bgbzg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ganeshjogi/ckimrbyud1j5u17lnhwjjezz6',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, right: 100, left: 100 }
  });
};
