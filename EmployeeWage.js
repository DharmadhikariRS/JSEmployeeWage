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

//-------------------------------------------------------------
  let TotalWage=0;
  let NumOfDays=20;
  let Day=1;
let DailyWageArray=[]
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
 /* 
let Workhr=0;
  while(Day<=NumOfDays){
   
  Day++
}
TotalWage=(Workhr*wagePerHour)
console.log("UC4-WorkHrs & TotalWage= "+Workhr+" and "+TotalWage)
*/
//-------------------------------------------------------------------------
let MaxWorkHrs=160;
let MaxWorkDays=20;
Day=0;
WorkHr=0;
let a=0;
while(WorkHrs<=MaxWorkHrs && Day<MaxWorkDays){
    a=GetEmpHrs()
    if(WorkHr>MaxWorkHrs){
      WorkHr-=a;
       break;
        }
    DailyWageArray.push(a*wagePerHour)
    WorkHr+=a
    Day++

}
TotalWage=(WorkHr*wagePerHour);
console.log("UC5 TotalworkHrs= "+WorkHr+" "+ "Totaldays= "+Day+ " "+ "TotalWage= "+TotalWage)
//--------------------------------------------------------------------
console.log("UC6-Daily Wages are: "+DailyWageArray.toString())