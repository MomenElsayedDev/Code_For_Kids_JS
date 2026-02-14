/**
 * ============================
 * 1. Lessons Database (Array of Objects)
 * Each object stores a lesson's title, a short explanation, and starter code.
 * This acts as our lesson "library" for the tutorial app.
 * ============================
 */
const lessons = [
  {
    title: "Hello World",
    explanation:
      "Welcome! console.log is the fundamental way to output information in JavaScript.",
    code: `// Print a simple string to the console
console.log("Hello, I am a JavaScript Developer!");

// Print a number directly
console.log(2026); // Outputs the number 2026`,
  },
  {
    title: "Variables",
    explanation:
      "Variables store data. 'let' is used to declare a variable that can change.",
    code: `// Declare a variable named 'score' and assign a value
let score = 100;

// Use the variable inside a string
console.log("Current score is: " + score); // Concatenates text and variable`,
  },
  {
    title: "Comments",
    explanation:
      "Comments are notes for humans. The computer ignores them completely.",
    code: `// Single line comment - ignored by JavaScript
/* Multi-line comment
   This can span several lines */
console.log("Comments are hidden notes!"); // Prints message`,
  },
  {
    title: "Escape Sequences",
    explanation: "Use special symbols to format text output.",
    code: `// \\n adds a New Line
console.log("Hello\\nWorld"); // Outputs Hello and World on two lines

// \\t adds a Tab space
console.log("Name:\\tAlex"); // Adds tab before Alex`,
  },
  {
    title: "Math Object",
    explanation:
      "The Math object provides advanced mathematical constants and functions.",
    code: `// Math.PI gives the circle constant
console.log("PI: " + Math.PI); // Prints 3.141592653589793

// Math.random() generates a random number between 0 and 1
console.log("Random: " + Math.random());`,
  },
  {
    title: "Assignment Operators",
    explanation: "Shortcut operators to modify variables.",
    code: `let energy = 50; // Initialize variable
energy += 10; // Add 10 to current value
console.log("Energy: " + energy); // Print updated value`,
  },
  {
    title: "Logical Operators",
    explanation: "Used to determine logic between values.",
    code: `let isHappy = true;
let isRich = false;

// && operator checks if both conditions are true
console.log("Happy and Rich? " + (isHappy && isRich)); // false`,
  },
  {
    title: "String Methods",
    explanation: "Actions you can perform on text strings.",
    code: `let text = "JavaScript";

// Count characters
console.log(text.length); // Outputs 10

// Convert text to uppercase
console.log(text.toUpperCase()); // Outputs "JAVASCRIPT"`,
  },
  {
    title: "String Literal",
    explanation: "Use backticks (\`) to inject variables directly into text.",
    code: `let user = "Alex";

// Use \${} inside backticks to insert variable value
console.log(\`Welcome to the system, \${user}!\`); // Outputs "Welcome to the system, Alex!"`,
  },
  {
    title: "If Statement",
    explanation: "Decision making: only runs code if a condition is true.",
    code: `let age = 15;

// Check if age is 10 or above
if (age >= 10) {
  console.log("You can join the club!"); // Runs because condition is true
}`,
  },
  {
    title: "Switch Case",
    explanation: "A cleaner way to check multiple specific conditions.",
    code: `let color = "Blue";

switch(color) {
  case "Blue": 
    console.log("Sky color"); // Runs because color is Blue
    break;
  case "Red": 
    console.log("Fire color"); 
    break;
}`,
  },
  {
    title: "For Loop",
    explanation: "Repeats code a specific number of times.",
    code: `// Loop from 1 to 3
for (let i = 1; i <= 3; i++) {
  console.log("Repeat Number: " + i); // Prints 1, 2, 3
}`,
  },
  {
    title: "While Loop",
    explanation: "Repeats code while a condition stays true.",
    code: `let i = 1;

// Loop while condition is true
while(i <= 3) {
  console.log("Counting: " + i); // Prints 1, 2, 3
  i++; // Increment i
}`,
  },
  {
    title: "Objects",
    explanation: "Used to store groups of related data.",
    code: `// Create an object with properties
let robot = { name: "Robo", version: 1.0 };

// Access object property
console.log(robot.name); // Outputs "Robo"`,
  },
  {
    title: "JSON",
    explanation: "A standard format for exchanging data.",
    code: `// JSON string
let json = '{"status": "active"}';

// Convert JSON string to object
let obj = JSON.parse(json);

// Access property
console.log(obj.status); // Outputs "active"`,
  },
  {
    title: "For...of",
    explanation: "Looping through elements of an array (list).",
    code: `let tools = ["Hammer", "Saw"];

// Loop through array elements
for(let t of tools) { 
  console.log(t); // Outputs Hammer, then Saw
}`,
  },
  {
    title: "forEach",
    explanation: "Runs a function for every single item in a list.",
    code: `["A", "B"].forEach(item => console.log(item)); // Outputs A and B`,
  },
  {
    title: "Function",
    explanation: "A block of code designed to perform a particular task.",
    code: `// Define function with a parameter
function hello(name) {
  console.log("Hello " + name); // Prints greeting
}

// Call function
hello("Coder");`,
  },
  {
    title: "Anonymous Function",
    explanation: "A function without a name, usually stored in a variable.",
    code: `// Store function in a variable
const greet = function() { 
  console.log("Hi!"); // Print message
};

// Call the function
greet();`,
  },
  {
    title: "Arrow Function",
    explanation: "A modern, shorter way to write functions.",
    code: `// Arrow function with parameters
const add = (a, b) => a + b;

// Call function
console.log(add(5, 5)); // Outputs 10`,
  },
  {
    title: "map()",
    explanation: "Transforms every item in an array into something new.",
    code: `let nums = [1, 2, 3];

// Double every number
let result = nums.map(n => n * 2);

// Output new array
console.log(result); // [2, 4, 6]`,
  },
  {
    title: "filter()",
    explanation: "Keeps only the items that meet a certain condition.",
    code: `let prices = [10, 50, 80];

// Keep only prices above 20
let filtered = prices.filter(p => p > 20);

// Output filtered array
console.log(filtered); // [50, 80]`,
  },
  {
    title: "reduce()",
    explanation: "Summarizes an entire list into one single value.",
    code: `let cart = [10, 10, 10];

// Sum all values starting from 0
let total = cart.reduce((sum, val) => sum + val, 0);

// Output total
console.log("Total: " + total); // 30`,
  },
  {
    title: "RegEx",
    explanation: "Regular Expressions are patterns used to search strings.",
    code: `let pattern = /java/i;

// Test string against pattern
console.log(pattern.test("JavaScript")); // true`,
  },
  // ====================== New Lessons 25-29 ======================
  {
    title: "Date Object",
    explanation: "Work with dates and times using the Date object.",
    code: `// Create a new Date object
let now = new Date();

// Output current date and time
console.log(now);

// Get specific parts
console.log("Year: " + now.getFullYear());
console.log("Month: " + (now.getMonth() + 1)); // Months are 0-based`,
  },
  {
    title: "Template Literals",
    explanation: "Easier string construction using backticks and expressions.",
    code: `let name = "Alex";
let score = 95;

// Use template literal
console.log(\`Player \${name} scored \${score} points!\`);`,
  },
  {
    title: "Array Destructuring",
    explanation: "Extract values from arrays into variables.",
    code: `let numbers = [1, 2, 3];

// Destructure array
let [a, b, c] = numbers;

console.log(a, b, c); // 1 2 3`,
  },
  {
    title: "Object Destructuring",
    explanation: "Extract values from objects into variables.",
    code: `let person = { name: "Alex", age: 25 };

// Destructure object
let { name, age } = person;

console.log(name, age); // Alex 25`,
  },
  {
    title: "Ternary Operator",
    explanation: "A short form of if-else for conditional expressions.",
    code: `let age = 18;

// Use ternary operator
let canVote = age >= 18 ? "Yes" : "No";

console.log("Can vote? " + canVote); // Yes`,
  },
];

/**
 * ============================
 * 2. Initialize Code Editor (CodeMirror)
 * Converts a textarea into a code editor with syntax highlighting
 * ============================
 */
const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "javascript",
  theme: "neo",
  lineNumbers: true,
  autoCloseBrackets: true,
});

const consoleDiv = document.getElementById("console");
let currentIdx = 0;

/**
 * ============================
 * 3. Load Sidebar Menu
 * Generates a button for each lesson in the sidebar dynamically
 * ============================
 */
const menu = document.getElementById("lesson-menu");
lessons.forEach((l, i) => {
  const btn = document.createElement("button");
  btn.className = "lesson-btn";
  btn.textContent = l.title;
  btn.onclick = () => loadLesson(i, btn);
  menu.appendChild(btn);
});

/**
 * ============================
 * 4. Load Lesson
 * Sets the editor code, updates the title, and clears the console
 * ============================
 */
function loadLesson(i, btn) {
  currentIdx = i;

  // Remove "active" class from all buttons
  document
    .querySelectorAll(".lesson-btn")
    .forEach((b) => b.classList.remove("active"));

  // Highlight selected button
  if (btn) btn.classList.add("active");

  // Load code into editor
  editor.setValue(lessons[i].code);
  document.getElementById("lesson-title").textContent = lessons[i].title;

  clearConsole();
  stopVoice();
}

/**
 * ============================
 * 5. Voice Synthesis (Text-to-Speech)
 * Reads out the lesson explanation using Web Speech API
 * ============================
 */
function playVoice() {
  stopVoice();
  const msg = new SpeechSynthesisUtterance(lessons[currentIdx].explanation);
  msg.lang = "en-US";
  msg.rate = 0.9;
  window.speechSynthesis.speak(msg);
}

function stopVoice() {
  window.speechSynthesis.cancel();
}

/**
 * ============================
 * 6. Custom Console Output
 * Overrides console.log to print to HTML console div
 * ============================
 */
console.log = function (msg) {
  const div = document.createElement("div");
  div.className = "log-line";
  div.textContent =
    "> " + (typeof msg === "object" ? JSON.stringify(msg) : msg);
  consoleDiv.appendChild(div);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

/**
 * ============================
 * 7. Run JavaScript Code (Updated with Checkmark)
 * ============================
 */
function runJS() {
  try {
    // Execute the code
    new Function(editor.getValue())();

    // 1. Show the success notification
    showSuccessToast();

    // 2. Mark the current lesson as completed
    markLessonAsDone(currentIdx);
  } catch (e) {
    console.log("ERROR: " + e.message);
  }
}

/**
 * Adds a checkmark to the active lesson button
 */
function markLessonAsDone(index) {
  const buttons = document.querySelectorAll(".lesson-btn");
  const targetBtn = buttons[index];

  // Check if checkmark already exists to avoid duplicates
  if (!targetBtn.querySelector(".check-icon")) {
    const check = document.createElement("span");
    check.className = "check-icon";
    check.innerHTML = " ✔";
    targetBtn.appendChild(check);

    // Optional: Save progress to localStorage
    localStorage.setItem(`lesson_${index}_completed`, "true");
  }
}

// Add this inside your showSuccessToast() function or keep the one from the previous step.
function showSuccessToast() {
  const toast = document.createElement("div");
  toast.className = "success-toast";
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">🎉</span>
      <div class="toast-text">
        <strong>Congratulations!</strong>
        <p>Lesson completed!</p>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

/**
 * ============================
 * 8. Clear Console
 * Removes all previous output
 * ============================
 */
function clearConsole() {
  consoleDiv.innerHTML = "";
}

/**
 * ============================
 * 9. Theme Toggle
 * Switches between Light and Dark mode, including CodeMirror theme
 * ============================
 */
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("codekids_theme", newTheme);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("codekids_theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
});

/**
 * ============================
 * 10. Auto-load First Lesson on Window Load
 * ============================
 */
window.onload = () => loadLesson(0, document.querySelector(".lesson-btn"));

/**
 * ============================
 * 11. Authentication Tabs
 * Switches between Login and Signup forms
 * ============================
 */

// Switch authentication interface
function switchAuth(type) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");

  if (type === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
  } else {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
  }
}

// Handle authentication data
function handleAuth(event, type) {
  event.preventDefault();
  let users = JSON.parse(localStorage.getItem("codekids_users")) || [];

  if (type === "signup") {
    const name = document.getElementById("s-name").value;
    const email = document.getElementById("s-email").value;
    const pass = document.getElementById("s-pass").value;

    if (users.find((u) => u.email === email)) {
      alert("This email already exists!");
      return;
    }

    users.push({ name, email, pass });
    localStorage.setItem("codekids_users", JSON.stringify(users));
    alert("Account created! You can now log in.");
    switchAuth("login");
  } else if (type === "login") {
    const email = document.getElementById("l-email").value;
    const pass = document.getElementById("l-pass").value;

    const user = users.find((u) => u.email === email && u.pass === pass);
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", user.name);

      // Hide the authentication overlay
      document.getElementById("auth-overlay").style.display = "none";
    } else {
      alert("Invalid login credentials!");
    }
  }
}

/**
 * ============================
 * 12. Authentication Handling
 * Handles Signup and Login using browser localStorage as a mock database
 * ============================
 */
function handleAuth(event, type) {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("codekids_users")) || [];

  if (type === "signup") {
    const name = document.getElementById("s-name").value.trim();
    const email = document.getElementById("s-email").value.trim().toLowerCase();
    const password = document.getElementById("s-pass").value;

    const isAlreadyRegistered = users.some((user) => user.email === email);

    if (isAlreadyRegistered) {
      alert("⚠️ This email is already registered! Please log in.");
      switchAuth("login");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("codekids_users", JSON.stringify(users));

    alert("🎉 Congratulations! Your account has been created successfully.");
    switchAuth("login");
  } else if (type === "login") {
    // Retrieve login credentials from their specific input fields
    const email = document.getElementById("l-email").value.trim().toLowerCase();
    const password = document.getElementById("l-pass").value;

    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", foundUser.name);
      enterApp(foundUser.name); // Function that hides the overlay and enters the app
    } else {
      alert("❌ Incorrect login credentials!");
    }
  }
}

/**
 * ============================
 * 13. Enter App
 * Hides the login overlay and displays a welcome message
 * ============================
 */
function enterApp(userName) {
  const overlay = document.getElementById("auth-overlay");
  overlay.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
    document.body.classList.remove("locked");

    const titleElement = document.getElementById("lesson-title");
    titleElement.innerHTML = `Welcome, <span style="color: #facc15">${userName}</span> 👋`;
  }, 500);
}

/**
 * ============================
 * 14. Auto-login if session exists
 * Automatically enters the app if user session is stored
 * ============================
 */
window.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = localStorage.getItem("currentUser");

  if (isLoggedIn === "true") {
    const overlay = document.getElementById("auth-overlay");
    overlay.style.display = "none";
    document.body.classList.remove("locked");

    document.getElementById("lesson-title").textContent =
      `Welcome, ${currentUser}! 👋`;
  }
});

/**
 * ============================
 * 15. Logout Function
 * Clears session data and reloads the page
 * ============================
 */
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  location.reload();
}