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
let WageHrMap = new Map()
let empDailyObjArray=new Array()
while(WorkHr<=MaxWorkHrs && Day<MaxWorkDays){
    a=GetEmpHrs()
    if(WorkHr>MaxWorkHrs){
      WorkHr-=a;
       break;
        }
    DailyWageArray.push(a*wagePerHour)
    WorkHr+=a
    Day++
    WageHrMap.set(Day,a)

    empDailyObjArray.push({
      day: Day,
      empHrs: a,
      dailyWage: a * wagePerHour,
      toString() {
        return ("\nDay:" +this.day +" Daily Hrs: " +this.empHrs +" Daily Wage: " +this.dailyWage);
      },
    });
}
TotalWage=(WorkHr*wagePerHour);
console.log("UC5 TotalworkHrs= "+WorkHr+" "+ "Totaldays= "+Day+ " "+ "TotalWage= "+TotalWage)
//--------------------------------------------------------------------
console.log("UC6-Daily Wages are: "+DailyWageArray.toString())

//-----------------------------------------------------------

totalWage = 0;
function wageSum(element) {
  totalWage += element;
}
DailyWageArray.forEach(wageSum);
console.log("UC7-A total wage using for each: ", totalWage);
function totalWageReduce(totalWage, dailywage) {
  return totalWage + dailywage;
}
console.log("UC7-A total wage using reduce: ", DailyWageArray.reduce(totalWageReduce, 0)
);
//---------------
let day = 0;
function DailyWageMap(wage) {
  day++;
  return "day " + day + ":" + wage;
}

let WageMap = DailyWageArray.map(DailyWageMap);
console.log("UC7-B Day along with Daily Wage: ", WageMap);

//---------------
function DailyWage160(wage) {
  return wage.includes("160");
}
console.log(
  "UC7-C Full time wage of 160 were earned using filter function: ",
  WageMap.filter(DailyWage160)
);
//----------------------
console.log(
  "UC7-D First occurrence when Full Time Wage was earned: ",
  WageMap.find((e) => e.includes("160"))
);
//-----------------------
if(DailyWageArray.find(wage=>wage==80))
console.log("UC7 -f  Part time wage exists")
else{
  console.log("UC7-f  Part time wage does not exists")
}
//----------------------
let workingdays=0
function GetTotalWorkingdays(){
++workingdays
}
DailyWageArray.filter(wage=> wage>0).forEach(GetTotalWorkingdays)
console.log("UC7-g Total number of working days= "+workingdays)

//--------------------------------------------
//Printing days with daily wage
let WageDayMap = new Map();
console.log("UC8- DAY  DAILY WAGE")
for(i=1;i<=20;i++){
  WageDayMap.set(i,DailyWageArray[i-1])
}
for(const [keys,Values] of WageDayMap){
  console.log("  Day= "+keys+" "+"DailyWage= "+Values)
}
totalWage=0;
WageDayMap.forEach(value=> totalWage+=value)
console.log("UC8->  Total wage by Map is: "+totalWage);
//-------------------------------------------
WorkHr=0
WageHrMap.forEach(value=> WorkHr+=value)

console.log("UC9-A TotalWage and Total Working hrs By Map=  "+" TotalWage= "+ totalWage+" "+" TotalWorkHr= "+WorkHr);

//---------------------------------------------------
console.log("UC9-B finding Part working days, full working days and No working days : ")

process.stdout.write("Part working days are: ")
WageHrMap.forEach((values,keys)=>
{if(values == 4 )
  process.stdout.write(keys +" ")
})
process.stdout.write("\nfull working days are: ")
WageHrMap.forEach((values,keys)=>
{if(values == 8)
  process.stdout.write(keys +" ")
})
process.stdout.write("\nNo working days are: ")
WageHrMap.forEach((values,keys)=>
{if(values == 0)
  process.stdout.write(keys +" ")
})
//-----------------------------------------

console.log(
  "UC-10 Store day,hrs,wage in a object: ",
  empDailyObjArray.toString()
);

//--------------------------
function getTotalEmpWageForObj(TotalWageByOj, Obj)
{
  return TotalWageByOj+=Obj.dailyWage
}
console.log(
  "\nUC-11A Total wage ",
  empDailyObjArray.filter(e => e.dailyWage > 0).reduce(getTotalEmpWageForObj,0)
);
console.log(
  "UC-11A Total hours are ",
  empDailyObjArray.filter(e => e.dailyWage > 0).reduce((TotalHoursByobj, obj) => TotalHoursByobj+=obj.empHrs,0)
);
process.stdout.write(
  "UC-11B full workings days are ")
  empDailyObjArray.filter(e => e.dailyWage == 160).forEach(e => process.stdout.write(e.day.toString()+", "))
;
function getWorkingDaysforObject(obj)
{
 return obj.day
}
console.log(
  "\nUC-11C part workings days are ",
  empDailyObjArray.filter(e => e.dailyWage == 80).map(getWorkingDaysforObject).toString()
);
console.log(
  "UC-11D No workings days are ",
  empDailyObjArray.filter(e => e.dailyWage == 0).map(getWorkingDaysforObject).toString()
);