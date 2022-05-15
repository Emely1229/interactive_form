
document.getElementById("name"). focus();
//name field is selected first
let otherJob = document.getElementById("other-job-role");
//gives variable name to other-job-role input field
otherJob.style.display = "none";
//sets other input as hidden
var jobRole = document.getElementById("title");
//gives variable name to title

function otherJobsInput() {
  //creates a function that will run when job input field is changed
  let jobRoleValue = jobRole.value;
  //gives variable name to value of jobrole
  if (jobRoleValue === "other") {
    document.getElementById("other-job-role").style.display = "block";
    //if the job role value is other then the new input field will be displayed to type in text
 }else {
  document.getElementById("other-job-role").style.display = "none";
  //if the job role value is something other than "other" then the new input field will not be displayed
}
}
document.getElementById("title").addEventListener("change", otherJobsInput);
//hides other input if a job is selected, displays other input if other is selected in jobs

let colors = document.getElementById("color");
//creates a variable for the color selected
colors.disabled = true;
//cannot choose a color by default
let design = document.getElementById("design");
//creates a variable for the design section
function displayColors() {
  //creates a function that runs once a color is chosen
  colors.disabled = false;
//lets you choose a color once a theme is chosen
  for (var i=0; i< colors.options.length; i++) {
    //loops through all the color options
    if(colors.options[i].dataset.theme ===  design.value) {
      colors.options[i].style.display = "block";
      colors.value = '';
      //if the color option matches the color theme chosen then it gets displayed
} else {
    colors.options[i].style.display = "none";
    //if the color option on the list does not match the color theme chosen then it is hidden
}
}
}
design.addEventListener("change", displayColors);
//once a theme is chosen the colors available will display

let activitiesBox = document.getElementById("activities");
//gives variable name for activities section
let total = document.getElementById("activities-cost");
//gives variable name for total cost of the activities
let totalCost = 0;
//sets Cost to be zero by default

function addCost(event) {
  //creates function that runs once any box is checked or unchecked from activities section
  let dataCost = event.target.dataset.cost;
  //gives variable name for the cost of each activity in string form
  let dataCostN = parseInt(dataCost);
  //gives variable name for the cost of each activiity in number form
  console.log(dataCost);
  console.log(dataCostN);
  if (event.target.checked == true) {
  totalCost = dataCostN + totalCost;
  //if a activity is checked it adds how much it costs to the total
} else {
  totalCost = totalCost - dataCostN;
  //if an activity is unchecked it subtracts how much it costs from the total
}
  total.innerHTML = `Total: $ ${totalCost}`;
  //displays the total within the innerhtml of total
}
activitiesBox.addEventListener("change", addCost);
//makes sure total is accurate to boxes checked and unchecked


let payWith = document.getElementById("payment");
let creditCard = document.getElementById("credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");
//gives variable names for each of the payment methods

paypal.style.display = "none";
bitcoin.style.display = "none";
payWith.options[1].selected = true;
//paypal and bitcoin divs are hidden 
//creditCard is shown by default

function switchPayment(event) {
  //makes a function that runs when the payment type is chosen/switched
  let payment = event.target.value;
  if ( payment === "paypal") {
  paypal.style.display = "block";
  bitcoin.style.display = "none";
}else {
  paypal.style.display = "none";
}  if (payment === "bitcoin") {
  bitcoin.style.display = "block";
  paypal.style.display = "none";
}else {
  bitcoin.style.display = "none";
} if (payment === "credit-card") {
  creditCard.style.display = "";
}else {
  creditCard.style.display = "none";
}
//hides payment method that isn't selected and shows payment method that is selected using display
}
payWith.addEventListener("change", switchPayment);
//shows payment that is selected

let names = document.getElementById("name");
let email = document.getElementById("email");
let activities = document.getElementById("activities-box");
let cardNum = document.getElementById("cc-num");
let zip = document.getElementById("zip");
let cvv = document.getElementById("cvv");
let form = document.querySelector("form");
//sets variable names for each of the inputs within the form


function validator(event) {
  //makes a function that runs when the register button is clicked, when the form submits
  let nameHere = names.value;
  let emailHere = email.value;
  let cardHere = cardNum.value;
  let zipHere = zip.value;
  let cvvHere = cvv.value;
  //gives variable names for each of the input's values on the form
  const regexName = /(\S)+(\s)?(\S)?/;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const regexCard = /^\d{13,16}$/;
  const regexZip = /^\d{5}$/;
  const regexCvv = /^\d{3}$/;
  //makes regexs to test the validity of each of the inputs
  if (regexName.test(nameHere)===false) {
    event.preventDefault();
    names.parentElement.classList.add("not-valid");
    names.parentElement.classList.remove("valid");
    names.parentElement.lastElementChild.style.display = "block";
  }else {
    names.parentElement.classList.add("valid");
    names.parentElement.classList.remove("not-valid");
    names.parentElement.lastElementChild.style.display = "none";
  }
  if (regexEmail.test(emailHere)===false) {
    event.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  }else{
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }
  if (totalCost <= 0) {
    event.preventDefault();
    activities.parentElement.classList.add("not-valid");
    activities.parentElement.classList.remove("valid");
    activities.parentElement.lastElementChild.style.display = "block";
  } else {
    activities.parentElement.classList.add("valid");
    activities.parentElement.classList.remove("not-valid");
    activities.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexCard.test(cardHere)===false){
    event.preventDefault();
    cardNum.parentElement.classList.add("not-valid");
    cardNum.parentElement.classList.remove("valid");
    cardNum.parentElement.lastElementChild.style.display = "block";
  }else {
    cardNum.parentElement.classList.add("valid");
    cardNum.parentElement.classList.remove("not-valid");
    cardNum.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexZip.test(zipHere)===false){
    event.preventDefault();
    zip.parentElement.classList.add("not-valid");
    zip.parentElement.classList.remove("valid");
    zip.parentElement.lastElementChild.style.display = "block";
  }else {
    zip.parentElement.classList.add("valid");
    zip.parentElement.classList.remove("not-valid");
    zip.parentElement.lastElementChild.style.display = "none";
  }
  if (creditCard.style.display === "" && regexCvv.test(cvvHere)===false ){
    event.preventDefault();
    cvv.parentElement.classList.add("not-valid");
    cvv.parentElement.classList.remove("valid");
    cvv.parentElement.lastElementChild.style.display = "block";
  }else {
    cvv.parentElement.classList.add("valid");
    cvv.parentElement.classList.remove("not-valid");
    cvv.parentElement.lastElementChild.style.display = "none";
  }
  //if a input is not valid the form will not submit and will get a class added that displays a hint
  //if a input is valid it displays the valid class and will be able to submit the form if all inputs are valid
  //if at least one input is invalid the form is not submitted
}
form.addEventListener("submit", validator);
//validates the entire form

let inputs = document.querySelectorAll("input");
//selects all inputs in the form
inputs.forEach(input=> {
  input.addEventListener("focus", (event)=>{
  event.target.parentNode.classList.add("focus");
});
//adds focus to an input if it is selected
inputs.forEach(input=>{
  input.addEventListener("blur", (event)=>{
    event.target.parentNode.classList.remove("focus");
    event.target.parentNode.classList.add("blur");
  });
  //adds blur if an input is not selected and removes focus
} );
});
//sets accessibility for focus/unfocus

function nameValidator(event) {
  //is a function that validates the name input field
  let nameHere = names.value;
  const regexName = /(\S)+(\s)?(\S)?/;
  if (regexName.test(nameHere)===false) {
    event.preventDefault();
    names.parentElement.classList.add("not-valid");
    names.parentElement.classList.remove("valid");
    names.parentElement.lastElementChild.style.display = "block";
  }else {
    names.parentElement.classList.add("valid");
    names.parentElement.classList.remove("not-valid");
    names.parentElement.lastElementChild.style.display = "none";
  }
}
names.addEventListener("blur", nameValidator);
//allows the name input field to be validated without submitting, simply by blur

function emailValidator(event){
  //is a function that validates the email input field
  let emailHere = email.value;
  const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (regexEmail.test(emailHere)===false) {
    event.preventDefault();
    email.parentElement.classList.add("not-valid");
    email.parentElement.classList.remove("valid");
    email.parentElement.lastElementChild.style.display = "block";
  }else{
    email.parentElement.classList.add("valid");
    email.parentElement.classList.remove("not-valid");
    email.parentElement.lastElementChild.style.display = "none";
  }
}
email.addEventListener("blur", emailValidator);
//allows the email input field to be validated without submitting, simply by blur
