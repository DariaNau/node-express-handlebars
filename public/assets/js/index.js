// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {

$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newBurger = {
      name: $("#burger").val().trim(),
    };
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created a delicious burger!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
