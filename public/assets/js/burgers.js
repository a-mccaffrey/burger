// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {
  $("#submit").on("click", function (event) {
    event.preventDefault();

    // Enter a burger
    var burger_name = $("#burger-name").val().trim();
    console.log(burger_name);

    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        burger_name: burger_name,
      },
    });
  });

  // Devour a burger
  $("#eat-button").on("click", function () {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {
        devoured: true,
      },
    })
  });
});
