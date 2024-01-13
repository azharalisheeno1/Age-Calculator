let dob=document.getElementById("DOB");
let currentdate=document.getElementById("currentdate");
let output=document.getElementById("output");

document.getElementById("calculatebutton").addEventListener("click",()=>{
    if(dob.value==" " || currentdate.value==" "){
        output.innerHTML="please Select the Date";
    }else{
        calculateAgeDifference(dob.value,currentdate.value);
    }
});

function calculateAgeDifference(start,end){
    let dobyear=parseInt(start.substring(0,4),10);
    let dobmonth=parseInt(start.substring(5,7),10);
    let dobDate=parseInt(start.substring(8,10),10);
    let curryear=parseInt(end.substring(0,4),10);
    let currmonth=parseInt(end.substring(5,7),10);
    let currdate=parseInt(end.substring(8,10),10);

    //Year Difference
    let yearagediff=curryear-dobyear;

    //Month Difference
    let monthagediff;
    if(currmonth>=dobmonth){
        monthagediff=currmonth-dobmonth;
    }else{
        yearagediff--;
        monthagediff=12+currmonth-dobmonth;
    }

    //Days Difference
    let dateagediff;
    if(currdate>=dobDate){
        dateagediff=currdate-dobDate;
    }else{
        monthagediff--;
        noOfdaysinDOB=daysinmonth(dobmonth,dobyear);
        dateagediff=noOfdaysinDOB+currdate-dobDate;
        //case when  MonthAgeDifference goes Negative
        if(monthagediff<0){
            monthagediff=11;
            yearagediff--;
        }
    }
    output.innerHTML=yearagediff + " Year " + monthagediff + " Month " + dateagediff + " Days.";
}
function daysinmonth(month,year){
    return new Date(year,month,0).getDate();
}