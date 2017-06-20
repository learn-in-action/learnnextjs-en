var getMdPage = require('../helper').getMdPage
var path = require('path')
var fs = require('fs')

module.exports = {
  title: 'Using shared components',
  steps: [
    {
      title: 'Introduce',
      page: getUrl('README.md')
    },
    {
      title: 'Setup',
      page: getUrl('1-setup.md'),
      validate: [
        {
          command: 'cd learnnextjs-demo',
          message: 'folder learnnextjs-demo not found',
        },
      ]
    },
    {
      title: 'Create the header component',
      page: getUrl('2-create-the-header-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','components','Header.js')
            return fs.existsSync(tpath)
          },
          message: 'file components/Header.js not found',
        },
      ]
    },
    {
      title: 'Using the header component',
      page: getUrl('3-using-the-header-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file pages/index.js not found',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content =  fs.readFileSync(tpath).toString()
            return /Header/.test(content)
          },
          message: '<Header> not found in pages/index.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','comps','Header.js')
            return fs.existsSync(tpath)
          },
          message: 'folder comps not found',
        }
      ]
    },
    {
      title: 'The component directory',
      page: getUrl('4-the-component-directory.md')
    },
    {
      title: 'The layout component',
      page: getUrl('5-the-layout-component.md'),
      validate: [
        {
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','components','MyLayout.js')
            return fs.existsSync(tpath)
          },
          message: 'file components/MyLayout.js not found',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            return fs.existsSync(tpath)
          },
          message: 'file pages/index.js not found',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','index.js')
            var content =  fs.readFileSync(tpath).toString()
            return /MyLayout/.test(content)
          },
          message: '<MyLayout> not found in pages/index.js',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','about.js')
            return fs.existsSync(tpath)
          },
          message: 'file pages/about.js not found',
        },{
          callback: (cwd)=>{
            var tpath = path.join(cwd,'learnnextjs-demo','pages','about.js')
            var content =  fs.readFileSync(tpath).toString()
            return /MyLayout/.test(content)
          },
          message: '<MyLayout> not found in pages/about.js',
        }
        
      ]
    },
    {
      title: 'Rendering child components',
      page: getUrl('6-rendering-child-components.md')
    },
    {
      title: 'Using-components',
      page: getUrl('7-using-components.md')
    },
  ]
}

function getUrl(filePath){
  return getMdPage(path.join(__dirname,filePath))
}