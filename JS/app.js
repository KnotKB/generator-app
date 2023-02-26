fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => {
    let advice = data.slip.advice;
    let id = data.slip.id;
    document.getElementById("adviceId").innerHTML=`Advice #${id}`;
    document.getElementById("adviceText").innerHTML=`"${advice}"`;

  })
  .catch(error => console.error(error));



