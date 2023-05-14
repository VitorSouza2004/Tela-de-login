function logar() {
  const Username = document.getElementById("Username").value;
  const password = document.getElementById("password").value;

  if (Username == "Vitor" && password == "admin") {
    alert("Você foi logado com sucesso");
    window.location.href = "./logado.html";
  } else {
    alert("Usuario ou senha incorretos");
  }
}
