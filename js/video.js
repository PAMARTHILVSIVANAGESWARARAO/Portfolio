

var form = document.getElementById("my-form");
  
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
        status.innerHTML = '<p class="status-success"><i class="bi bi-check-circle-fill"></i> Thanks for your submission!</p>';

      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = '<p class="status-success" ><i class="bi bi-x-circle-fill"></i> Oops! There was a problem submitting your form</p>';
        }
      })
    }
  }).catch(error => {
    status.innerHTML = '<p class="status-success" ><i class="bi bi-x-circle-fill"></i> Oops! There was a problem submitting your form</p>';
  });
}
form.addEventListener("submit", handleSubmit)