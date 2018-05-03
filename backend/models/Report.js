var mongoose = require('mongoose');
var config = require('../config/database');

var reportSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    דtaffMember:{
        type: Object,
        required: true
    },
    system:{
        type: String,
        required: true
    },
    comments:{
        type: String,
        required: false
    },
    isReport:{
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Report', reportSchema);

module.exports.getReportById = function(id, callback) {
    Report.findById(id, callback);
}
