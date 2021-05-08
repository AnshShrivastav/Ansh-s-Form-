class Form {
    constructor(){
        this.input=createInput("");
        this.title=createElement('h2');
        this.button=createButton("Submit");
        this.greeting=createElement('h3')

    }

    display(){

            this. title.html("Sign-in");
            this.title.position(180,0);
            this.input.position(130,160);
            this.button.position(200,200);
            this. button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.position(200,200);
            this.greeting.html("Your Id "+ player.name);

        })
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
   }
}