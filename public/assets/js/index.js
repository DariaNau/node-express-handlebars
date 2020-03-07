// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let newBurger = $("#burger").val().trim();
    console.log(newBurger)
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        burger: newBurger
      }
    }).then(() => {
      console.log("created a delicious burger!");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devour").on("click", function (event) {
    // Send the PUT request.
    // data("id") is ajax method that recognizes data- element of html
    let burgID = $(this).data("id");
    console.log("ID!", burgID)
    $.ajax("/api/burgers/" + burgID, {
      type: "PUT"
    }).then(
      () => {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

$(".delete").on("click", function (event) {
  // Send the PUT request.
  // data("id") is ajax method that recognizes data- element of html
  let burgID = $(this).data("id");
  console.log("ID!", burgID)
  $.ajax("/api/burgers/" + burgID, {
    type: "PUT"
  }).then(
    () => {
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
