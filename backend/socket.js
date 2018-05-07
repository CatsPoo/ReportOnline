var localdata=require('./models/localData');
module.exports=function(io){
    console.log("Starting socket...");
    io.on('connection', (socket) => {
        console.log('user connected');

        socket.on('test',(str)=>{
            console.log(str);
        });

        socket.on('addNewReport', (reportObjet) => uploadReportToDB(reportObjet));

        socket.on('getAllReports', () => getAllReportsFromDB());

        socket.on('getData',(data)=>getData());

        socket.on('removeReport',(reportID)=>removeReportFromDB(reportID));

        socket.on('updateReport',(reportID,newReport)=>{
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
        });





        var uploadReportToDB=function(reportObject){
            console.log('addNewReport');
        
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
        }
        
        var getAllReportsFromDB=function(){
            console.log('getAllReports');
                    report.getAllReports((err, data) => {
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
        
        
        var getData=function(){
            console.log('getAllFirstData     '+localdata);
            io.emit('getData',{users: localdata.users, systems:localdata.systems});
        }
        
        var removeReportFromDB=function(reportID){
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
        
        
        var updateReportOnDB=function(reportID,newReport){
        
        }

    })
}