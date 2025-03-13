let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msg2=document.querySelector("#msg2");
const uscore=document.querySelector("#uscore");
const cscore=document.querySelector("#cscore");
const usimg=document.querySelector("#usimg");
const csimg=document.querySelector("#csimg");

const show=(user,comp)=>
    {
    usimg.src=`E:/javascript/Rock-Paper-Scissors-Game-project advanced/${user}.png`;
    csimg.src=`E:/javascript/Rock-Paper-Scissors-Game-project advanced/${comp}.png`;

}

const count=(us,cs)=>{
    if(us===cs)
    {
        msg2.innerText="Game was draw! Points is same.";
        msg2.style.backgroundColor="#081b31";
    }
    else if(us>cs)
    {
        let c=us-cs;
        msg2.innerText=`You wining! Your score is ${c} points more than Computer`;
        msg2.style.backgroundColor="green";
    }
    else if(us<cs)
    {
        let c=cs-us;
        msg2.innerText=`You losing! Your score is ${c} points less than Computer`;
        msg2.style.backgroundColor="red";

    }
}

const gencomp=()=>{
    const op=["rock","paper","scissors"];
    const ic=Math.floor(Math.random()*3);
    return op[ic];
};

const draw=(us,cs)=>{
   msg.innerText="Game was draw! Play again.";
   msg.style.backgroundColor="#081b31";
   show(us,cs);
};

const showwinner=(usercond,user,comp)=>{
    if(usercond)
    {  
        userscore++;
        uscore.innerText=userscore;
        msg.innerText=`You win! Your ${user} beats computer ${comp}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        cscore.innerText=compscore;
        msg.innerText=`You lost! Computer ${comp} beats your ${user}`;
        msg.style.backgroundColor="red";
    }
    count(userscore,compscore);
    show(user,comp);
};

const whowin=(us)=>{
    const cs=gencomp();
    if(us===cs)
    {
        draw(us,cs);
    }
    else
    {
        userc=true;
        if(us==="rock")
        {
            userc=cs==="paper"?false:true;
        }
        else if(us==="paper")
        {
            userc=cs==="scissors"?false:true;
        }
        else
        {
            userc=cs==="rock"?false:true;
        }
        showwinner(userc,us,cs);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const us=choice.getAttribute("id");
    whowin(us);
    });
});