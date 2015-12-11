'use strict'
var Element = require('vigour-element')
Element.prototype.inject(
  require('vigour-element/lib/property/text'),
  require('vigour-element/lib/property/css'),
  require('vigour-element/lib/property/transform')
)
var ui = require('vigour-uikit/lib')

var UnregisterButton = new ui.Button({
  text: '',
  css: {
    addClass: 'ui-small ui-grayscale-light'
  },
  icon: new ui.Icon('folder-minus'),
  label: {
    node: 'span',
    text: 'Unregister Project'
  },
  on: {
    click () {
      let projectKey = this.parent.parent.key
      // console.log(this.lookUp('projects').val)
      window.gaston.api.unregisterProject(projectKey)
        .then(window.gaston.api.getProjects)
        .then((projects) => {
          this.lookUp('projects').origin.set(projects)
        })
    }
  }
})

var StopButton = new ui.Button({
  text: '',
  css: {
    addClass: 'ui-small ui-grayscale-light'
  },
  icon: new ui.Icon('pause2'),
  label: {
    node: 'span',
    text: 'Stop'
  }
})

module.exports = new ui.Row({
  css: {
    addClass: 'project-row'
  },
  'project-actions': {
    'unregister-bt': UnregisterButton,
    'stop-bt': StopButton
  },
  'project-name': new Element({
    node: 'a',
    text: {
      $: 'parent.parent.name'
    }
  })
}).Constructor
