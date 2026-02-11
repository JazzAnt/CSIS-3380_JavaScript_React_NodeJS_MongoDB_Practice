//Practice 1 : Return an array of active job objects
const jobs = [
  { id: 101, isActive: true },
  { id: 102, isActive: false },
  { id: 103, isActive: true },
  { id: 103, isActive: false },
  { id: 105, isActive: false },
];

console.log(
  "Active Jobs\t: ",
  jobs.filter((value) => value.isActive)
);
console.log(
  "Active Job IDs\t: ",
  jobs.filter((value) => value.isActive).map((value) => value.id)
);

let studentInfo = [
  {
    name: "John",
    course: "1280",
  },
  {
    name: "Sam",
    course: "3380",
  },
  {
    name: "Anu",
    course: "3380",
  },
  {
    name: "Sandra",
    course: "1280",
  },
];

console.log(
  "3380 Students\t: ",
  studentInfo.filter((value) => value.course == "3380")
);
console.log(
  "3380 Student Names\t: ",
  studentInfo
    .filter((value) => value.course == "3380")
    .map((value) => value.name)
);

// Use reduce to find the vowel count for all the fruits
const vowels = ["a", "i", "u", "e", "o"];
let fruits = ["Apple", "Strawberry", "Blueberry", "Orange", "Grapes"];

const allVowels = fruits.reduce((vowelCount, fruit) => {
  for (let letter of fruit) {
    if (vowels.includes(letter.toLowerCase())) vowelCount++;
  }
  return vowelCount;
}, 0);

console.log("Vowel Count\t: ", allVowels);
