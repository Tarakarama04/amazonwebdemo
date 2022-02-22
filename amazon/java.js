const  userobject= {
    username:[]

}
function usernamedata(){ 
    if( document.getElementById("user").value===""){
    alert(' invalid credentials')
    }else
    {
        userobject.username.push(document.getElementById('user').value)
      }
}
function button(){
    alert('redirecting to registration page....')
}







   
