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
        required: false
    },
    staffMember:{
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
    requestTool:{
        type: String,
        required: true
    },
    isReport:{
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Report', reportSchema);

module.exports.getReportById = function(id, callback) {
    this.findById(id, callback);
};

module.exports.getAllReports=function(callback){
    this.find(callback);
}

module.exports.addNewReport=function(newReport,callback){
    console.log(JSON.stringify(newReport));
    newReport.save(callback);
}

module.exports.removeReport=function(id,callback){
    this.findById(id).remove(callback);
}

module.exports.updateReport=function(id,updatedRepord,callback){
    this.findById(id).update({ _id: id }, { updatedRepord }, callback);
}