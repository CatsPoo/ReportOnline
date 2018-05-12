var localdata=require('./models/localData');
var Report=require('./models/Report');

module.exports=function(io){
    console.log("Starting socket...");
   
    io.on('connection', (socket) => {
        console.log('user connected');

        socket.on('test',(str)=>{
            console.log(str);
        });

        socket.on('addNewReport', (reportObjet) => uploadReportToDB(io,reportObjet));

        socket.on('getAllReports', () => getAllReportsFromDB(io));

        socket.on('getGeneralData',(data)=>getGeneralData(io));

        socket.on('removeReport',(reportID)=>removeReportFromDB(io,reportID));

        socket.on('updateReport',(report)=> updateReportOnDB(io,report.id,report.report));

    })

    io.on('disconnection', (socket) => {
        console.log('desconnected');
    });
}

var uploadReportToDB=function(io,reportObject){
    console.log('addNewReport');

            var newReport = new Report({
                date: reportObject._date,
                startTime: reportObject._startTime,
                staffMember: reportObject._staffMember,
                system: reportObject._system,
                comments: reportObject._comments,
                requetsTool: reportObject._requetsTool,
                isReport: false,
            });

            Report.addNewReport(newReport, (err, report) => {
                if (err) {
                    io.emit('addNewReport',{error: true, data: err})
                }
                else {
                    //add the report for each client
                    io.emit('addNewReport', {error:false ,id:report._id});
                }
            });
}

var getAllReportsFromDB=function(io){
    console.log('getAllReports');
            Report.getAllReports((err, data) => {
                console.log('aaa');
                if (err)
                {
                    console.log(err);
                    io.emit('getAllReports', { error: true, data: err });
                }
                else{
                    consolee.log(data);

                    var reports=[];
                    var tasks=[];

                    data.forEach(node => {
                        if (node.isReport)
                            reports.push(node);
                        else
                            tasks.push(node);
                    });

                    io.emit('getAllReports', { error: false, reports: reports, tasks:tasks });
                }
            })
}


var getGeneralData=function(io){
    console.log('getGeneralData     '+localdata);
    io.emit('getGeneralData',{users: localdata.users, systems:localdata.systems});
}

var removeReportFromDB=function(io,reportID){
    console.log('removeReport');
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
}


var updateReportOnDB=function(io,reportID,newReport){
    console.log('updateReport');
    var newReport=new Report({
        date: newReport.date,
        startTime: newReport.startTime,
        endTime: newReport.endTime,
        system: newReport.system,
        comments: newReport.comments,
        requetsTool: newReport.requetsTool,
        isReport: newReport.isReport,
    });
}