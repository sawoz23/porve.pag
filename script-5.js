function iniciarMap(){
    var coord = {lat: -31.366471261698376 ,lng: -64.13259833308845};
    var map = new google.maps.Map(document.getElementById('map'),{zoom: 10, center: coord});
    var marker = new google.maps.marker({position: coord, map: map});
}