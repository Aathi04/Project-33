var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState = "start";
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var count = 0;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",20,540);
  text("500",100,540);
  text("500",180,540);
  text("500",260,540);
  text("500",340,540);
  text("100",420,540);
  text("100",500,540);
  text("100",580,540);
  text("200",660,540);
  text("200",740,540);
  text("200",820,540);

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 */
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   // to get 500 points
   if(particle!=null){
     particle.display();
      if(particle.body.position.y>760)
      {

        if(particle.body.position.x<340)
        { 
    
          score = score + 500;
          particle = null;
          if(count >= 5) gameState = "end";

        }
      }
   }

   // to get 100 points
   if(particle!=null){
    particle.display();
     if(particle.body.position.y>760)
     {

       if(particle.body.position.x<620)
       { 
   
         score = score + 100;
         particle = null;
         if(count >= 5) gameState = "end";

       }
     }
  }

  // to get 200 points
  if(particle!=null){
    particle.display();
     if(particle.body.position.y>760)
     {

       if(particle.body.position.x<900)
       { 
   
         score = score + 200;
         particle = null;
         if(count >= 5) gameState = "end";

       }
     }
  }

  if(count >= 5)
  {
    gameState = "end";
    textSize(100);
    text("GAME OVER",100,350);
  }

}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}