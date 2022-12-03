/*
   For random quotes ability
   @RobertC     Work in progress still!
*/

function  random_quote() {
    const api_id = 2;
    let result = '';



    // Build array for JSON response
    let random_quote_result = [{
        api_id: api_id,
        result: result 
    }
    ];

    return random_quote_result;

}

module.exports = {random_quote};