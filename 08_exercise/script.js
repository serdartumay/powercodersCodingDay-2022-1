const Questions = [
  {
    id: 0,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [
      { text: "<script>", isCorrect: true },
      { text: "<js>", isCorrect: false },
      { text: "<scripting>", isCorrect: false },
      { text: "<javascript>", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Where is the correct place to insert a JavaScript?",
    a: [
      { text: "In the <head> section", isCorrect: false },
      { text: "In the <body> section", isCorrect: true },
      { text: "In <main> section", isCorrect: false },
      { text: "In <header> section", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "How do you write 'Hello World' in an alert box?",
    a: [
      { text: "msg('Hello World')", isCorrect: false },
      { text: "alert('Hello World')", isCorrect: true },
      { text: "msgBox('Hello World')", isCorrect: false },
      { text: "alertBox('Hello World')", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "How to write an IF statement in JavaScript?",
    a: [
      { text: "if i == 5 then ", isCorrect: false },
      { text: "if(i==5)", isCorrect: true },
      { text: "if i = 5 then", isCorrect: false },
      { text: "if i = 5", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "How can you add a comment in a JavaScript?",
    a: [
      { text: "'This is a comment", isCorrect: false },
      { text: "<!--This is a comment -->", isCorrect: false },
      { text: "// This is a comment", isCorrect: true },
      { text: "*/This is a comment", isCorrect: false },
    ],
  },
];

let start = true;
let score = 0;
let optionButton = document.querySelectorAll(".option");

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.querySelector(".result");
  result.innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  function check() {
    if (selected == "true") {
      result.innerHTML = `Correct answer.`;
      result.style.color = "green";
    } else {
      result.innerHTML = "Wrong answer.";
      result.style.color = "red";
    }

    optionButton.forEach((element) => {
      element.disabled = true;
    });
  }

  // Show selection for op1
  op1.addEventListener("click", () => {
    selected = op1.value;
    check();
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    selected = op2.value;
    check();
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    selected = op3.value;
    check();
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    selected = op4.value;
    check();
  });
}

if (start) {
  let random = Math.floor(Math.random() * Questions.length);
  iterate(random);
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 5) {
    id++;
    iterate(id);
  }

  optionButton.forEach((element) => {
    element.disabled = false;
  });
});
