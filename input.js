function changerTypeInput(){
    let pass = document.getElementById('Pass-input');

    if(pass.length < 8){
        alert("min 8(eigth) digits")
    }else{
        if(pass.type == "password"){
            pass.type = "text"
        }else{
            pass.type = "password"
        }
    }
};
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
function lengthMin(){
    let input = document.querySelector('.formInput').value;
    if(input == ""){
        alert("fill in all fields")
    }
  }

document.getElementById('name-input').addEventListener('input', function(event){
    var nameInput = event.target.value;
    const letters = /^[A-Za-z]+$/;
    if(!nameInput.match(letters)){
        event.target.value = nameInput.replace(/[^A-Za-z]/g, '');
    }
})