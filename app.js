var typed = new Typed(".auto-type",{
    strings:[
        "Problem Solver.","Quick Learner.","Proactive."
    ],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

const menuButton = document.querySelector('.menubutton');
const sidebar = document.getElementById('mysidebar');

let isopen  = false;
menuButton.addEventListener('click',()=>{

    isopen = !isopen;
    if(isopen==true){
        sidebar.style.opacity="1";
        sidebar.style.height="270px";
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.justifyContent="center";
    sidebar.style.alignItems="center";
    sidebar.classList.toggle('visible')
    }
    else{
        sidebar.style.opacity="0";
        sidebar.style.height="0";
    }
   
    
})
