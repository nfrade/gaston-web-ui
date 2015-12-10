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
var ui = require('vigour-uikit/lib')

var projects = global.projects = new Observable()

var mockData = require('../../../../test/fixtures/gaston-api-getprojects-output.json')
projects.set(mockData)
// window.gaston.api.getProjects().then((projects) => {
//   console.log(projects);
// });

// TODO: Delete ProjectList files
// var ProjectList = require('./project-list.js')

var ProjectItem = require('./project-item.js')

module.exports = new Element({
  projectListHeader: new ui.Row({
    projectListTitle: new ui.H2({
      text: 'Registered Projects:'
    }),
    'register-new-project': new ui.Button({
      text: 'Register New Project',
      icon: new ui.Icon('folder-plus'),
      css: {
        addClass: 'ui-big'
      },
      on: {
        click () {
          window.open('?$findProject=true')
        }
      }
    })
  }),
  projects: projects,
  projectList: new Element({
    ChildConstructor: ProjectItem,
    $: 'projects'
  })
  // projectList: ProjectList(projects)
})

