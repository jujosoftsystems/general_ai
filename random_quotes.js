/*
   For random quotes ability
   @RobertC     Work in progress still!
*/

function  random_quote() {
    const api_id = 2;
    let result = '';

    // Generate random seed
    let rand_quote_num = Math.floor(Math.random() * 20);
    // Spice up random seed
    if(rand_quote_num > 0 && rand_quote_num < 5){
        rand_quote_num = rand_quote_num + 1;
    }

    if(rand_quote_num > 6 && rand_quote_num < 11){
        rand_quote_num = rand_quote_num + 3;
    }

    if(rand_quote_num > 12){
        rand_quote_num = rand_quote_num - 2;
    }
    
    //result = rand_quote_num;
    
    // Switch for actual quotes will go below this line!
    switch(rand_quote_num) {
        case 1:
            result = "Life is great live it to the max.";
            break;
        case 2:
            result = "Rainy days are for soup.";
            break;
        case 3:
            result = "If life gives you lemons make lemonade.";
            break;
        default:
            result = "Can think of anything right now sorry!";
    } 


    // Build array for JSON response
    let random_quote_result = [{
        api_id: api_id,
        result: result 
    }
    ];

    return random_quote_result;

}

module.exports = {random_quote};
