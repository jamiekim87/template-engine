// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee.js')

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email, github)
  }
  getGithub () {
    return this.gitHub
  }
  getRole () {
    return 'engineer'
  }
}

module.exports = Engineer