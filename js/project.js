/**
 * Created by JetBrains WebStorm.
 * User: Кирилл
 * Date: 11.03.12
 * Time: 14:07
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    var myArray = [1, 6, 3, 6, 8, 9, 5, 3];
    function ascending(i, j) { // По возрастанию
        'use strict';
        if (i > j) {
            return 1;
        } else {
            if (i < j) {
                return -1;
            } else {
                return 0;
            }
        }
    }
    function decrease(i, j) { // По убыванию
        'use strict';
        if (i > j) {
            return -1;
        } else {
            if (i < j) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    function sortAll() {
        'use strict';
        $("#ascending").html(myArray.sort(ascending).toString());
        $("#descending").html(myArray.sort(decrease).toString());
    }
    $("#adrow-dev").val(myArray.toString());
    sortAll();
    $("#adrow-dev").focusout(function() {
        myArray=$("#adrow-dev:valid").val().split(",");
        for (var i = 0; i < myArray.length; i++) {
            var itemStrong = myArray[i];
            myArray[i]=itemStrong-0;
        }
        $("#adrow-dev").val(myArray.toString());
        sortAll();
    });
});


function ascending(i, j) { // По возрастанию
    'use strict';
    if (i > j) {
        return 1;
    } else {
        if (i < j) {
            return -1;
        } else {
            return 0;
        }
    }
}




