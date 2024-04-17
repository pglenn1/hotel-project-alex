$(document).ready(function() {
  // Button click event handler to insert info
  $("#insertInfoBtn").on("click", function() {
    // Set values for form fields
    $('#name').val('Alex');
    $('#email').val('pglenn1@una.edu');
    $('#phoneNumber').val('256-789-1234');
    $('#bikeBrand').val('Yamaha');
    $('input[name="skill"][value="C class"]').prop('checked', true); // Assuming 'C-Class' corresponds to 'C class' in your radio button options
  });

  // Form submission handling
  $('#registrationForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Perform form validation here if needed

    // Show success message
    $('#successMessage').removeClass('d-none');
  });

  // Button click event handler
  $("#btn").on("click", () => {
    let selectedSize;
    if ($("input:radio[name='skill']").is(":checked")) {
      selectedSize = $("input[name='skill']:checked").val();
    }
    $('#output').text(selectedSize
      ? `You selected ${selectedSize}`
      : `You haven't selected a skill class`);
  });
});
