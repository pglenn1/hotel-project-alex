$(document).ready(function() {
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
