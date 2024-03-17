import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "Multiplication", "Subtration", "Division"],
  },
]);

// condition statment

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Subtration"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{

console.log("Please select valid operator");
} 