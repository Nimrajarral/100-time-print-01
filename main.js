// I Printed First 10 time ok then i write Printed 10 Time :like  OK 
// OK
//OK 
//OK 
// and so on  10 time then Printed next line
// " Print 10 Times"
function printTenTimes() {
    var count = 0;
    for (var i = 0; i < 100; i++) {
        console.log("ok");
        count++;
        if (count === 10) {
            console.log("".concat(i, "  times printed"));
            count = 0;
        }
    }
}
printTenTimes();
