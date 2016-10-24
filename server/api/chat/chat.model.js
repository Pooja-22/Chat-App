/**
 * Created by pooja on 22/10/16.
 */

'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ChatSchema = new Schema({
    text: {
        type: String
    },
    from: {
        name: {
            type: String
        }
    },
    time: {type: Date, default: new Date()}
});

module.exports = mongoose.model('Chat', ChatSchema);



