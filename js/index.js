checkPrice(); // Checking for content
sum(); //Checking for sum
//  display discount
$("#discount").on("click", function () {
  if ($(this).is(":checked")) {
    $(".discount").css("display", "block");
  } else {
    $(".discount").css("display", "none");
  }
});
// Blocks transition by clicking on the plus
$(".nolink > span").on("click", function () {
  return false;
});
// calculating the amount
$("input").focus(function () {
  let perant = $(this).parent("td").parent("tr").attr("id");
  $("body").on("input", "input[type=text]", function () {
    let price = $(`#price-${perant}`).val();
    let quantity = $(`#quantity-${perant}`).val();
    let discount = $(`#discount-${perant}`).val();
    //calculation of discounts
    if (discount === "") {
      let result = price * quantity;
      $(`#total-${perant}`).val(result.toFixed(2));
      sum();
    } else {
      let result = (price * quantity * discount) / 100;
      $(`#total-${perant}`).val(result.toFixed(2));
      sum();
    }
  });
});
// deleting an item
$(".fa-times").on("click", function () {
  let perant = $(this).parent("td").parent("tr").attr("id");
  $(`tr[id=${perant}]`).remove();
  sum();
  checkPrice();
});

function sum() {
  let sum = 0;
  $("input[name=result]").each(function () {
    sum += parseFloat($(this).val());
  });
  $(".alert").find("span").html(sum);
}

function checkPrice() {
  if (!$("tbody").children().length) {
    $(".empty").css("display", "block");
  }
}
