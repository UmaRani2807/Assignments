let names:string[]=['Suresh','Mahesh','Naresh'];
let marks:number[]=[75,80,82];
let updateMarks:number[] =[0,0,0];
let average:number=0;

function UpdatedMarks():void
{
    console.log("Updated Marks:");
    for(let i:number=0; i<marks.length; i++)
    {
       updateMarks[i]=marks[i]+10;
       console.log(names[i]+ ": " +updateMarks[i]); 
       average=average+updateMarks[i];
    }
    average=average/3;
    console.log("Average Marks: "+average);
}

UpdatedMarks();