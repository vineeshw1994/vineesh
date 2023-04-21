/*var frm = document.getElementsByName('submit-to-google-sheet')[0];
$("#form").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzVpK9V2_nd6Mq1dVgKxaAMXmm8gGgb76iSFYT2nZcoiXQrPxztn6cju55yUhXoyHwK/exec",
      data: $("#form").serialize(),
      method: "post",
      success: function (response) {
        alert("Message Sent Successfully");
        frm.reset();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
  
  }
  })
  })*/
  //apoerjqp



  
  function validateName() {
    const name = document.getElementById("inputName");
    console.log('inside validate name');
  
    if (name.value.trim() == "" || !name.value.match(/^[A-Za-z]/)) {
      name.style.border = "2px solid red";
      document.getElementById("invalidName").style.visibility = "visible";
      return false;
    } else {
      name.style.border = "none"
      document.getElementById("invalidName").style.visibility = "hidden";
      return true;
    }
  }
  function validatePlace() {
    const place = document.getElementById("inputPlace");
    console.log('inside validate place');
  
    if (place.value.trim() == "" || !place.value.match(/^[A-Za-z]/)) {
      place.style.border = "2px solid red";
      document.getElementById("invalidPlace").style.visibility = "visible";
      return false;
    } else {
      place.style.border = "none"
      document.getElementById("invalidPlace").style.visibility = "hidden";
      return true;
    }
  }
  
  function validateEmail() {
    const email = document.getElementById("inputEmail");
    console.log('inside validate email');
  
    if (email.value.trim() == "" || !email.value.match(/^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/)) {
      console.log('matches');
      email.style.border = "2px solid red";
      document.getElementById("invalidEmail").style.visibility = "visible";
      return false;
    } else {
      console.log("not matching");
      email.style.border = "none"
      document.getElementById("invalidEmail").style.visibility = "hidden";
      return true;
    }
  
  }

  function validateMobile(){
    const mobile= document.getElementById("inputMobile");

    if( mobile.value.trim() =="" || !mobile.value.match(/^[0]?[6789]\d{9}$/)) {
        mobile.style.border="2px solid red";
        document.getElementById("invalidMobile").style.visibility="visible";
        return false;
    }else{
        mobile.style.border="none";
        document.getElementById("invalidMobile").style.visibility = "hidden";
        return true;

    }
  }
  
  function validateMessage() {
    const message = document.getElementById("inputMessage");
  
    if(message.value.trim() == "") {
      message.style.border = "2px solid red";
      document.getElementById("invalidMessage").style.visibility = "visible";
      return false;
    } else {
      message.style.border = "none"
      document.getElementById("invalidMessage").style.visibility = "hidden";
      return true;
    }
  }
  
  
  
  



// submission
var frm = document.getElementsByName('submit-to-google-sheet')[0];
$("#form").submit((e) => {
    e.preventDefault()
    const nameFlag = validateName();
    const placeflag = validatePlace();
    const emailFlag = validateEmail();
    const mobileFlag = validateMobile();
    const messageFlag = validateMessage();
    if (nameFlag && placeflag && emailFlag && messageFlag && mobileFlag) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzVpK9V2_nd6Mq1dVgKxaAMXmm8gGgb76iSFYT2nZcoiXQrPxztn6cju55yUhXoyHwK/exec",
      data: $("#form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        frm.reset();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")
  
      }
    })
    }
  })
