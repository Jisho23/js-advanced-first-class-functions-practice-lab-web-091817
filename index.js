// Code your solution in this file!

// const logDriverNames = function (drivers){
//   for (const driver in drivers){
//     debugger;
//     console.log(`${drivers[driver].name}`)
//   }
// }

const logDriverNames = function(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function(driver){
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers){
  const newArr = drivers.slice();
  return newArr.sort(function (driver1, driver2){
    return driver1.revenue - driver2.revenue;
  });
}

const driversByName = function(drivers){
  const sortedDrivers = drivers.slice();
  return sortedDrivers.sort(function (driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  });
}

const totalRevenue = function(drivers){

  return drivers.reduce(function (total, driver) {
    return total + driver.revenue;
  }, 0);
}

// const totalRevenue = function(drivers){
//
//   return drivers.reduce((total, driver) => total + driver.revenue), 0;
// }

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length;
}
