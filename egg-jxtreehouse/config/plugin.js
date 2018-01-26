// Static server plugin
exports.static = true;

// Security plugin
exports.security = true;

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