const cambiarLog = document.getElementById("crear-cambiar")
let accederCuentaDiv = document.getElementById('acceder-container')
let crearCuentaDiv = document.getElementById('crear-container')

cambiarLog.addEventListener("click",()=>{
   accederCuentaDiv.style.display = "none"
   crearCuentaDiv.style.display = "block"

    
})