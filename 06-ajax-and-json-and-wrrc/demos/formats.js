// FORMAT OF $.ajax
$.ajax({
  url:
  method:
  success:
  fail:
})

// FORMAT OF $.get
$.get(url)
  .done(successCallback)
  .fail(failureCallback)
  .always(everyTimeCallback)
  .then(nextCallback)

// FORMAT OF $.getJSON
$.getJSON(url)
  .then(successCallback, failureCallback)