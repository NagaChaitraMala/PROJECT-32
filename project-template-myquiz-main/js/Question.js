class Question {

  constructor() {
    this.title = createElement('h2')
    this.input1 = createInput("Your name");
    this.input2 = createInput("Your Option #");
    this.button = createButton('Submit');
    this.button2 = createButton('Show correct answer');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h3");
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.button2.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("My JetSpeed Quiz:");
    this.title.position(300, 15);

    this.question.html("Question - How many days does Moon take to complete one revolution around the Earth?" );

    this.question.position(90, 80);
    this.option1.html("1) 20.1 Days" );
    this.option1.position(150, 105);
    this.option2.html("2) 25.2 Days" );
    this.option2.position(150, 125);
    this.option3.html("3) 27.3 Days" );
    this.option3.position(150, 145);
    this.option4.html("4) 29.4 Days" );
    this.option4.position(150, 165);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 280);
    this.button2.position(1000000, 1000000);

    this.button.mousePressed(()=>{ 
      this.message.html("Thank you, your answer has been submitted :]");
      this.message.position(375, 257);

      this.button2.position(510, 320);
    });

    this.button2.mousePressed(()=>{
      this.message.html("Correct answer: 3). 27.3 Days");
      this.message.position(150, 340);
    });
  }
}
