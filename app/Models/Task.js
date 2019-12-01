'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  // Tarefa pertence a um Projeto
  project() {
    return this.belongsTo('App/Models/Project')
  }

  // Tarefa pertence a um Usuário
  user() {
    return this.belongsTo('App/Models/User')
  }

  // Tarefa possui um arquivo
  file() {
    return this.hasOne('App/Models/File')
  }
}

module.exports = Task
