/*
   Testing export of functions to give code structure a more flexible codebase! 
   @RobertC 11/19/2022
*/

function count() {

    let count_result = [{
        id: 1,
        result: '12345'
    }
    ];

    return count_result;
}

module.exports = {count};