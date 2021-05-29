export const age = (planet, seconds) => {
  let earthYear = 31557600;

  let planetArray = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  let planetAge = 0;

  for (let planetItem in planetArray){
    if(planet===planetItem){
      planetAge = seconds/planetArray[planetItem]
    }
  }
  return +(planetAge/earthYear).toFixed(2);
};