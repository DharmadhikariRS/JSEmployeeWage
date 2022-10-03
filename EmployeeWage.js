function CheckPresentAbsent() {
    return Math.floor((Math.random() * 10) % 2);
  }
let empCheck = CheckPresentAbsent();
const isFullTime = 1;
if (empCheck == isFullTime) {
  console.log("UC1- Employee is present");
} else {
  console.log("UC1- Employee is Absent", empCheck);
}
//--------------------------------------------------
function CheckFullPartTime() {
    return Math.floor((Math.random() * 10) % 3);
  }
  
  empCheck = CheckFullPartTime();
  const isPartTime = 2;
  const wagePerHour = 20;
  let empHrs;
  let dailyWage;

  switch (empCheck) {
    case isFullTime:
      empHrs = 8;
      dailyWage = wagePerHour * empHrs;
  
      console.log(
        "UC2- Employee is present for full time and his salary is: " + dailyWage
      );
      break;
  
    case isPartTime:
      empHrs = 4;
      dailyWage = wagePerHour * empHrs;
  
      console.log(
        "UC2- Employee is present for Part time and his salary is: " + dailyWage
      );
      break;
  
    default:
      empHrs = 0;
      dailyWage = wagePerHour * empHrs;
      console.log("UC2- Employee is absent and his salary is: " + dailyWage);
      break;

      }
  
let WorkHrs=0;
GetWorkHrs(empHrs)
  
function GetWorkHrs(a){
    WorkHrs+=a
}
console.log("UC-3 WorkHrs= "+WorkHrs)

//-----------------------------------
  let TotalWage=0;
  let NumOfDays=20;
  let Day=1;

function GetEmpHrs() {
    empCheck=CheckFullPartTime() 
    switch (empCheck) {
      case isFullTime:
        empHrs = 8;
        break;
      case isPartTime:
        empHrs = 4;
        break;
      default:
        empHrs = 0;
        break;
    }
    return empHrs;
  }
let Workhr=0;
  while(Day<=NumOfDays){
    Workhr+=GetEmpHrs()
  Day++
}
TotalWage=(Workhr*wagePerHour)
console.log("UC4-WorkHrs & TotalWage= "+Workhr+" and "+TotalWage)

let MaxWorkHrs=160;
let MaxWorkDays=20;
Day=0;
WorkHrs=0;
let a=0;
while(WorkHrs<=MaxWorkHrs && Day<MaxWorkDays){
    a=GetEmpHrs()
    WorkHrs+=a
    Day++
  if(Workhr>MaxWorkHrs){
WorkHrs-=a;
 break;
  }
}
TotalWage=(Workhr*wagePerHour);
console.log("UC5 Calculating Workhrs, Days and TotalWage for Max 20 days or 160 hrs condition= "+Workhr+","+Day+" and "+TotalWage)