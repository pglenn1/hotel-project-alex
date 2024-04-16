$(document).ready(function() {
  $('#signupForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation here if needed

    // Show success message
    $('#successMessage').removeClass('d-none');
  });
});
