let age = document.getElementById("age");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.onclick = function () {
  const ageValue = Number(age.value);
  let checkResult = ageValue >= 18 ? "You are an adult" : "You are a minor";
  result.textContent = checkResult;
};
