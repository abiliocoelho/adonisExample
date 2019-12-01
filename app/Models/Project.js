'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  // Projeto pertence a um Usuário
  user() {
    return this.belongsTo('App/Models/User')
  }

  // Projeto possui várias tarefas
  tasks() {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
