let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': ''
  }

  const encrypt = (inputPassword) => {
    let encryptedPassword = ''
    for(char of inputPassword){
        encryptedPassword=encryptedPassword+encryptionRule[char]
    }
    return encryptedPassword
}
const decrypt = (encryptedPassword) => {
    let actualPassword = ''
    let keys=Object.keys(encryptionRule)
    let values = Object.values(encryptionRule)
    for(char of encryptedPassword){
        let requiredIndex=values.findIndex(value => value===char)
        actualPassword=actualPassword+keys[requiredIndex]
    }
    return actualPassword
}

const DB_Users=[]

    const resetsignup = () =>{
    document.getElementById('signup-firstname').value = ''
    document.getElementById('signup-lastname').value= ''
    document.getElementById('signup-email').value= ''
    document.getElementById('signup-phone').value= ''
    document.getElementById('signup-password').value= ''
    document.getElementById('signup-confirmpassword').value= ''
    }

    const resetlogin = () =>{
        document.getElementById('login-email').value = ''
        document.getElementById('login-password').value = ''
    }

    const signup = () =>{

    let firstName = document.getElementById('signup-firstname').value
    let lastName = document.getElementById('signup-lastname').value
    let email = document.getElementById('signup-email').value
    let phoneNumber = document.getElementById('signup-phone').value
    let password = document.getElementById('signup-password').value

    let signupSuccessAlert = document.getElementById('signup-alert-success')
    let signupFailureAlert = document.getElementById('signup-alert-failure')

    let userDetails = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password: encrypt(password)
    }

    DB_Users.push(userDetails)
    console.log(DB_Users)

    signupSuccessAlert.style.display = 'block'
    resetsignup();
    
}

const login = () =>{
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value

    let loginSuccessAlert = document.getElementById('login-alert-success')
    let loginFailureAlert = document.getElementById('login-alert-failure')

    // 2 Steps verification;
    // 1st Step--> Whether enteredEmail exists in the DB
    // 2nd Step--> Whether the enteredPassword matches with enteredEmail for the same user

    let currentEmail = DB_Users.find(user => user.email === enteredEmail && decrypt(user.password) === enteredPassword)
    if(currentEmail)
    {
        loginSuccessAlert.style.display = 'block'
        loginFailureAlert.style.display = 'none'
    }
    else{
        loginFailureAlert.style.display = 'block'
        loginSuccessAlert.style.display = 'none'
    }

    resetlogin();
}


