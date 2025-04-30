const count = 7;

// Vertical lines (top to center & bottom to center)
for (let i = 0; i < count; i++) {
  const x = (100 / (count + 1)) * (i + 1);
  
  const topLine = document.createElement('div');
  topLine.className = 'line v-top';
  topLine.style.left = `${x}%`;
  document.body.appendChild(topLine);

  const bottomLine = document.createElement('div');
  bottomLine.className = 'line v-bottom';
  bottomLine.style.left = `${x}%`;
  document.body.appendChild(bottomLine);
}

// Horizontal lines (left to center & right to center)
for (let i = 0; i < count; i++) {
  const y = (100 / (count + 1)) * (i + 1);

  const leftLine = document.createElement('div');
  leftLine.className = 'line h-left';
  leftLine.style.top = `${y}%`;
  document.body.appendChild(leftLine);

  const rightLine = document.createElement('div');
  rightLine.className = 'line h-right';
  rightLine.style.top = `${y}%`;
  document.body.appendChild(rightLine);
}
/////////////////////////////////////////////////////////
const circle = document.getElementById('circle');
    const cross = document.getElementById('cross');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // حركة ناعمة ومتغيرة باستمرار لصورة o.png
    function moveCircle() {
      const x = Math.random() * (screenWidth - 100);
      const y = Math.random() * (screenHeight - 100);
      circle.style.transition = "all 3s ease-in-out";
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      setTimeout(moveCircle, 3000);
    }

    // حركة مفاجئة ومتغيرة لصورة x.png
    function moveCross() {
      const x = Math.random() * (screenWidth - 100);
      const y = Math.random() * (screenHeight - 100);
      cross.style.transition = "all 1s linear";
      cross.style.left = `${x}px`;
      cross.style.top = `${y}px`;
      setTimeout(moveCross, 1000);
    }

    moveCircle();
    moveCross();
    ///////////////////////////////////
    let input1 = ""; // متغير لتخزين القيمة

    document.getElementById("in1").addEventListener("input", function(e) {
        input1 = e.target.value;
      console.log( input1);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input2 = ""; // متغير لتخزين القيمة

    document.getElementById("in2").addEventListener("input", function(e) {
        input2 = e.target.value;
      console.log( input2);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input3 = ""; // متغير لتخزين القيمة

    document.getElementById("in3").addEventListener("input", function(e) {
        input3 = e.target.value;
      console.log( input3);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input4 = ""; // متغير لتخزين القيمة

    document.getElementById("in4").addEventListener("input", function(e) {
        input4 = e.target.value;
      console.log( input4);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input5 = ""; // متغير لتخزين القيمة

    document.getElementById("in5").addEventListener("input", function(e) {
        input5 = e.target.value;
      console.log( input5);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input6 = ""; // متغير لتخزين القيمة

    document.getElementById("in6").addEventListener("input", function(e) {
        input6 = e.target.value;
      console.log( input6);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input7 = ""; // متغير لتخزين القيمة

    document.getElementById("in7").addEventListener("input", function(e) {
        input7 = e.target.value;
      console.log( input7);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input8 = ""; // متغير لتخزين القيمة

    document.getElementById("in8").addEventListener("input", function(e) {
        input8 = e.target.value;
      console.log( input8);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    let input9 = ""; // متغير لتخزين القيمة

    document.getElementById("in9").addEventListener("input", function(e) {
        input9 = e.target.value;
      console.log( input9);
      checkWinner();
      // تقدر تستخدم currentValue في أي مكان دلوقتي
    });
    
    function checkWinner() {
        const modal = document.getElementsByClassName("winner")[0];

        if (input1 && input2 && input3 && input1 == "X" && input2 == "X" && input3 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input2 && input3 && input1 == "O" && input2 == "O" && input3 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input4 && input5 && input6 && input4 == "X" && input5 == "X" && input6 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input4 && input5 && input6 && input4 == "O" && input5 == "O" && input6 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input7 && input8 && input9 && input7 == "X" && input8 == "X" && input9 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input7 && input8 && input9 && input7 == "O" && input8 == "O" && input9 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input4 && input7 && input1 == "X" && input4 == "X" && input7 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input4 && input7 && input1 == "O" && input4 == "O" && input7 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input2 && input5 && input8 && input2 == "X" && input5 == "X" && input8 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input2 && input5 && input8 && input2 == "O" && input5 == "O" && input8 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input3 && input6 && input9 && input3 == "X" && input6 == "X" && input9 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input3 && input6 && input9 && input3 == "O" && input6 == "O" && input9 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input5 && input9 && input1 == "X" && input5 == "X" && input9 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input5 && input9 && input1 == "O" && input5 == "O" && input9 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input3 && input5 && input7 && input3 == "X" && input5 == "X" && input7 == "X") {
            setTimeout(() => alert("X is the winner"), 250);
            modal.style.display = "block";
        } else if (input3 && input5 && input7 && input3 == "O" && input5 == "O" && input7 == "O") {
            setTimeout(() => alert("O is the winner"), 250);
            modal.style.display = "block";
        } else if (input1 && input2 && input3 && input4 &&input5 &&input6 &&input7 &&input8 &&input9 ) {
            setTimeout(() => alert("Draw Try Play Again"), 250);
        }
        
    }
    