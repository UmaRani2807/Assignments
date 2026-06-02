
function calculateHike(name:string, baseSalary:number,experience:number,rating:number): number
{
    let variablePay:number;
    let bonus:number;
    let reward:number =5000;
    let hike:number=0;
    if(rating>=4)
    {
        variablePay = 0.15;
        bonus=1500;
        hike = variablePay*baseSalary+bonus;
    }
    else if(rating>=3)
    {
        variablePay = 0.10;
        bonus=1200;
        hike = variablePay*baseSalary+bonus;
    }
    else if (rating<3)
    {
        variablePay = 0.03;
        bonus=300;
        hike = variablePay*baseSalary+bonus;
    }
    if(experience >= 5)
    {
        hike=hike+reward;
    }

    let hikePercentage = hike/baseSalary;
    return hikePercentage;
}

let employeeDetails:Map<string,number>=new Map();
employeeDetails.set("Alice Johnson", calculateHike("Alice Johnson", 75000.0, 5.1, 4.2));
employeeDetails.set("Bob Smith", calculateHike("Bob Smith", 68000.0, 3.2, 3.8));
employeeDetails.set("Carol Davis", calculateHike("Carol Davis", 82000.0, 7.1, 4.5));
employeeDetails.set("David Brown", calculateHike("David Brown", 90000.0, 10.2, 2.5));
employeeDetails.set("Eva Green", calculateHike("Eva Green", 60000.0, 2.4, 3.5));
console.log(employeeDetails);