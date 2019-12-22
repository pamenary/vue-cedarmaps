const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  configureWebpack(config) {
    // config.devtool = '#inline-source-map'
    config.devtool = false
  },
}
