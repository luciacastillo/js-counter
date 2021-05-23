//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach (function (btn){
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        if(count>0){
            value.style.color = '#27541d';
        }
        if(count<0){
            value.style.color = '#661121';
        }
        if(count===0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });
      
});