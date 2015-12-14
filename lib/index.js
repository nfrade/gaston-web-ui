
function getCurrentUrl (argument) {
  var url = clearSlashes(window.location.pathname + window.location.search)
  url = url.replace(/\?(.*)$/, '')
  return url
}

function clearSlashes (path) {
  return path.toString().replace(/\/$/, '').replace(/^\//, '')
}

if (getCurrentUrl() === '') {
  require('./dashboard')
}
