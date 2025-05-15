let username = window.prompt("enter your username:");

const loginUsername = "rahul";

if(loginUsername === username){
    console.log(`Welcome ${loginUsername}`);
    
}else if(username == "rahul"){
    console.log(`${loginUsername} and ${username} not same`);
    
}
else{
    console.log("wrong username!");
    
}