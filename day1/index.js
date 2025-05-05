let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("myh1").textContent = `Helloo! ${username}`
    
}