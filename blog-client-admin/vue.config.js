const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // chainwebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    // }
    devServer: {
        proxy: 'http://localhost:3000'
    }

}