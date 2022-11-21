/*
   Testing export of functions to give code structure a more flexible codebase! 
   @RobertC 11/19/2022  Updated on 11/20/2022
*/

function count(start_value, end_value) {
    const api_id = 1;
    let result = '';

    // If parameters are null!
    if(start_value == 'undefined' || end_value == 'undefined'){
        result = 'Sorry no input values to count from!';   
    }
    if(start_value == 0 || end_value == 0){
        result = 'Sorry no input values to count from!';   
    }
    // If parameters are not int!
    if(start_value > 0 && end_value > 0){
        result = 'Ok I can count now give me a minute....'; 
        // Run the count now...  
    }

    // Build array for JSON response
    let count_result = [{
        api_id: api_id,
        result: result
    }
    ];

    return count_result;
}

module.exports = {count};