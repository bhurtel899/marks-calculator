function calculateGrade() {
    var marks = document.getElementById("marks").value;
    var result = document.querySelector(".result");
  
    if (marks >= 90) {
      result.innerHTML = "A+";
    } else if (marks >= 80) {
      result.innerHTML = "A";
    } else if (marks >= 70) {
      result.innerHTML = "B+";
    } else if (marks >= 60) {
      result.innerHTML = "B";
    } else if (marks >= 50) {
      result.innerHTML = "C+";
    } else if (marks >= 40) {
      result.innerHTML = "C";
    } else {
      result.innerHTML = "F";
    }
  }
  