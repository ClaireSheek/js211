console.log("loading the js file")

const getUser = () => {
  console.log("sending a fetch request")
  let fetchPromise = fetch('https://randomuser.me/api?results=10');
  let jsonPromise = fetchPromise.then(function(response){
    console.log("processing the fetch request")
    console.log("response = ", response)
    return response.json()
  })
  jsonPromise.then(function(json){
    let users = json.results;
    users.forEach(function(user){

      let userCard = generateContactCard(user);
      // let div = document.createElement("div");
      // div.innerHTML = userCardhtml;


      document.getElementById("contacts").appendChild(userCard)
    })
  })

  // console.log("after sending the fetch request")
}
getUser();


const generateContactCard = (user) => {
  let contactCard = document.createElement("div");
  contactCard.className = "contactCard";

  let img = document.createElement("img");
  img.src = user.picture.medium;
  contactCard.appendChild(img);

  let name = document.createElement("h2");
  name.className="name";
  name.innerText = user.name.first + " " + user.name.last;
  name.onclick = displayToggle;
  contactCard.appendChild(name);

  let phone = document.createElement("span");
  phone.className="phone";
  phone.innerText = user.phone;
  contactCard.appendChild(phone);

  let email = document.createElement("span");
  email.className="email";
  email.innerText = user.email;
  contactCard.appendChild(email);

  return contactCard;
}


function displayToggle() { 
  let phone = this.nextElementSibling; 
  let email = phone.nextElementSibling;

  if (phone.style.display == "block") { 
      phone.style.display = "none" } 
  else { phone.style.display = "block"; 
  } 

  if (email.style.display == "block") { 
      email.style.display = "none"} 
else {email.style.display = "block"; 
} 
}



// const generateContactCard2 = (user) => {
//   return `
//  <img src = ${user.picture.thumbnail}>
// <h2 class="name">Name: ${user.name.first} ${user.name.last}</h2>
// <h2 class="phone">Phone: ${user.phone}</h2>
// <h2 class="email">Email: ${user.email}</h2> 
// `

// }


/* <img src = >
<h2 class="name">Name:</h2>
<h3></h3>
<h2 class="phone">Phone:</h2>
<h3></h3>
<h2 class="email">Email:</h2>
<h3></h3> */