document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-persona");
    const tablaBody = document.getElementById("tabla-body");
    const mensajeVacio = document.getElementById("no-data");
    let contador = 1;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add("was-validated");
            return;
        }

        const estado = document.querySelector("input[name='estado']:checked");
        if (!estado) {
            alert("Selecciona un estado civil.");
            return;
        }
        
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const edad = document.getElementById("edad").value.trim();
        const genero = document.getElementById("genero").value;

        const preferenciasSeleccionadas = [];
        document.querySelectorAll("input[name='preferencias']:checked").forEach((element) => {
            preferenciasSeleccionadas.push(element.value);
        });

        if (mensajeVacio) {
            mensajeVacio.remove();
        }

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${contador++}</td>
            <td>${nombre} ${apellido}</td>
            <td>${correo}</td>
            <td>${edad}</td>
            <td>${genero === "M" ? "Masculino" : "Femenino"}</td>
            <td>${preferenciasSeleccionadas.join(", ") || "Ninguna"}</td>
            <td>${estado.value}</td>
        `;

        tablaBody.appendChild(fila);

        form.reset();
        form.classList.remove("was-validated");
    });
});
