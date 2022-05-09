console.log('Test');
document.getElementById("name"). focus();
let otherJob = document.getElementById("other-job-role");
otherJob.style.display = "none";
var jobRole = document.getElementById("title");

function otherJobsInput(event) {
  let target = event.target;
  let jobRoleValue = jobRole.value;
  if (jobRoleValue === "other") {
    document.getElementById("other-job-role").style.display = "block";
 }else {
  document.getElementById("other-job-role").style.display = "none";
}
}
document.getElementById("title").addEventListener("change", otherJobsInput);