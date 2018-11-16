// Static server plugin
exports.static = true;

// Security plugin
// exports.security = true;

//Plug plugin 
exports.pug = {
    enable: true,
    package: 'egg-view-pug',
};

//MongoDB plugin
exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

//graphql plugn
// exports.graphql = {
//     enable: true,
//     package: 'egg-graphql',
// };

//sequelize plugin
// exports.sequelize = {
//     enable: true,
//     package: 'egg-sequelize',
// };

//validate plugin
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

//proxyworker plugin
// exports.proxyworker = {
//     enable: true,
//     package: 'egg-development-proxyworker',
// };