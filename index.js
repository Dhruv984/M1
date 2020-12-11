const readlineSync=require('readline-sync');
const username=readlineSync.question("Who are you?");
console.log("Hlo "+username);
console.log("Let's see How well do you know Dhruv");
console.log("You will be asked 4 questions each carrying 1 mark");
//variables
score=0;
//Function to play

const func=(question,answer)=>{
  const useranswer=readlineSync.question(question+"\n");
  if(useranswer.toUpperCase() === answer.toUpperCase())
  {
  console.log("Correct Answer");
  score++;
  }
  else
  {
  console.log("Wrong Answer");
  }
  return score;
}
//questions

const ques1={
  ques:"Where am i from?\n (a)Patiala \n (b)Sangrur ",
  ans: "Sangrur"
}
const ques2={
  ques:"What do i like to do in my spare time \n (a)Watch TV \n (b)Sleep ",
  ans: "Sleep"
}
const ques3={
  ques:"Which sport do i play? (a)Table Tennis \n (b)Football ",
  ans: "Table Tennis"
}
const ques4={
  ques:"What do you think do i want the lockdown to end? \n (a)yes \n (b)no ",
  ans: "no"
}
//Array
const array=[ques1,ques2,ques3,ques4];
//Loop
const userpermission=readlineSync.question("Shall we continue? \n (a)yes \n (b)no \n");
if(userpermission.toUpperCase() === "YES")
{
for(i=0;i<4;i++){
  func(array[i].ques,array[i].ans);
}
console.log("Your score");
console.log(score+"/4");
}
else
console.log("OK you can go");