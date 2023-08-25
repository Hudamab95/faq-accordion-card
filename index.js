
const answers = document.querySelectorAll(".answer-text");
const question = document.querySelectorAll(".question-text");



function revealAnswers(index) {
  if (answers[index].style.display === "none") {
    answers[index].style.display = "block";
    question[index].style.fontWeight = "900";
  } else {
    answers[index].style.display = "none";
    question[index].style.fontWeight = "400";

  }
}
