'use strict';

module.exports = function (app) {

    // Insert routes below
    app.use('/api/chat', require('./api/chat'));
};

