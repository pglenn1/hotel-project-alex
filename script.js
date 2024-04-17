$(document).ready(function() {
  // Function to populate form fields with JSON data
  function populateForm(data) {
    $('#name').val(data.name);
    $('#email').val(data.email);
    $('#phoneNumber').val(data.phone);
    $('#bikeBrand').val(data.brand);
    // Assuming "class" is the skill level
    $(`input[name='skill'][value='${data.class}']`).prop('checked', true);
  }

  // Fetch JSON data and populate form on button click
  $('#populateButton').click(function() {
    $.getJSON('data.json', function(data) {
      populateForm(data);
    }).fail(function() {
      console.error('Failed to fetch JSON data');
    });
  });

  // Registration form submission
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
