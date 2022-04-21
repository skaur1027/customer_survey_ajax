function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value
  };
  // console.log(data);

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
  fetch('/api/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)

  }) 
  .then(response => response.json())
  .then((jsonData) => {
    document.querySelector("#profiles").insertAdjacentHTML('beforeend',
      ` <li>${jsonData.fullname} the ${jsonData.occupation} is ${jsonData.age}</li>`,);
    });
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
