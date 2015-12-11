var Element = require('vigour-element')
Element.prototype.inject(
  require('vigour-element/lib/property/css')
)
var App = require('vigour-element/lib/app')

var app = new App({
  node: document.body
})

var Header = require('../common/components/header/')
var Footer = require('../common/components/footer')

app.set({
  header: Header,
  container: {
    css: 'main',
    text: 'wawa'
  },
  footer: Footer
})
