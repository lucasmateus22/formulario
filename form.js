function sendInfoForm(){

    let nameInfoForm = document.getElementById('name-input').value;
    let mailInfoForm = document.getElementById('mail-input').value;           
    let telInfoForm = document.getElementById('tel-input').value;
    
    let List = Array([nameInfoForm],[mailInfoForm],[telInfoForm]);

    for (let i = 0; i < List.length; i++) {
        console.log(List[i])

     document.getElementById('NameOutput').innerText = List[0];
     document.getElementById('MailOutput').innerText = List[1];
     document.getElementById('TelOutput').innerText = List[2];
        }
    };

function clearOutp(){

     let name = document.getElementById('NameOutput');
     let mail = document.getElementById('MailOutput');
     let tel = document.getElementById('TelOutput');
    
        console.log('indo')
        if (name || mail || tel != ''){
            document.getElementById('NameOutput').innerText = "";
            document.getElementById('MailOutput').innerText = "";
            document.getElementById('TelOutput').innerText = "";
        }
};
