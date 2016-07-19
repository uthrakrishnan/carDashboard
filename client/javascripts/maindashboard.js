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
  engineSpeed:0,
  gearPosition: 'park'
};

var sampleData 
var dataPoints
var currentPoint = 0;

d3.json('./sampleData.js', function(data){
  sampleData = data
  dataPoints = data.length

  var updateData = function(data){
    if (data[currentPoint]['name'] === 'odometer'){
      vehicleStatus.odometer = data[currentPoint]['value']
      odometer.innerHTML = vehicleStatus.odometer.toFixed(2)
    }
    if (data[currentPoint]['name'] === 'vehicle_speed'){
      vehicleStatus.vehicleSpeed = data[currentPoint]['value']/1.609
      gauges[0].updateGauge(vehicleStatus.vehicleSpeed);
    }
    if (data[currentPoint]['name'] === 'engine_speed'){
      vehicleStatus.engineSpeed = data[currentPoint]['value']
      stacker1.update(vehicleStatus.engineSpeed)
    }
    if (data[currentPoint]['name'] === 'fuel_level'){
      vehicleStatus.fuelLevel = data[currentPoint]['value']
      fuelLevel.update(vehicleStatus.fuelLevel)
    }
    if (data[currentPoint]['name'] === 'door_status'){
      vehicleStatus.doorStatus[data[currentPoint]['value']] = data[currentPoint]['event']
      if(vehicleStatus.doorStatus.driver){$('#doorstatus').attr('src','/images/dooropen.png')}
      else{$('#doorstatus').attr('src', '/images/doorclosed.png')}
    }
    if (data[currentPoint]['name'] === 'headlamp_status'){
      vehicleStatus.headlampStatus = data[currentPoint]['value']
      if (vehicleStatus.headlampStatus){$('#headlamp').attr('src', '/images/headlampyellow.png')}
      else {$('#headlamp').attr('src', '/images/headlamp.png')}
    }
    if (data[currentPoint]['name'] === 'fuel_consumed_since_restart'){
      vehicleStatus.fuelConsumed = data[currentPoint]['value']
    }
    if (data[currentPoint]['name'] === 'latitude'){
      vehicleStatus.route.latitude.push(data[currentPoint]['value'])
    }
    if (data[currentPoint]['name'] === 'longitude'){
      vehicleStatus.route.longitude.push(data[currentPoint]['value'])
    }
    if (data[currentPoint]['name'] === 'ignition_status'){
      vehicleStatus.ignitionStatus = data[currentPoint]['value']
    }
    if (data[currentPoint]['name'] === 'transmission_gear_position'){
      vehicleStatus.gearPosition = data[currentPoint]['value']
    }


    currentPoint++;
    // console.log('CURRENT_POINT', currentPoint);
    if (currentPoint === dataPoints){

      clearInterval(vehicleData)
      console.log('done')
    
    }
  }

  var vehicleData = setInterval(updateData.bind(this,sampleData), 1);
});




