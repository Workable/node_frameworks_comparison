const { setTimeout } = require('timers/promises');
const persons = [{name: "Chuck Norris", email: "chuck@noris.com", id:1}];

module.exports = {
  async find(id) {
    await setTimeout(100);
    return persons.find(p => p.id == id);
  },

  async add(person) {
    if (!person.id) person.id = Math.ceil(Math.random() * 1000000);
    await setTimeout(100);
    persons.push(person);
    return person;
  },

  async update(person) {
    await setTimeout(100);
    const saved = persons.find(p => p.id == person.id);
    if (!saved) return;
    Object.assign(saved, person);
    return saved;
  },

  async list() {
    await setTimeout(100);
    return persons;
  }
};
