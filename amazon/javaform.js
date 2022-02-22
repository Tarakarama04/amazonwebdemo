
const reg= {
    uname:[],
    password:[],
    mobile:[],
    email:[]
}

function registrationform(){
        reg.uname.push(document.getElementById('usname').value)    
        reg.password.push(document.getElementById('pswrd').value)
        reg.mobile.push(document.getElementById('mbl').value)
        reg.email.push(document.getElementById('eml').value)
                          
}
console.log(reg.uname)

function mobilenumberdata(){

    if((document.getElementById('mbl').value<=10000000000) && (document.getElementById('mbl').value>=100000000)) {
        document.getElementById('mbl').style.color= "green"
        document.getElementById('formbutton').disabled=false;
    }else
    {
        document.getElementById('mbl').style.color="red"
        document.getElementById('formbutton').disabled=true;
    }  
}

