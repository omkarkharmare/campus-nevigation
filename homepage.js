




function showMap(type) {
    const mapContainer = document.getElementById('map-container');
    mapContainer.innerHTML = ''; // Clear previous map

    if (type === 'paper') {
      // Display a static image of the paper map here
      mapContainer.innerHTML = '<img src="images/isb-pune-campus-map.png" alt="ISB Pune Campus Paper Map">';
    } else if (type === 'satellite') {
      // Embed a satellite image using an image hosting service or API
      mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/@18.5504715,73.8570688,15z?satellite=true&output=embed" frameborder="0" allowfullscreen></iframe>';
    } else if (type === 'google') {
      // Embed a Google Map with the ISB Pune campus location
      mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/@18.5504715,73.8570688,15z?hl=en&t=&z=15&ie=UTF8&ll=18.5504715,73.8570688&spn=0.007812,0.013797&output=embed" frameborder="0" allowfullscreen></iframe>';
    } else if (type === 'video') {
      // Include a video tour of the ISB Pune campus here
      mapContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allowfullscreen></iframe>';
    }
  }

