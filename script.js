// console.log(a)

function change() {
  const inp = document.querySelector(".temp-1 input").value;
  if(inp.trim() === "")
  {
    const show = document.querySelector(".container h3");
    show.innerHTML = "Please Enter Temperature Correctly"
    show.style.color = 'red'
    show.style.fontSize = '23px'
    return
  }
  const input = parseFloat(inp)

  console.log(input);
  const show = document.querySelector(".container h3");

  const a = document.querySelector(".temp-1 select");
  const selectedOption = a.options[a.selectedIndex].value;
  console.log(selectedOption);
  // show.innerHTML = input
  if (selectedOption === "cel") {
    let f = (input*(9/5))+32
    show.innerHTML = ` = °${f} hmm`
    show.style.color = 'white'
    // console.log(show)
  } else if(selectedOption==='fah') {
    let c = (input-32)*(5/9)
    show.innerHTML = ` = °${c} koi na`
    show.style.color = 'white'
    // console.log(show)
  }
  else
  {
    show.innerHTML = "Please Select Any Temperature"
    show.style.color = 'red'
    show.style.fontSize = '23px'
    
  }
}
