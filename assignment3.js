//https://github.com/mithunkumarB35/assignment3/blob/main/assignment3.js

// problem-1 || kilometer to meter 

function kilometerToMeter(number) {
    var negative = -1;
    if (number <= negative) {
        return " please enter a positive number ";
    }
    else {
        return number * 1000;
    }
}
console.log(kilometerToMeter(40));


//problem-2 || budget calculator

function budgetCalculator(watch, mobile, laptop) {
    watchPrice = 50;
    mobilePrice = 100;
    laptopPrice = 500;
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var budget = watch * watchPrice + mobile * mobilePrice + laptop * laptopPrice;
        return budget;
    }
    else if (watch < 1 || mobile < 1 || laptop < 1) {
        return " quantity can't be lower then 1 ";
    }
}
console.log(budgetCalculator(10, 5, 3));

//problem-3 || hotel rent calculator


function hotelCost(days) {
    var day = 1;
    if (days < 0 || typeof days !== "number") {
        return "input a positive number";
    } else if (days <= 10) {
        day = days * 100;
    } else if (days <= 20) {
        var first10 = 10 * 100;
        var remaining = days - 10;
        var second10 = remaining * 80;
        day = first10 + second10;
    }
    return day;
}
console.log(hotelCost(10));


//problem-4 || find out a large number from list

function megaFriend(names) {
    var max = 0;
    var big_name;
    for (i = 0; i < names.length; i++) {
        if (names[i].length > max) {
            big_name = names[i];
            max = names[i].length;
        }
    }
    return big_name;
}
console.log(findLargeName(["Fahim", "Fuad", "Shaurav"]));