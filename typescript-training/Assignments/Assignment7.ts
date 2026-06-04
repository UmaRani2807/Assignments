let sentence:string = "Java programming is fun and challenging";
let sentenceParts:string[] = sentence.split(" ");
console.log(`The total number of words in the sentence are ${sentenceParts.length}`);

let reverseSentence:string[] = [];
for(let i:number=sentenceParts.length-1;i>=0;i--)
{
    reverseSentence.push(sentenceParts[i]);
}
console.log(`Reverse order of the sentence - ${reverseSentence.join(" ")}`);

let firstCapital:string[] = [];
for(let i:number=0;i<sentenceParts.length;i++)
{
firstCapital[i]=sentenceParts[i].charAt(0).toUpperCase() + sentenceParts[i].slice(1);
}
console.log(`First character of each word to uppercase - ${firstCapital.join(" ")}`);