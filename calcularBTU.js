function calcularBTU() {
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const personas = parseInt(document.getElementById("personas").value) || 0;
    const televisores = parseInt(document.getElementById("televisores").value) || 0;
    const computadoras = parseInt(document.getElementById("computadoras").value) || 0;

    if (isNaN(largo) || isNaN(ancho)) {
        document.getElementById("errorMensaje").textContent = "Por favor, ingrese el largo y el ancho.";
        document.getElementById("btuResultado").textContent = "";
        document.getElementById("aparatoRecomendado").textContent = "";
    } else {
        const btu = (largo * ancho * 600) + (personas * 500) + (televisores * 600) + (computadoras * 400);
        document.getElementById("errorMensaje").textContent = "";
        document.getElementById("btuResultado").textContent = `Valor teórico calculado: ${btu} BTU`;
        mostrarAparatoRecomendado(btu);
    }
}

function mostrarAparatoRecomendado(btuCalculado) {
    const aparatos = [9000, 12000, 18000, 24000, 36000, 48000];
    let recomendado = 0;

    for (let i = 0; i < aparatos.length; i++) {
        if (aparatos[i] >= btuCalculado) {
            recomendado = aparatos[i];
            break;
        }
    }

    document.getElementById("aparatoRecomendado").textContent = `Aparato recomendado: Aire acondicionado tipo Split de ${recomendado} BTU`;
}