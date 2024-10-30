function displayName(name){
    return name;
}

function computeTwoNumbers(num1,num2){
    return num1 + num2;
}

function confirmSubmission(){
    if(confirm("Do You Want to Submit?")){
        alert(computeTwoNumbers(12,3));
    }
}

function inputTwoNumbers(){
    let name = prompt("Enter Your Name");
    var firstNum = parseInt(prompt("Enter First Number"));
    var secondNum = parseInt(prompt("Enter Second Number"));
    alert("Your Name is: " + name + "\nThe Sum of Two Numbers is: " + computeTwoNumbers(firstNum, secondNum));
}

function checkGrade(){
    var grade = parseInt(prompt("Enter Your Grade"));
    alert(grade >= 75 ? "You Failed" : "You Passed");
}

function calculateGrade() {
    let name = prompt("Enter Your Name");
    let totalScore = parseFloat(prompt("Enter Total Score"));
    let totalItems = parseInt(prompt("Enter Total Items")); 
    
    let grade = -4 * (totalScore / totalItems) + 5;
    
    let remarks = (grade >= 3.1) ? "Failed" : "Passed"; 

    alert("Your Name is: " + name + "\nYour Total Grade is: " + grade.toFixed(2) + "\nRemarks: " + remarks);

    document.write(("<br>") + ("<br>") + "Your Name is: " + name + "<br>");
    console.log(("<br>") + ("<br>") + "Your Name is: " + name + "<br>");
    document.write("Your Total Grade is: " + grade.toFixed(2) + "<br>");
    console.log("Your Total Grade is: " + grade.toFixed(2) + "<br>");
    document.write("Remarks: " + remarks + "<br>");
    console.log("Remarks: " + remarks + "<br>");

    return calculateGrade;
}