function move (){
    right();
    right();
    if (getColor() == "blue"){
    down();
    }
    if (getColor() == "red"){
    up();
    }
}

move();
move();
move();
right();
right();
right();
