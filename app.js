let btn = document.querySelector('.btn');
const input = document.getElementById('input-box');
let res = document.getElementById('result');

let typeInput = document.getElementById('type-box');






btn.addEventListener('click',(e)=>{
let typeIn = typeInput.value;
    console.log(typeIn);
    if(typeIn=="master"){

        let initialInput = input.value;
        
        let final = "https://htmlpreview.github.io/?"+`${initialInput}`+"/blob/master/index.html";
        res.innerHTML = final;
    }
    else if(typeIn=="main"){
        let initialInput = input.value;

        //matching tree
        if(initialInput.match("tree")){
            console.log("blob or tree found");
        
        let notFinal = "https://htmlpreview.github.io/?"+`${initialInput}`+"/index.html";
        let final = notFinal.replace("tree","blob");
        res.innerHTML=final;
    }
    //matching blob
        else if(initialInput.match("blob")){
            console.log("blob or tree found");
        
        let notFinal = "https://htmlpreview.github.io/?"+`${initialInput}`+"/index.html";
        let final = notFinal.replace("tree","blob");
        res.innerHTML=final;
    }
    else {
        let notFinal = "https://htmlpreview.github.io/?"+`${initialInput}`+"/blob/main/index.html";
        res.innerHTML=notFinal;
        
    }
}


    e.preventDefault();
});