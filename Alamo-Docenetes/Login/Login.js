window.onload = inicializar;
var userl;

function inicializar() {
    userl = document.getElementById("Login")
    userl.addEventListener("submit", autentificar, false);
}
function autentificar (event) {
    event.preventDefault();
    var user = event.target.email.value;
    var password = event.target.password.value;

firebase.auth().signInWithEmailAndPassword(user, password)
    .then(function(result) {
        window.location.href = "../Inicio/Inicio.html";
    })
    .catch(function(error) {
        console.log("Login Error");
         $("#error-modal").modal();
        });
}
