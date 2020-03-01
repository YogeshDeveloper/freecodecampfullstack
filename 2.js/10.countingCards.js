var count = 0;

function cc(card){


    switch (card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
            break;
        case 7:
        case 8:
        case 9:
             break; 
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':                   
            count --;
            break;            
            
    }
    
    if (count>0)
    {
        // return count + "Bet";
        console.log(count + " Bet");
        // return count + " Bet";

    }else{
        // return count+ "Hold"; 
        // return count+ " Hold"; 
        console.log(count+ " Hold"); 

    }

}


// +1	2, 3, 4, 5, 6   Bet
// 0	7, 8, 9         Hold
// -1	10, 'J', 'Q', 'K', 'A'

// cc(2);cc(3); cc(7); cc('K'); cc('A');

cc(7);cc(8); cc(9);

// +1	2, 3, 4, 5, 6   Bet
// 0	7, 8, 9         Hold
// -1	10, 'J', 'Q', 'K', 'A'