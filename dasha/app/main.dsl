import "commonReactions/all.dsl";

context 
{
    // declare input variables here. phone must always be declared. name is optional 
    input phone: string;
    input name: string = ""; 

    // declare storage variables here 
    var1: string = "";

}

// declare external functions here 
external function function1(log: string): string;

// lines 28-42 start node 
start node root 
{
    do
    {
        #connectSafe($phone); // connecting to the phone number which is specified in index.js that it can also be in-terminal text chat
        #waitForSpeech(1000); // give the person a second to start speaking 
        #say("greeting", {name: $name} ); // and greet them. Refer to phrasemap.json > "greeting" (line 12); note the variable $name for phrasemap use
        wait *;
    }
    transitions
    {
        loan: goto loan on #messageHasIntent("loan"); // feel free to modify your own intents for "yes" and "no" in data.json
        // bye: goto bye on #messageHasIntent("no"); 
    }
}

node loan {
    do {
        #say("loan");
        #say("age");
        wait *;
    }
    transitions {
        degree: goto degree on #messageHasIntent("age");
    }
}

node degree {
    do {
        #say("degree");
        wait *;
    }
    transitions {
        yes: goto income on #messageHasIntent("yes");
        no: goto income on #messageHasIntent("no");
    }
}

node income {
    do {
        #say("income");
        wait *;
    }
    transitions {
        borrow: goto borrow on #messageHasIntent("money");
    }
}

node borrow {
    do {
        #say("borrow");
        wait *;
    }
    transitions {
        loan_type: goto loan_type on #messageHasIntent("money");
    }
}

node loan_type {
    do {
        #say("loan_type");
        wait *;
    }
    transitions {
        credit_score: goto credit_score on #messageHasIntent("loan_type");
    }
}

node credit_score {
    do {
        #say("credit_score");
        wait *;
    }
    transitions {
        yes: goto months on #messageHasIntent("yes");
        no: goto months on #messageHasIntent("no");
    }
}

node months {
    do {
        #say("months");
        wait *;
    }
    transitions {
        calculate: goto calculate on #messageHasIntent("months");
    }
}

node calculate {
    do {
        #say("loan_assess");
        #say("loan_rejected");
        #say("tips");
        wait *;
    }
    transitions {
        bye: goto bye on #messageHasIntent("yes");
    }
}

node bye {
    do {
        #say("bye");
        exit;
    }
}

digression bye {
    conditions { on #messageHasIntent("bye"); }
    do {
        #say("bye");
        exit;
    }
}

digression how_are_you
{
    conditions {on #messageHasIntent("how_are_you");}
    do 
    {
        #sayText("I'm doing great, thank you!", repeatMode: "ignore"); 
        #repeat(); // let the app know to repeat the phrase in the node from which the digression was called, when go back to the node 
        return; // go back to the node from which we got distracted into the digression 
    }
}

// node yes
// {
//     do 
//     {
//         var result = external function1("test");    //call your external function
//         #say("yes"); //call on phrase "question_1" from the phrasemap
//         exit;
//     }
// }

// node bye
// {
//     do 
//     {
//         #say("no");
//         exit;
//     }
// }


