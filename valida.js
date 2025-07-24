function validaSenha() {
   const senha = document.getElementById("senha_usuario").value;

   const criterios = {
       val1: senha.length >= 8,
       val2: /[0-9]/.test(senha),
       val3: /[A-Z]/.test(senha),
       val4: /[a-z]/.test(senha),
       val5: /[!@#$%^&*]/.test(senha)
   };

   for (let id in criterios) {
       const item = document.getElementById(id);
       if (criterios[id]) {
           item.classList.remove("invalid");
           item.classList.add("valid");
       } else {
           item.classList.remove("valid");
           item.classList.add("invalid");
       }
   }
}

document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("senha_usuario").addEventListener("input", validaSenha);
});
