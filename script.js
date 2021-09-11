
var qas = document.querySelectorAll('.qa');

qas.forEach(qa => {
    qa.addEventListener('click', () =>{
        let item = qa;
        qas.forEach(n => {
            if (n != item){
                n.classList.remove('active');
            }
        });
        qa.classList.toggle('active');
    })
})