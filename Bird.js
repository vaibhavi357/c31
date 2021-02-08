class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    //empty array to store the bird position
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //store only the positions when velocity.x >10 and position.x > 200, to reduce smoke
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
    	//store x and y position of the bird in the position array
    //array = data type which can store multiple values in a single variable, x=[10, 20, 30] index is the position of the element inside the array
    var position = [this.body.position.x, this.body.position.y]
    //trajectory is array of arrays = [[x1,y1],[x2,y2], ....]
    this.trajectory.push(position);
    }
    
//display smoke image on the bird position
    for(var i = 0; i < this.trajectory.length; i = i + 1){
    	image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1])
    }
  }
}
