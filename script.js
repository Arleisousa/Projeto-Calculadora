function calcular(event) {
    event.preventDefault()

    let alcoolImput = document.getElementById("alcool").value
    let gasolinaImput = document.getElementById("gasolina").value
    let contentResult = document.getElementById("content-result")
    let textoResultado = document.getElementById("texto-resultado")
    let alcoolResultado = document.getElementById ("alcool-result")
    let gasolinaResultado = document.getElementById("gasolina-result")
    let calculo = (alcoolImput / gasolinaImput)

    if (calculo < 0.7) {
       textoResultado.innerHTML = "Compensa usar álcool"
    } else {
       textoResultado.innerHTML = "Compensa usar gasolina" 
    }

    gasolinaResultado.innerHTML = "Gasolina R$: " + gasolinaImput
    alcoolResultado.innerHTML = "Alcool R$: " + alcoolImput 

    contentResult.classList.remove("hide")
}