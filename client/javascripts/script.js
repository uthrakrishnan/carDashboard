var vehicleStatus = {
  fuelLevel: 0,
  route: {
    latitude: [],
    longitude: []
  },
  doorStatus: {
    driver: false,
    passenger: false,
    rear_right: false,
    rear_left: false,  
  },
  headlampStatus: false,
  highBeamStatus: false,
  ignitionStatus: 'off',
  vehicleSpeed: 0,
  odometer: 0,
  fuelConsumed: 0,
  engineSpeed: 0,
  gearPosition: 'park'
};
$(document).ready(function(){


  $('#map').addClass("hidden")

  $('#mp').on('click', function(){
    $('#map').removeClass('hidden')
  })

  $('#dash').on('click', function(){
    $('#map').addClass('hidden')
  })
  
})
