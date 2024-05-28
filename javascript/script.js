// SUBMISSION
function submitForm(event) {
  if (document.getElementById('Name1').value !== "" && document.getElementById('Name2').value !== "" && document.getElementById('pword').value !== "" && document.getElementById('email').value !== "" && document.getElementById('paragraph').value !== "" ) {
      event.preventDefault();

      const Fname = document.getElementById('Name1').value;
      localStorage.setItem('FirstName', Fname);

      const Lname = document.getElementById('Name2').value;
      localStorage.setItem('LastName', Lname);

      const Gender = document.querySelector("input[name='Sex']:checked");
      localStorage.setItem('Gender1', Gender.value);

      const Email = document.getElementById('email').value;
      localStorage.setItem('Email', Email);

      const Paragraph = document.getElementById('paragraph').value;
      localStorage.setItem('Paragraph', Paragraph);

      window.location.href = '/html/page1.html';
    }

}


// REQUIRED FORM SUBMISSION
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('Name1').value.trim();
  const errorMsg1 = document.getElementById('errorMsg1');

  if (input === '') {
      errorMsg1.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorMsg1.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('Name1').value = ''; // Clear the input field
  document.getElementById('errorMsg1').style.display = 'none'; // Hide the error message
});

//----------------------------
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('Name2').value.trim();
  const errorMsg2 = document.getElementById('errorMsg2');

  if (input === '') {
      errorMsg2.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorMsg2.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('Name2').value = ''; // Clear the input field
  document.getElementById('errorMsg2').style.display = 'none'; // Hide the error message
});

//----------------------------
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('pword').value.trim();
  const errorMsg3 = document.getElementById('errorMsg3');

  if (input === '') {
      errorMsg3.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorMsg3.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('pword').value = ''; // Clear the input field
  document.getElementById('errorMsg3').style.display = 'none'; // Hide the error message
});

//----------------------------
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('email').value.trim();
  const errorMsg4 = document.getElementById('errorMsg4');

  if (input === '') {
      errorMsg4.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorMsg4.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('email').value = ''; // Clear the input field
  document.getElementById('errorMsg4').style.display = 'none'; // Hide the error message
});

//----------------------------
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('paragraph').value.trim();
  const errorMsg5 = document.getElementById('errorMsg5');

  if (input === '') {
      errorMsg5.style.display = 'block';
      event.preventDefault(); // Prevent form submission
  } else {
      errorMsg5.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('paragraph').value = ''; // Clear the input field
  document.getElementById('errorMsg5').style.display = 'none'; // Hide the error message
});










// REQUIRED FORM SUBMISSION
// TO SHOW PASSWORD
function myFunction() {
  var x = document.getElementById("pword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// TECHNICAL STUFF
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

