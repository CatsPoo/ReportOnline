var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var report = require('./models/Report');

module.exports.Start = function () {

    console.log("Starting socket...");
    io.on('conection', (socket) => {
        console.log('user connected');

        io.On('addNewReport', (reportObjet) => {

            var newReport = new Report({
                date: reportObjet.date,
                startTime: reportObjet.startTime,
                staffMember: reportObjet.staffMember,
                system: reportObjet.system,
                comments: reportObjet.comments,
                requetsTool: reportObjet.requetsTool,
                isReport: false,
            });

            report.addNewReport(newReport, (err, report) => {
                if (err) {
                    io.emit('addNewReport',{error: true})
                }
                else {
                    //add the report for each client
                    io.emit('addNewReport', {error:false ,id:report._id});
                }
            });
        });

        io.on('getAllReports', () => {
            report.getAllReports((err, data) => {
                if (err)
                {
                    console.log(err);
                    io.emit('getAllReports', { error: true, data: err });
                }
                else{
                    consolee.log(data);
                    io.emit('getAllReports', { error: false, data: data });
                }
            })
        });

        io.on('removeReport',(reportID)=>{
            report.removeReport((err,res)=>{
                if(err)
                {
                    console.log(err);
                    io.emit('removeReport',{error: true,data: err});
                }

                else{
                    console.log(data);
                    io.emit('removeReport',{error: false})
                }
            });
        });

        io.on('updateReport',(reportID,newReport)=>{
            var newReport=new Report({
                date: newReport.date,
                startTime: newReport.startTime,
                endTime: newReport.endTime,
                system: newReport.system,
                comments: newReport.comments,
                requetsTool: newReport.requetsTool,
                isReport: newReport.isReport,
            });
        });


    })
}