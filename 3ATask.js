
function initMap() {

  const uluru = { lat: 43.23516106389402, lng:76.90965287921757 }; //43.23516106389402, 76.90965287921757

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}