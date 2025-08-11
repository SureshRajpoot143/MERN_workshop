document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const event = document.getElementById("event").value;

  if (name && email) {
    alert(`Registration successful!\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`);
    
    // Clear form
    document.getElementById("registrationForm").reset();
    
    // Save data (optional: localStorage or Firebase)
  } else {
    alert("Please fill all the fields.");
  }
});

document.getElementById('event').addEventListener('change', function() {
  const selectedEvent = this.value;
  const eventDetails = document.getElementById('eventDetails');

  if (selectedEvent === 'webinar') {
    eventDetails.textContent = "Join us for an insightful webinar on the latest trends in technology.";
  } else if (selectedEvent === 'workshop') {
    eventDetails.textContent = "Participate in our hands-on workshop to enhance your skills.";
  } else if (selectedEvent === 'conference') {
    eventDetails.textContent = "Attend our annual conference featuring industry leaders and networking opportunities.";
  } else {
    eventDetails.textContent = "";
  }
}); 