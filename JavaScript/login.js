function signup(){
  const username=document.getElementById("user").value;
    const password=document.getElementById("pass").value;

    localStorage.setItem("UserName", username);
    localStorage.setItem("Password", password);

}

function validate(){
  const username2 = document.getElementById("username").value;
  const password2 = document.getElementById("password").value;

  const user = localStorage.getItem("UserName");
  const pass = localStorage.getItem("Password");
  
  if (username2 === user) {
    if (password2 === pass) {
      window.location.href = '../resumes-list.html';
    } else {
      alert("Wrong password");
    }
  } else {
    alert("Invalid details");
  }
}
function preback(){
  window.history.forward();

}
setTimeout("preback()", 0);
window.onunload = function() { null };