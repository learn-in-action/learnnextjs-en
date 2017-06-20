var getMdPage = require('../helper').getMdPage
var path = require('path')

module.exports = {
  title: 'Deploying a nextjs app',
  steps: [
    {
      title: 'Introduce',
      page: getUrl('README.md')
    },
    {
      title: 'Setup',
      page: getUrl('1-setup.md')
    },
    {
      title: 'Build and start',
      page: getUrl('2-build-and-start.md')
    },
    {
      title: 'Run two instances',
      page: getUrl('3-run-two-instances.md')
    },
    {
      title: 'Build once run many instances',
      page: getUrl('4-build-once-run-many-instances.md')
    },
    {
      title: 'Deploying to zeit now',
      page: getUrl('5-deploying-to-zeit-now.md')
    },
    {
      title: 'zeit now port 80',
      page: getUrl('6-zeit-now-port-80.md')
    },
    {
      title: 'build your app locally',
      page: getUrl('7-build-your-app-locally.md')
    },
    {
      title: 'Deploy with a custom server',
      page: getUrl('8-deploy-with-a-custom-server.md')
    },
    {
      title: 'Finally',
      page: getUrl('9-finally.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}