require('../common/less/config.less')
require('../common/less/style.less')

var Element = require('vigour-element')
var App = require('vigour-element/lib/app')

Element.prototype.inject(
  require('vigour-element/lib/property/css')
)

var app = new App({
  node: document.body
})

var Header = require('../common/components/header/')
var Projects = require('./components/projects')
var Footer = require('../common/components/footer')

app.set({
  header: Header,
  container: {
    css: 'main',
    projectsList: Projects
  },
  footer: Footer
})
