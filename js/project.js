
/**
 * Created by JetBrains WebStorm.
 * User: Кирилл
 * Date: 11.03.12
 * Time: 14:07
 * To change this template use File | Settings | File Templates.
 */


$('document').ready(function () {
    'use strict';
    var myArray = [1, 6, 3, 6, 8, 9, 5, 3];
    function ascending(i, j) { // По возрастанию
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
        $("#ascending").html(myArray.sort(ascending).toString());
        $("#descending").html(myArray.sort(decrease).toString());
    }
    $("#adrow-dev").val(myArray.toString());
    sortAll();
    $("#adrow-dev").focusout(function () {
        var i, itemStrong;
        myArray = $("#adrow-dev:valid").val().split(",");
        for (i = 0; i < myArray.length; i++) {
            itemStrong = myArray[i];
            myArray[i] = parseInt(itemStrong, 10);
        }
        $("#adrow-dev").val(myArray.toString());
        sortAll();
    });
});