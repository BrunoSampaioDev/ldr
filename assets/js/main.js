let percent = document.querySelector('.percent');
let loading = document.querySelector('.loading');

let count = 0;
let load = setInterval(animate, 15);

function animate(){
    if(count == 100){
        loading.parentElement.removeChild(loading);
        clearInterval(load);
    }else{
        count += 1
        percent.textContent = `${count} %`;
    }
}