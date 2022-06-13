let shot = document.querySelector(".shot");

let hit = document.querySelector(".hit");

let bm = document.querySelector(".bm");

document.body.addEventListener('click', shooting );

count = document.querySelector('.count strong'),

count_can = document.querySelector('.count_can strong'),

score = document.querySelector('.score strong'),

counter = 0,

counter_can = 0;

    function shooting(e){

   

    if(counter_can==15){
        alert("Игра закончена.Вы набрали "+ counter + " Баллов")
        location.reload();
       }



    let el= e.target;

        if(el.classList.contains("jar")) {

            counter++;

            count.textContent = counter;

        el.classList.add("die");

        hit.play()

        bm.play()

        } else {
    
        shot.play();
        alert("вы проиграли") // лучше убери это
        location.reload();
        bm.play()
        }
 
       

        if(el.classList.contains("die")) {

        setTimeout(again,400);

        }


        } 
     
        


        function load()  {     
            let  speed =Math.floor(Math.random() * 18)+7;
            let  speed_1 =Math.floor(Math.random() * 18)+7;
          
        counter_can++;

        count_can.textContent = counter_can;

    let element = document.querySelector(".jar");
    
    
    new Jump(element).Run(speed_1, speed, 0, -0.5 );
    
}



    function Jump(element)
    {   
    this.X = 0;
    this.Y = 0;
    this.Element = element;
    this.Refresh();
   
    }


        Jump.prototype.Run = function (ux, uy, xF, yF)
    {
    var self = this;

    var tID = setInterval(function ()
    {
        self.X += ux;
        self.Y += uy;
        ux += xF;
        uy += yF;
      
        self.Refresh();
      
        if (self.Y < 0)
        
            clearInterval(tID);

    }, 13);

}

Jump.prototype.Refresh = function ()
{
    this.Element.style.left = this.X + "px";
    this.Element.style.bottom = this.Y + "px";

}


   function again() {
    let died = document.querySelectorAll('.jar');
    died.forEach(function(item){
     item.classList.remove('die');
    
    });
  
    load()

   }
   
//Цель:что бы банка вылетала справа,добавить музыку,сделать так, что бы банка не могла долго находится на полу

function music (){
    shot.play();
}