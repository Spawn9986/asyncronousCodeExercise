///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// How to play
// Issue commands to your runner inside the yourCode function

// runner.moveRight() // moves right
// runner.moveLeft()  // moves left
// runner.speedUp()   // speeds up
// runner.slowDown()  // slows down

// You can chain on commands to the runner object, e.g.
// runner.moveRight().speedUp().speedUp() 

// Run a command from above after a specified delay:
// after100(fn)
// after300(fn)
// after600(fn)
// after1000(fn)
// after3000(fn)
// after9000(fn)

// example: 

// after100(function(){
//     runner.moveRight()
// })

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function yourCode() {
    // ADD YOUR CODE HERE
    
    
    // Uncomment the lines below to get started
    console.log(runner);
    runner.moveRight()

    after100(function() {
        console.log('Running First Stage');
        runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
        after1000(function() {
            console.log('Running Second Stage');
            after1000(function() {
                console.log('Running Third Stage');
                runner.slowDown();
                after1000(function() {
                    console.log('Running Fourth Stage');
                   after600(function() {
                        console.log('Running Fifth Stage');
                        runner.moveLeft();
                        runner.speedUp();
                        after300(function() {
                            console.log('Running Sixth Stage');
                            runner.slowDown().slowDown().slowDown();
                            after600(function() {
                                console.log('Running Seventh Stage');
                                runner.slowDown().slowDown();
                                after1000(function() {
                                    console.log('Running Eigth Stage');
                                    runner.slowDown().slowDown().slowDown().slowDown().slowDown();
                                    after9000(function() {
                                        console.log('Running Ninth Stage');
                                        runner.slowDown();
                                        after3000(function() {
                                            console.log('Running Tenth Stage');
                                            runner.moveRight().speedUp();
                                            after3000(function() {
                                                console.log('Running Eleventh Stage');
                                                after3000(function() {
                                                    console.log('Running Twelth Stage');
                                                    after1000(function() {
                                                        console.log('Running Thirteenth Stage');
                                                        after1000(function() {
                                                            console.log('Running Fourteenth Stage');
                                                            runner.moveLeft().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
                                                            after1000(function() {
                                                                console.log('Running Fifteenth Stage');
                                                                after1000(function() {
                                                                    console.log('Running Sixteenth Stage');
                                                                    runner.moveRight().slowDown().slowDown().slowDown().slowDown();
                                                                    runner.slowDown().slowDown().slowDown().slowDown().slowDown();
                                                                    runner.slowDown().slowDown().slowDown();
                                                                    after9000(function() {
                                                                        console.log('Running Seventeenth Stage');
                                                                        after3000(function() {
                                                                            console.log('Running Eighteenth Stage');
                                                                            after3000(function() {
                                                                                console.log('Running Nineteenth Stage');
                                                                                after1000(function() {
                                                                                    console.log('Running Twentieth Stage');
                                                                                    runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
                                                                                    runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                     });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }); 
}


// uncomment the next round when you have completed the current one
//round1() // Freebie
//round2() // Warm up (HINT: You will need to start using the afterX commands)
/* after3000(function() {
    console.log('Running First Stage');
    after3000(function() {
        console.log('Running Second Stage');
        after3000(function() {
            console.log('Running Third Stage');
            after1000(function() {
                console.log('Running Fourth Stage');
                after1000(function() {
                    console.log('Running Fifth Stage');
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                    runner.speedUp();
                });
            });
        });
    });
})  */
 //round3() // Tricky
 /* after1000(function() {
    console.log('Running First Stage');
    after1000(function() {
        console.log('Running Second Stage');
        after1000(function() {
            console.log('Running Third Stage');
            after1000(function() {
                console.log('Running Fourth Stage');
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
                runner.speedUp();
               after1000(function() {
                    console.log('Running Fifth Stage');
                    after1000(function() {
                        console.log('Running Sixth Stage');
                        after1000(function() {
                            console.log('Running Seventh Stage');
                            after600(function() {
                                runner.slowDown();
                                runner.slowDown();
                                runner.slowDown();
                                console.log('Running Eigth Stage');
                            });
                        });
                    });
                });
            });
        });
    });
})  */
round4() // Hard
/* after3000(function() {
        console.log('Running First Stage');
        after1000(function() {
            console.log('Running Second Stage');
            after1000(function() {
                console.log('Running Third Stage');
                runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
                after3000(function() {
                    console.log('Running Fourth Stage');
                   after1000(function() {
                        console.log('Running Fifth Stage');
                        runner.moveLeft()
                        runner.slowDown().slowDown().slowDown();
                        after3000(function() {
                            console.log('Running Sixth Stage');
                            after1000(function() {
                                console.log('Running Seventh Stage');
                                after300(function() {
                                    console.log('Running Eigth Stage');
                                    runner.moveRight();
                                    runner.speedUp().speedUp().speedUp().speedUp().speedUp().speedUp().speedUp();
                                });
                            });
                        });
                    });
                });
            });
        });
    })  */
round5() // Nightmare


// DO NOT MODIFY
// Will stop the program whenever runner.moveRight or runner.moveLeft throws an error
yourCode()
pacer.movement(round)
// DO NOT MODIFY

/////Issues I ran into during this Project/////
/* 
1) setting it up to begin to run the functions: 
i.e., 

after100 is defined as taking in a cb as a parameter so we would need a cb as an argument also when running/ invoking it;

function after100(cb) {
    setTimeout(function () {
        console.log('running');
        cb()
    }, 100)
}

expected when running/ invoking:
Example Given:
after100(function() {
        runner.speedUp();
});

OR

Without Extra:
after100(function() {}); 

How can function() be a function argument? Where is the variable "function" that is storing the function? Phil said that we can create a new ananymous function as an 
argument by just writing function() in the argument much like myfunction() works. It's like when u dont really want to name a function bc u only really need
it for that block of code and dont plan on recycling it. When you do this you write the entire funtion in the argument parenthesis as seen above (Example given).

2) Understanding how the slow down speed up works
slowDown: function () {
        this.speed += 25;
        this.moveForward()
        return this;
    },

    speedUp: function () {
        this.speed -= 25;
        this.moveForward()
        return this;
    }
Did it change speed every 25 (some time element)?
Did it change distance and time?
How did it move, by pixels?

3) How to stack/ nest functions

Simplified version:
after3000(function() {
    after1000(function() {
    });
});

With extras included version:
after3000(function() {
    console.log('Running First Stage');
    after1000(function() {
        console.log('Running Second Stage');
        runner.speedUp();
    });
});

A simplified version without callbacks:

function a() {console.log("I am A");}
function b() {a();}

b(); 

Output: I am A

if you write function b(a()) {} or even function b(a) {a();} (even if you created a as a variable elsewhere i.e., let a = function () {console.log("I am A");}, 
it will give error bc when decalring function b you can only pass parameters (variables) not arguments so it has to be in the {}. 
Since these are global functions we can already access them inside the {}. Therefore, there is no need to pass 

4) Chaining functions
originally tried: runner.speedUp().runner.speedUp().runner.speedUp()

but correct is:
runner.speedUp().speedUp().speedUp();

5) How do I evaluate when the block changest direction or speed?
Sol'n: We inserted several stages each with a console.log() to tell us what stage he was at. When the block changed we would
look at the console to see what stage it occurred at and adjust our code

6) There were 3 main elements to this game: timing, speed, direction;
*/