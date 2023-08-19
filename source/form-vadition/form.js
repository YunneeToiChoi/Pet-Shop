var formElement = document.querySelector('form')
var nameElement = formElement.querySelector('.form-input__username')
var emailElement = formElement.querySelector('.form-input__email')
var passwordElement = formElement.querySelector('.form-input__password')
var cfpasswordElement =formElement.querySelector('.form-input__confirmpassword')

var list = [nameElement,emailElement,passwordElement,cfpasswordElement]

formElement.addEventListener('submit',(e)=>{  // bo su kien submit
    e.preventDefault()
    checkEmtyError(list)

    checkEmailError(emailElement)
    checkLength(nameElement,3,10)
    checkLength(passwordElement,6,10)

    checkMatch(passwordElement,cfpasswordElement)


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