const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => [destinationOne, destinationTwo, ...moreDestinations]

const myDestinations = planVacation("Japan", "Vietnam", "China")

console.log(myDestinations)
  