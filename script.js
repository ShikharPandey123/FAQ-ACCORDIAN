for(let i=1 ;i<5; i++){

        let q = document.querySelector(`#q${i}`);
        let qans=document.querySelector(`#qans${i}`);
        let plus=document.querySelector(`#plus${i}`);
        qans.style.display="none";
        plus.src="icon-plus.svg";

        q.addEventListener("click",()=>{
            if(qans.style.display==="none"){
                
                qans.style.display="block";
                plus.src="icon-minus.svg";
                document.querySelector(".FAQ_BOX").style.height="55rem";

            }
            else{
                qans.style.display="none";
                plus.src="icon-plus.svg";
                document.querySelector(".FAQ_BOX").style.height="55rem";
            }
        
        });
}

