document.getElementById("gpaForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var semester = document.getElementById("semester").value;
    var ce = 0;
    var a1 = 0,
      a2 = 0,
      a3 = 0,
      a4 = 0,
      a5 = 0,
      a6 = 0,
      a7 = 0,
      a8 = 0,
      a9 = 0;
    var b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0,
      b7 = 0,
      b8 = 0,
      b9 = 0,
      b10 = 0;
    if (semester == 1) {
      var a1p = prompt("Enter the grade in Professional English - I:");
      var a2p = prompt("Enter the grade in Matrices and Calculus:");
      var a3p = prompt("Enter the grade in Engineering Physics:");
      var a4p = prompt("Enter the grade in Engineering Chemistry:");
      var a5p = prompt("Enter the grade in Python Programming:");
      var a6p = prompt("Enter the grade in Heritage of Tamils:");
      var a7p = prompt("Enter the grade in Python Programming Laboratory:");
      var a8p = prompt("Enter the grade in Physics and Chemistry Laboratory:");
      var a9p = prompt("Enter the grade in English Laboratory:");
      // For HS3152
      if (a1p == "O" || a1p == "o" || a1p == "10") {
        ce += 3;
        a1 += 30;
      }
      if (a1p == "A+" || a1p == "a+" || a1p == "9") {
        ce += 3;
        a1 += 27;
      }
      if (a1p == "A" || a1p == "a" || a1p == "8") {
        ce += 3;
        a1 += 24;
      }
      if (a1p == "B+" || a1p == "b+" || a1p == "7") {
        ce += 3;
        a1 += 21;
      }
      if (a1p == "B" || a1p == "b" || a1p == "6") {
        ce += 3;
        a1 += 18;
      }
      if (a1p == "C" || a1p == "c" || a1p == "5") {
        ce += 3;
        a1 += 15;
      } else {
        ce += 0;
      }
      // For MA3151
      if (a2p == "O" || a2p == "o" || a2p == "10") {
        ce += 4;
        a2 += 40;
      }
      if (a2p == "A+" || a2p == "a+" || a2p == "9") {
        ce += 4;
        a2 += 36;
      }
      if (a2p == "A" || a2p == "a" || a2p == "8") {
        ce += 4;
        a2 += 32;
      }
      if (a2p == "B+" || a2p == "b+" || a2p == "7") {
        ce += 4;
        a2 += 28;
      }
      if (a2p == "B" || a2p == "b" || a2p == "6") {
        ce += 4;
        a2 += 24;
      }
      if (a2p == "C" || a2p == "c" || a2p == "5") {
        ce += 4;
        a2 += 20;
      } else {
        ce += 0;
      }
      // For PH3151
      if (a3p == "O" || a3p == "o" || a3p == "10") {
        ce += 3;
        a3 += 30;
      }
      if (a3p == "A+" || a3p == "a+" || a3p == "9") {
        ce += 3;
        a3 += 27;
      }
      if (a3p == "A" || a3p == "a" || a3p == "8") {
        ce += 3;
        a3 += 24;
      }
      if (a3p == "B+" || a3p == "b+" || a3p == "7") {
        ce += 3;
        a3 += 21;
      }
      if (a3p == "B" || a3p == "b" || a3p == "6") {
        ce += 3;
        a3 += 18;
      }
      if (a3p == "C" || a3p == "c" || a3p == "5") {
        ce += 3;
        a3 += 15;
      } else {
        ce += 0;
      }
      // For CY3151
      if (a4p == "O" || a4p == "o" || a4p == "10") {
        ce += 3;
        a4 += 30;
      }
      if (a4p == "A+" || a4p == "a+" || a4p == "9") {
        ce += 3;
        a4 += 27;
      }
      if (a4p == "A" || a4p == "a" || a4p == "8") {
        ce += 3;
        a4 += 24;
      }
      if (a4p == "B+" || a4p == "b+" || a4p == "7") {
        ce += 3;
        a4 += 21;
      }
      if (a4p == "B" || a4p == "b" || a4p == "6") {
        ce += 3;
        a4 += 18;
      }
      if (a4p == "C" || a4p == "c" || a4p == "5") {
        ce += 3;
        a4 += 15;
      } else {
        ce += 0;
      }
      // For GE3151
      if (a5p == "O" || a5p == "o" || a5p == "10") {
        ce += 3;
        a5 += 30;
      }
      if (a5p == "A+" || a5p == "a+" || a5p == "9") {
        ce += 3;
        a5 += 27;
      }
      if (a5p == "A" || a5p == "a" || a5p == "8") {
        ce += 3;
        a5 += 24;
      }
      if (a5p == "B+" || a5p == "b+" || a5p == "7") {
        ce += 3;
        a5 += 21;
      }
      if (a5p == "B" || a5p == "b" || a5p == "6") {
        ce += 3;
        a5 += 18;
      }
      if (a5p == "C" || a5p == "c" || a5p == "5") {
        ce += 3;
        a5 += 15;
      } else {
        ce += 0;
      }
      // For GE3152
      if (a6p == "O" || a6p == "o" || a6p == "10") {
        ce += 1;
        a6 += 10;
      }
      if (a6p == "A+" || a6p == "a+" || a6p == "9") {
        ce += 1;
        a6 += 9;
      }
      if (a6p == "A" || a6p == "a" || a6p == "8") {
        ce += 1;
        a6 += 8;
      }
      if (a6p == "B+" || a6p == "b+" || a6p == "7") {
        ce += 1;
        a6 += 7;
      }
      if (a6p == "B" || a6p == "b" || a6p == "6") {
        ce += 1;
        a6 += 6;
      }
      if (a6p == "C" || a6p == "c" || a6p == "5") {
        ce += 1;
        a6 += 5;
      } else {
        ce += 0;
      }
      // For GE3171
      if (a7p == "O" || a7p == "o" || a7p == "10") {
        ce += 2;
        a7 += 20;
      }
      if (a7p == "A+" || a7p == "a+" || a7p == "9") {
        ce += 2;
        a7 += 18;
      }
      if (a7p == "A" || a7p == "a" || a7p == "8") {
        ce += 2;
        a7 += 16;
      }
      if (a7p == "B+" || a7p == "b+" || a7p == "7") {
        ce += 2;
        a7 += 14;
      }
      if (a7p == "B" || a7p == "b" || a7p == "6") {
        ce += 2;
        a7 += 12;
      }
      if (a7p == "C" || a7p == "c" || a7p == "5") {
        ce += 2;
        a7 += 10;
      } else {
        ce += 0;
      }
      // For BS3171
      if (a8p == "O" || a8p == "o" || a8p == "10") {
        ce += 2;
        a8 += 20;
      }
      if (a8p == "A+" || a8p == "a+" || a8p == "9") {
        ce += 2;
        a8 += 18;
      }
      if (a8p == "A" || a8p == "a" || a8p == "8") {
        ce += 2;
        a8 += 16;
      }
      if (a8p == "B+" || a8p == "b+" || a8p == "7") {
        ce += 2;
        a7 += 14;
      }
      if (a8p == "B" || a8p == "b" || a8p == "6") {
        ce += 2;
        a8 += 12;
      }
      if (a8p == "C" || a8p == "c" || a8p == "5") {
        ce += 2;
        a8 += 10;
      } else {
        ce += 0;
      }
      // For GE3172
      if (a9p == "O" || a9p == "o" || a9p == "10") {
        ce += 1;
        a9 += 10;
      }
      if (a9p == "A+" || a9p == "a+" || a9p == "9") {
        ce += 1;
        a9 += 9;
      }
      if (a9p == "A" || a9p == "a" || a9p == "8") {
        ce += 1;
        a9 += 8;
      }
      if (a9p == "B+" || a9p == "b+" || a9p == "7") {
        ce += 1;
        a9 += 7;
      }
      if (a9p == "B" || a9p == "b" || a9p == "6") {
        ce += 1;
        a9 += 6;
      }
      if (a9p == "C" || a9p == "c" || a9p == "5") {
        ce += 1;
        a9 += 5;
      } else {
        ce += 0;
      }
      var gpa = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9) / ce;
      var rvalue = Math.round(gpa * 100) / 100;
      if (gpa == rvalue) {
        document.getElementById("result").innerHTML =
          "GPA of Semester 1 is " + gpa;
      } else {
        document.getElementById("result").innerHTML =
          "GPA of Semester 1 is " + gpa + " or " + rvalue;
      }
    } else if (semester == 2) {
      var b1p = prompt("Enter the grade in Professional English - II:");
      var b2p = prompt("Enter the grade in Statistics and Numerical Methods:");
      var b3p = prompt("Enter the grade in Physics for Information Science:");
      var b4p = prompt(
        "Enter the grade in Basic Electrical and Electronics Engineering:",
      );
      var b5p = prompt("Enter the grade in Engineering Graphics:");
      var b6p = prompt("Enter the grade in Programming in C:");
      var b7p = prompt("Enter the grade in Tamils and Technology:");
      var b8p = prompt("Enter the grade in Engineering Practices Laboratory:");
      var b9p = prompt("Enter the grade in Programming in C Laboratory:");
      var b10p = prompt("Enter the grade in Communication Laboratory:");
      // For HS3252
      if (b1p == "O" || b1p == "o" || b1p == "10") {
        ce += 2;
        b1 += 20;
      }
      if (b1p == "A+" || b1p == "a+" || b1p == "9") {
        ce += 2;
        b1 += 18;
      }
      if (b1p == "A" || b1p == "a" || b1p == "8") {
        ce += 2;
        b1 += 16;
      }
      if (b1p == "B+" || b1p == "b+" || b1p == "7") {
        ce += 2;
        b1 += 14;
      }
      if (b1p == "B" || b1p == "b" || b1p == "6") {
        ce += 2;
        b1 += 12;
      }
      if (b1p == "C" || b1p == "c" || b1p == "5") {
        ce += 2;
        b1 += 10;
      } else {
        ce += 0;
      }
      // For MA3251
      if (b2p == "O" || b2p == "o" || b2p == "10") {
        ce += 4;
        b2 += 40;
      }
      if (b2p == "A+" || b2p == "a+" || b2p == "9") {
        ce += 4;
        b2 += 36;
      }
      if (b2p == "A" || b2p == "a" || b2p == "8") {
        ce += 4;
        b2 += 32;
      }
      if (b2p == "B+" || b2p == "b+" || b2p == "7") {
        ce += 4;
        b2 += 28;
      }
      if (b2p == "B" || b2p == "b" || b2p == "6") {
        ce += 4;
        b2 += 24;
      }
      if (b2p == "C" || b2p == "c" || b2p == "5") {
        ce += 4;
        b2 += 20;
      } else {
        ce += 0;
      }
      // For PH3256
      if (b3p == "O" || b3p == "o" || b3p == "10") {
        ce += 3;
        b3 += 30;
      }
      if (b3p == "A+" || b3p == "a+" || b3p == "9") {
        ce += 3;
        b3 += 27;
      }
      if (b3p == "A" || b3p == "a" || b3p == "8") {
        ce += 3;
        b3 += 24;
      }
      if (b3p == "B+" || b3p == "b+" || b3p == "7") {
        ce += 3;
        b3 += 21;
      }
      if (b3p == "B" || b3p == "b" || b3p == "6") {
        ce += 3;
        b3 += 18;
      }
      if (b3p == "C" || b3p == "c" || b3p == "5") {
        ce += 3;
        b3 += 15;
      } else {
        ce += 0;
      }
      // For BE3251
      if (b4p == "O" || b4p == "o" || b4p == "10") {
        ce += 3;
        b4 += 30;
      }
      if (b4p == "A+" || b4p == "a+" || b4p == "9") {
        ce += 3;
        b4 += 27;
      }
      if (b4p == "A" || b4p == "a" || b4p == "8") {
        ce += 3;
        b4 += 24;
      }
      if (b4p == "B+" || b4p == "b+" || b4p == "7") {
        ce += 3;
        b4 += 21;
      }
      if (b4p == "B" || b4p == "b" || b4p == "6") {
        ce += 3;
        b4 += 18;
      }
      if (b4p == "C" || b4p == "c" || b4p == "5") {
        ce += 3;
        b4 += 15;
      } else {
        ce += 0;
      }
      // For GE3251
      if (b5p == "O" || b5p == "o" || b5p == "10") {
        ce += 4;
        b5 += 40;
      }
      if (b5p == "A+" || b5p == "a+" || b5p == "9") {
        ce += 4;
        b5 += 36;
      }
      if (b5p == "A" || b5p == "a" || b5p == "8") {
        ce += 4;
        b5 += 32;
      }
      if (b5p == "B+" || b5p == "b+" || b5p == "7") {
        ce += 4;
        b5 += 28;
      }
      if (b5p == "B" || b5p == "b" || b5p == "6") {
        ce += 4;
        b5 += 24;
      }
      if (b5p == "C" || b5p == "c" || b5p == "5") {
        ce += 4;
        b5 += 20;
      } else {
        ce += 0;
      }
      // For CS3251
      if (b6p == "O" || b6p == "o" || b6p == "10") {
        ce += 3;
        b6 += 30;
      }
      if (b6p == "A+" || b6p == "a+" || b6p == "9") {
        ce += 3;
        b6 += 27;
      }
      if (b6p == "A" || b6p == "a" || b6p == "8") {
        ce += 3;
        b6 += 24;
      }
      if (b6p == "B+" || b6p == "b+" || b6p == "7") {
        ce += 3;
        b6 += 21;
      }
      if (b6p == "B" || b6p == "b" || b6p == "6") {
        ce += 3;
        b6 += 18;
      }
      if (b6p == "C" || b6p == "c" || b6p == "5") {
        ce += 3;
        b6 += 15;
      } else {
        ce += 0;
      }
      // For GE3252
      if (b7p == "O" || b7p == "o" || b7p == "10") {
        ce += 1;
        b7 += 10;
      }
      if (b7p == "A+" || b7p == "a+" || b7p == "9") {
        ce += 1;
        b7 += 9;
      }
      if (b7p == "A" || b7p == "a" || b7p == "8") {
        ce += 1;
        b7 += 8;
      }
      if (b7p == "B+" || b7p == "b+" || b7p == "7") {
        ce += 1;
        b7 += 7;
      }
      if (b7p == "B" || b7p == "b" || b7p == "6") {
        ce += 1;
        b7 += 6;
      }
      if (b7p == "C" || b7p == "c" || b7p == "5") {
        ce += 1;
        b7 += 5;
      } else {
        ce += 0;
      }
      // For GE3271
      if (b8p == "O" || b8p == "o" || b8p == "10") {
        ce += 2;
        b8 += 20;
      }
      if (b8p == "A+" || b8p == "a+" || b8p == "9") {
        ce += 2;
        b8 += 18;
      }
      if (b8p == "A" || b8p == "a" || b8p == "8") {
        ce += 2;
        b8 += 16;
      }
      if (b8p == "B+" || b8p == "b+" || b8p == "7") {
        ce += 2;
        b8 += 14;
      }
      if (b8p == "B" || b8p == "b" || b8p == "6") {
        ce += 2;
        b8 += 12;
      }
      if (b8p == "C" || b8p == "c" || b8p == "5") {
        ce += 2;
        b8 += 10;
      } else {
        ce += 0;
      }
      // For CS3271
      if (b9p == "O" || b9p == "o" || b9p == "10") {
        ce += 2;
        b9 += 20;
      }
      if (b9p == "A+" || b9p == "a+" || b9p == "9") {
        ce += 2;
        b9 += 18;
      }
      if (b9p == "A" || b9p == "a" || b9p == "8") {
        ce += 2;
        b9 += 16;
      }
      if (b9p == "B+" || b9p == "b+" || b9p == "7") {
        ce += 2;
        b9 += 14;
      }
      if (b9p == "B" || b9p == "b" || b9p == "6") {
        ce += 2;
        b9 += 12;
      }
      if (b9p == "C" || b9p == "c" || b9p == "5") {
        ce += 2;
        b9 += 10;
      } else {
        ce += 0;
      }
      // For GE3272
      if (b10p == "O" || b10p == "o" || b10p == "10") {
        ce += 2;
        b10 += 20;
      }
      if (b10p == "A+" || b10p == "a+" || b10p == "9") {
        ce += 2;
        b10 += 18;
      }
      if (b10p == "A" || b10p == "a" || b10p == "8") {
        ce += 2;
        b10 += 16;
      }
      if (b10p == "B+" || b10p == "b+" || b10p == "7") {
        ce += 2;
        b10 += 14;
      }
      if (b10p == "B" || b10p == "b" || b10p == "6") {
        ce += 2;
        b10 += 12;
      }
      if (b10p == "C" || b10p == "c" || b10p == "5") {
        ce += 2;
        b10 += 10;
      } else {
        ce += 0;
      }
      var gpa = (b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10) / ce;
      var rvalue = Math.round(gpa * 100) / 100;
      if (gpa == rvalue) {
        document.getElementById("result").innerHTML =
          "GPA of Semester 2 is " + gpa;
      } else {
        document.getElementById("result").innerHTML =
          "GPA of Semester 2 is " + gpa + " or " + rvalue;
      }
    } else {
      document.getElementById("result").innerHTML =
        "Restart and Enter the valid Semester No.";
    }
  });
  