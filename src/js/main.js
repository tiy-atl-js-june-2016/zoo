// let Zoo = function (location) {
//   this.animals = [];
//   this.location = location;
// }
// Zoo.prototype.addAnimal = function (animal) {
//   return this.animals.push(animal);
// }


class Zoo {

  constructor (options) {

    this.animals  = options.animals || [];
    this.staff    = options.staff || [];
    this.location = options.location || null;
  }

  addAnimal (animal) {
    return this.animals.push(animal);
  }

  addStaff (staff) {
    return this.staff.push(staff);
  }

  removeAnimal (animal) {
    this.animals = this.animals.filter ( function (a) {
      return a !== animal;
    });
    // Fat Arrow Function with single return statement
    // this.animals = this.animals.filter( a => a !== animal);
  }

}

let z = new Zoo({
  location: 'Chicago',
  animals: ['lion', 'zebra'],
  staff: ['Larry', 'Cate']
});

// console.log(z);

z.removeAnimal('zebra');

// console.log(z.animals);