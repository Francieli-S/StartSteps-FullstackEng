abstract class Employee {
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  abstract getEmployeeType(): void
}

class FullTimeEmployee extends Employee {
  constructor(name: string) {
    super(name)
  }

  getEmployeeType() {
    console.log('Full time employee');
  }
}

class Contractor extends Employee {
  constructor(name: string) {
    super(name)
  }

  getEmployeeType() {
    console.log('Contractor employee');
  }
}

// const employee = new Employee('Gato') // it is not possible because Employee is abstract
const newFulltimeEmployee = new FullTimeEmployee('Foxy')
newFulltimeEmployee.getEmployeeType()
