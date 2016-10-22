/**
 * Created by pooja on 22/10/16.
 */

'use strict';

module.exports = function (app) {

    // Insert routes below
    
    app.use('/api/chat', require('./api/chat'));
    app.use('/api/user', require('./api/user'));
};

