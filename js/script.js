const createVehicle = function (type, numWheels, color) {
  const vehicle = {};
  vehicle.type = type;
  vehicle.numWheels = numWheels;
  vehicle.color = color;

  return vehicle;
};

const car = createVehicle("car", 4, "baby blue");
const bike = createVehicle("bike", 2, "lavender");
const skateboard = createVehicle("skateboard", "2", "pink");

const myVehicles = [car, bike, skateboard];

for (let vehicle of myVehicles) {
  console.log(vehicle);
}
