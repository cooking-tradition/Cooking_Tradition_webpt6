window.onload = function(){
    document.querySelector('.cont_modal').className = "cont_modal";    
    }
    let i = 0;
    function open_close(){
      if(i % 2 == 0){    
    document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";  
    i++;
      }else {
    document.querySelector('.cont_modal').className = "cont_modal";  
    i++;    
      }  
    }