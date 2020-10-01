const total = $("#total");

$("#sell").on("click", function () {
  if ($(this).is(":checked")) {
    $(".sell").css("display", "block");
  } else {
    $(".sell").css("display", "none");
  }
});

$(".nolink > span").on("click", function () {
  return false; // это отменит переход по ссылке.
});
$("input").focus(function () {
  let perant = $(this).parent("td").parent("tr").attr("id");
  $("body").on("input", "input[type=text]", function () {
    let price = $(`#price-${perant}`).val();
    let quantity = $(`#quantity-${perant}`).val();
    let result = price * quantity;
    $(`#total-${perant}`).val(result);
    sum();
  });
});

function sum() {
  let sum = 0;
  $("input[name=result]").each(function () {
    sum += parseFloat($(this).val());
  });
  $(".alert").find("span").html(sum);
}

$(".fa-times").on("click", function () {
  let perant = $(this).parent("td").parent("tr").attr("id");
  $(`tr[id=${perant}]`).remove();
  sum();
  checkPrice();
});

function checkPrice() {
  if (!$("tbody").children().length) {
    $(".empty").css("display", "block");
  }
}


