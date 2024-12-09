// Initialize Firebase (ADD YOUR OWN DATA)
 // Initialize Firebase
 var firebaseConfig = {
    apiKey: "AIzaSyBUNnm8Dsc6rQR5tbq9W88336u0OJiNIEE",
    authDomain: "training-67b08.firebaseapp.com",
    databaseURL: "https://training-67b08-default-rtdb.firebaseio.com",
    projectId: "training-67b08",
    storageBucket: "training-67b08.firebasestorage.app",
    messagingSenderId: "754553438784",
    appId: "1:754553438784:web:9392a1a131909f62e095a5"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var course = getInputVal('course');

  // Save message
  saveMessage(name, company, email, phone, message, course);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message ,course){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message,
    course:course
  });
}
