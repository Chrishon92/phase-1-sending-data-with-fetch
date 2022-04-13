function submitData(name, email) {
   return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
        },
            body: JSON.stringify({
                name,
                email
              })
           }) 
           .then(function (response) {
            return response.json();
          })
          .then(function (object) {
            console.log(object);
          });
    };
    
    const apndFunc = document.querySelector('body')
    apndFunc.append("Some text")

console.log(apndFunc.value) // "Some text"