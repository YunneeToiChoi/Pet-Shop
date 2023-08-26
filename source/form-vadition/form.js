var formElement = document.querySelector('form')
var nameElement = formElement.querySelector('.form-input__username')
var emailElement = formElement.querySelector('.form-input__email')
var passwordElement = formElement.querySelector('.form-input__password')
var cfpasswordElement =formElement.querySelector('.form-input__confirmpassword')

var list = [nameElement,emailElement,passwordElement,cfpasswordElement]

 //  sign up
 function signup(){
    // e.preventDefault
    var name = nameElement.value;
    var email = emailElement.value;
    var password = passwordElement.value;
    var cfpassword = cfpasswordElement.value;
    var user = {
        name : name,
        email : email,
        password :password,
        cfpassword : cfpassword
    }
    var json = JSON.stringify(user);
    localStorage.setItem(user,json)
//    alert("Dang Ky Thanh Cong")
}
function login(){
    // e.preventDefault
    var name = nameElement.value;
    var email = emailElement.value;
    var password = passwordElement.value;
    var cfpassword = cfpasswordElement.value;
    var user = {
        name : name,
        email : email,
        password :password,
        cfpassword : cfpassword
    }
    var json = JSON.stringify(user);
    localStorage.getItem(user)
    var data = JSON.parse(user)
    if ( user == null){
        alert("Thông Tin Đăng Nhập Không Chính Xác")
    }
    else if(name==data.name&&email==data.email&&password==data.password){

        alert("Đăng Nhập Thành Công")
        window.location.href="index.html"
    }
    else{
        alert("Đăng Nhập Thất Bại")
    }
}
formElement.addEventListener('submit',(e)=>{  // bo su kien submit
    e.preventDefault()
  var isEmptyError =  checkEmtyError(list)
  var isEmailError =   checkEmailError(emailElement)
  var isLengthNameError =   checkLength(nameElement,3,10)
  var isLengthPasswordError = checkLength(passwordElement,6,10)
  var isLengthCfPasswordError= checkMatch(passwordElement,cfpasswordElement)

  signup()
  login()
  if (isEmptyError||isEmailError||isLengthNameError||isLengthPasswordError||isLengthCfPasswordError){
    window.location.href="login.html"
    
  }
  else{
    window.location.href="login.html"
 
    //   call api signup()
  }
   
})
function showError(input, messages){
    var parent = input.parentElement;
    var span = parent.querySelector('span')
    span.classList.add('active')
    span.innerText = messages;
}
function showSuccess(input){
    var parent = input.parentElement;
    var span = parent.querySelector('span')
    span.classList.remove('active')
    span.innerText = '';
    
}


function checkEmtyError(listInput){ // kiem tra da nhap chua
    listInput.forEach( (input) =>{
        input.value = input.value.trim()
        if (!input.value){
          return   showError(input,'Vui Long Nhap Vao Day')
        }
        else{
           return  showSuccess(input)
        }
    } )

}


//////////////////////////// 
function checkEmailError (input){  //// ktra email error
    input.value = input.value.trim()
    var regex ="^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$";
    if (!input.value){
        return showError(input,'Vui Long Nhap Vao Day')
    }
    else if (!input.value.match(regex)){
       return showError(input,'Vui Long Nhap Dung Email')
    }
    else{
        return showSuccess(input)
    }

}
 ////////////////////
 function checkLength(input,min,max) // check chieu dai ki tu
 {

    input.value = input.value.trim()
        if (!input.value){
            return showError(input, 'Vui Long Nhap Vao Day ')
        }
         if (input.value.length < min){
            showError(input,`Vui long nhap toi thieu ${min} ki tu`)
            return true
        }
       if (input.value.length >= max){
        
            showError(input,`Vui long khong nhap toi da ${max} ki tu`)
            return true
        }
        
       
             showSuccess(input)
             return false
    
        
 }
// ////////////////////
function checkMatch(input,cfinput){
    cfinput.value = cfinput.value.trim()
    input.value = input.value.trim()
    // if (!cfinput.value){
    //     return showError(input, 'Vui Long Nhap Vao Day ')

    // }
 if (input.value!=cfinput.value){
        return showError(cfinput,'Mat Khau Nhap Vao Khong Dung')
    }
    else
    {
       return showSuccess(cfinput)
    }
   
}