/*

1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

*/


btnClick = () => {
    const textInput = document.querySelector(".click").value;
    document
        .getElementById("btnToClick")
        .addEventListener("click", handleClick(textInput));
};
  
  let handleClick = (event) => {
      console.log(event);
  };
  
  function getFocus() {
    let textInput = document.querySelector(".focus").value;
    document.querySelector(".focus").focus(console.log(textInput));
  }
  
  window.onload = function () {
    const input = document.querySelector(".value");
  
    if (input) {
      input.addEventListener("input", updateValue);
    }
  };
  
  function updateValue(element) {
    console.log(element.srcElement.value);
  }