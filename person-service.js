const { setTimeout } = require('timers/promises');
const persons = [];

module.exports = {
  async find(id) {
    await setTimeout(100);
    persons.find(p => p.id === id);
  },

  async add(person) {
    await setTimeout(100);
    persons.push(person);
  },

  async update(person) {
    await setTimeout(100);
    const saved = persons.find(p => p.id === person.id);
    Object.assign(saved, person);
  },

  async list() {
    await setTimeout(100);
    return persons;
  }
};
