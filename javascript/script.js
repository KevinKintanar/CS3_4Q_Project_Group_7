// START OF CHECKBOX TO SEE PASSWORD
function myFunction() {
  var x = document.getElementById("pword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// END OF BUTTON TO SHOW MODAL

// START OF REQUIRED FORM TAGS
document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('Name1').value.trim();
  const errorMsg1 = document.getElementById('errorMsg1');

  if (input === '') {
      errorMsg1.style.display = 'block';
      event.preventDefault();
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
      event.preventDefault(); // 
  } else {
      errorMsg2.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('Name2').value = ''; 
  document.getElementById('errorMsg2').style.display = 'none'; 
});

//----------------------------

document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('pword').value.trim();
  const errorMsg3 = document.getElementById('errorMsg3');

  if (input === '') {
      errorMsg3.style.display = 'block';
      event.preventDefault(); 
  } else {
      errorMsg3.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('pword').value = ''; 
  document.getElementById('errorMsg3').style.display = 'none'; 
});

//----------------------------

document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('email').value.trim();
  const errorMsg4 = document.getElementById('errorMsg4');

  if (input === '') {
      errorMsg4.style.display = 'block';
      event.preventDefault(); 
  } else {
      errorMsg4.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('email').value = ''; 
  document.getElementById('errorMsg4').style.display = 'none'; 
});

//----------------------------

document.getElementById('SignUp').addEventListener('submit', function(event) {
  const input = document.getElementById('paragraph').value.trim();
  const errorMsg5 = document.getElementById('errorMsg5');

  if (input === '') {
      errorMsg5.style.display = 'block';
      event.preventDefault(); 
  } else {
      errorMsg5.style.display = 'none';
  }
});

document.getElementById('resetbutton').addEventListener('click', function() {
  document.getElementById('paragraph').value = ''; 
  document.getElementById('errorMsg5').style.display = 'none'; 
});

// END OF REQUIRED FORM TAGS

// START OF SUBMISSION OF INFORMATION TO DASHBOARD 
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

      window.location.href = 'page1.html';
    }

}
// END OF SUBMISSION OF INFORMATION TO DASHBOARD 