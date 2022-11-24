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
        result = 'Sorry input values shuld not start or end with zero!';   
    }
    // If parameters are string!
    if(typeof start_value == "string" || typeof end_value == "string"){
        result = 'Sorry input values shuld not be a string!';  
    }
    // NEED IF start_value IS GRATER THAN end_value!
    // If parameters are not int!
    if(start_value > 0 && end_value > 0){
        // Run the count now...  
        const count_array = [];
        for(let i = start_value; i <= end_value; i++){
            count_array.push(i);
        }

        result = count_array.toString();
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