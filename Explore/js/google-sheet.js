const scriptUrl = 'ADD YOUR SHEET URL'

const form = document.forms['contact-form']
form.addEventListener('submit', e=>{
    e.preventDefault();
    fetch(scriptUrl,{method:'POST',body:new FormData(form)}).then(response=>{
        if(response.ok){
            alert('Form submitted successfully!');
        }else{
            alert('An error occurred while submitting the form.');
        }
}).then(()=>{window.location.reload();})
.catch(error => console.log('Error',error.message))
})