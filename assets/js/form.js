// form-handler.js

// (function() {
//     emailjs.init("YOUR_PUBLIC_KEY"); 
//   })();
  
//   document.getElementById("contact-form").addEventListener("submit", function(e) {
//     e.preventDefault();
  
//     const templateParams = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       subject: document.getElementById("subject").value,
//       message: document.getElementById("comment").value
//     };
  
//     emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
//       .then(function(response) {
//         alert("Message sent successfully!");
//       }, function(error) {
//         console.error("FAILED...", error);
//         alert("Failed to send message.");
//       });
//   });
  