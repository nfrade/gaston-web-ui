'use strict'

require('./style.less')

var Observable = require('vigour-js/lib/observable')
Observable.prototype.inject(
  require('vigour-js/lib/operator/subscribe'),
  require('vigour-js/lib/operator/transform')
)
var Element = require('vigour-element')
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/transform')
)
// var ui = require('vigour-uikit/lib')

var data = new Observable({
  projects: ['1', '2']
})
// var projects = global.projects = new Observable()
// window.gaston.api.getProjects()
//   .then((tempProjects) => {
//     // console.log(tempProjects)
//     data.projects.set(tempProjects)
//     // console.log(data.get('projects'))
//   })

// TODO: Delete ProjectList files
// var ProjectList = require('./project-list.js')

// var ProjectItem = require('./project-item.js')

module.exports = new Element({
  val: data,
  // projectListHeader: new ui.Row({
  //   projectListTitle: new ui.H2({
  //     text: 'Registered Projects:'
  //   }),
  //   'register-new-project': new ui.Button({
  //     text: 'Register New Project',
  //     icon: new ui.Icon('folder-plus'),
  //     css: {
  //       addClass: 'ui-big'
  //     },
  //     on: {
  //       click () {
  //         window.open('?$findProject=true')
  //       }
  //     }
  //   })
  // }),
  projectList: {
    // inject: [
    //   require('vigour-js/lib/operator/subscribe'),
    //   require('vigour-js/lib/operator/origin')
    // ],
    // ChildConstructor: ProjectItem,
    ChildConstructor: new Element({
      text: 'ueue'
    }),
    // $origin: data.projects
    $: 'projects'
    // $transform: function () {
    //   console.log(this)
    // }
  }
  // projectList: ProjectList(projects)
})

