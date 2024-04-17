$(document).ready(function() {
  // Fetch JSON data
  $.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
      // Display fetched data
      $('#userData').html(`
        <p>Name: ${data.name}</p>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>Bike Brand: ${data.brand}</p>
        <p>Class: ${data.class}</p>
      `);
    },
    error: function(xhr, status, error) {
      console.error(status, error);
      $('#userData').text('Error fetching data');
    }
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
