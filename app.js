function task1() {
    alert("Welcome To GC!");
}

function task2() {
    alert("Error! Please enter a valid password!");
}
function task3() {
    alert("Welcome to JS land...\n Happy Coding!");
}
function task4() {
    alert("Welcome to JS land...!");
    alert("Happy Coding \n Prevent this page from creating additional dialogues!");
}
function task5() {
    alert("Hello... I can run JS through my web browser's console!");
}
function task2_1() {
    var username;
}
function task2_2() {
    var myName = "Urooj Naz"
    alert(myName);
}

function task2_3() {
    var message = "Hello World"
    alert(message);
}

function task2_4() {
    var myName = "John Doe"
    alert(myName);
    var age = "15 years old"
    alert(age);
    var skills = "Certified Mobile App Development"
    alert(skills);
}

function task2_5() {
    var P = "PIZZA"
    alert(P);
}

function task2_6() {
    var email = "my email address is nazuroojg@gmail.com"
    alert(email);
}
function task2_7() {
    var book = "A smarter way to learn Javascript"
    alert(book);
}
function task2_8() {
    var a = "Yeah! i can write HTML content through JS"
    document.write(a);
}

function task2_9() {
    alert(
        "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬");
}

function task3_1() {
    var age = "i am 24 years old"
    alert(age);
}
function task3_2() {
    var timesofvisit = "you have visited this site 14 times"
    alert(timesofvisit);
}

function task3_3() {
    var birthYear = "My birth year is 1995."
    var text = "Data type of my declared variable is number"
    var all = birthYear + "<br>" + text
    document.write(all);
}
function task3_4() {
    var Name = "John"
    var Product = "Shirts"
    var Quantity = "20"
    var script = Name + "orderd" + Quantity + Product + "from Glorious Collection";
    document.write(script);
}
function task4_1() {
    var a;
    var b;
    var c;
    document.write();
}
function task4_2() {
    var myName;
    var PAGE;
    var _x_;
    var $a14;
    var _55_;
}

// illegal varibales

//     var var;
//     var alert;
//     var 46;
//     var "why";
//     var 2loops;
//  }

function task4_3() {
    var heading = "<h1> Rules for naming JS variable </h1>"
    var line1 = "Variable names can only contain numbers, $,_ and 1st variables."
    var line2 = "Variable names are case sensitive"
    var line3 = "Variable names should not be JS keywords"
    var all = heading + "<br>" + line1 + "<br>" + line2 + "<br>" + line3

    document.write(all);
}

function task5_1() {
    var x = 3;
    var y = 5;
    var z = x + y;
    var htmlValue = "Sum of " + x + " and " + y + " is " + z;
    document.write(htmlValue);
}

function task5_2() {
    var a = 3;
    var b = 5;
    var c = a - b;
    var htmlValue = "Sub of " + a + " and " + b + " is " + c + "<br>";
    document.write(htmlValue);
    task5_2_1();
    task5_2_2();
    task5_2_3();
}
function task5_2_1() {
    var a = 3;
    var b = 5;
    var c = a * b;
    var htmlValue = "Multiplication of " + a + " and " + b + " is " + c + "<br>";
    document.write(htmlValue);
}
function task5_2_2() {
    var a = 3;
    var b = 5;
    var c = a / b;
    var htmlValue = "Divison of " + a + " and " + b + " is " + c + "<br>";
    document.write(htmlValue);
}
function task5_2_3() {
    var a = 3;
    var b = 5;
    var c = a % b;
    var htmlValue = "Modulus of " + a + " and " + b + " is " + c + "<br>";
    document.write(htmlValue);

}
function task5_3() {
    var a;
    var htmlValue = "Value after variable declaration is:" + a + "<br>";
    document.write(htmlValue);
    a = 5;
    htmlValue = "Initial value is:" + a + "<br>";
    document.write(htmlValue);
    a++;
    htmlValue = "increment value is:" + a + "<br>";
    document.write(htmlValue);
    a = a + 7
    htmlValue = "value after addition is" + a + "<br>";
    document.write(htmlValue);
    a--;
    htmlValue = "value after decrement is" + a + "<br>";
    a = a % 3;
    htmlValue = "the remainder value is:" + a + "<br>";
    document.write(htmlValue);
}
function task5_4() {
    var Price = 600;
    var tickets = 5;
    var total = Price * tickets;
    var htmlValue = "Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR ";
    document.write(htmlValue);
}
function task5_5() {
    var table = +prompt("Enter Table Number ")
    document.write("Table of " + table + "<br>")
    document.write(table + " x " + 1 + " = " + table * 1 + "<br>")
    document.write(table + " x " + 2 + " = " + table * 2 + "<br>")
    document.write(table + " x " + 3 + " = " + table * 3 + "<br>")
    document.write(table + " x " + 4 + " = " + table * 4 + "<br>")
    document.write(table + " x " + 5 + " = " + table * 5 + "<br>")
    document.write(table + " x " + 6 + " = " + table * 6 + "<br>")
    document.write(table + " x " + 7 + " = " + table * 7 + "<br>")
    document.write(table + " x " + 8 + " = " + table * 8 + "<br>")
    document.write(table + " x " + 9 + " = " + table * 9 + "<br>")
    document.write(table + " x " + 10 + " = " + table * 10 + "<br>")
}
function task5_6() {
    var oC = 25;
    var x = 9;
    var y = 5;
    var z = 32;
    var oF = 70;
    var result = (oC * x / y) + z;
    var result2 = (oF - z) * y / x;
    var htmlValue = "25 oC is" + result + "oF" + "<br>";
    document.write(htmlValue);
    var htmlValue = "70 oF is" + result2 + "oC";
    document.write(htmlValue);
}

function task5_7() {
    var item1 = 650;
    var item2 = 100;
    var Quantity1 = 3;
    var Quantity2 = 7;
    var charges = 100;
    var total = (item1 * Quantity1) + (item2 * Quantity2) + charges;
    var htmlValue = "<h1>Shopping Cart</h1>" + "<br>" + "Price of item 1 is" + item1 + "<br>" + "Quantity of item 1 is" + Quantity1 + "<br>" +
        "Price of item 2 is" + item2 + "<br>" + "Quantity of item 2 is" + Quantity2 + "<br>" + "Shipping Charges 100"
        + "<br>" + "Total cost of your order is" + total;
    document.write(htmlValue);
}

function task5_8() {
    var total = 980;
    var obtained = 804;
    var percent = (obtained / total) * 100;
    var htmlValue = "<h1>Mark Sheet</h1>" + "<br>" + "Total Marks: " + total + "<br>" + "Marks Obtained: " + obtained + "<br>" +
        "Percentage: " + percent + "%";
    document.write(htmlValue);
}
function task5_9() {
    var $ = 10;
    var SAR = 25;
    var $1 = 104.80;
    var SAR1 = 28;
    var PKR = ($ * $1) + (SAR * SAR1);
    var htmlValue = "<h1>Currency in PKR</h1>" + "<br>" + "Total Currency in PKR: " + PKR;
    document.write(htmlValue);
}
function task5_10() {
    var num = (1 + 5) * 10 / 2;
    document.write(num);
}
function task5_11() {
    var year = 2020;
    var birthYear = 1995;
    var age = year - birthYear;
    var htmlValue = "They are either" + age + "years old";
    document.write(htmlValue);
}

function task5_12() {
    var radius = 20
    document.write("Radius of a circle : " + radius + "<br>")
    document.write("The circumference is : " + (2 * 3.142 * radius) + "<br>")
    document.write("The area is : " + (3.142 * radius * radius))
}
function task5_13() {
    var fav = "chips"
    var age = 24;
    var est = 40;
    var am = 1;
    document.write("Favourite Snack : " + fav + "<br>")
    document.write("Current Age : " + age + "<br>");
    document.write("Estimated Maximum Age : " + est + "<br>")
    document.write("Amount of snacks per day : " + am + "<br>")
    document.write("You will need " + (est - age) * am + " chocolate chip to last you until the ripe old age of " + est);
}
function task6_1() {
    var num = 10;
    document.write("The value of a is: " + num + "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of ++a is: " + ++num + "<br>")
    document.write("The value of a is: " + num + "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of a is: " + num++ + "<br>")
    document.write("The value of a is: " + num + "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of a is: " + --num + "<br>")
    document.write("The value of a is: " + num + "<br>")
    document.write("............................................" + "<br>")
    document.write("The value of a is: " + num-- + "<br>")
    document.write("The value of a is: " + num + "<br>")
}

function task6_2() {
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    document.write("a is " + a + "<br>")
    document.write("b is " + b + "<br>")
    document.write("result is " + result + "<br>" + "<br>")
    document.write("..................................." + "<br>" + "<br>")
    document.write("Explain the output at each stage:" + "<br>")
    var c = 2, d = 1;
    var re = --a;
    --a - --b;
    --a - --b + ++b;
    --a - --b + ++b + b--;
    document.write("a is " + c + "<br>")
    document.write("b is " + d + "<br>")
    document.write("result is " + re)
}
function task6_3() {
    var name = prompt("Enter your name:")
    alert("Assalam o Alikum " + name + "\ Welcome to our Page")
}
function task6_4() {
    var table = +prompt("Enter Table Number ")

    if (table) {
        document.write("Table of " + table + "<br>")
        document.write(table + " x " + 1 + " = " + table * 1 + "<br>")
        document.write(table + " x " + 2 + " = " + table * 2 + "<br>")
        document.write(table + " x " + 3 + " = " + table * 3 + "<br>")
        document.write(table + " x " + 4 + " = " + table * 4 + "<br>")
        document.write(table + " x " + 5 + " = " + table * 5 + "<br>")
        document.write(table + " x " + 6 + " = " + table * 6 + "<br>")
        document.write(table + " x " + 7 + " = " + table * 7 + "<br>")
        document.write(table + " x " + 8 + " = " + table * 8 + "<br>")
        document.write(table + " x " + 9 + " = " + table * 9 + "<br>")
        document.write(table + " x " + 10 + " = " + table * 10 + "<br>")
    }
    else {
        document.write("Table of " + 5 + "<br>")
        document.write(5 + " x " + 1 + " = " + 5 * 1 + "<br>")
        document.write(5 + " x " + 2 + " = " + 5 * 2 + "<br>")
        document.write(5 + " x " + 3 + " = " + 5 * 3 + "<br>")
        document.write(5 + " x " + 4 + " = " + 5 * 4 + "<br>")
        document.write(5 + " x " + 5 + " = " + 5 * 5 + "<br>")
        document.write(5 + " x " + 6 + " = " + 5 * 6 + "<br>")
        document.write(5 + " x " + 7 + " = " + 5 * 7 + "<br>")
        document.write(5 + " x " + 8 + " = " + 5 * 8 + "<br>")
        document.write(5 + " x " + 9 + " = " + 5 * 9 + "<br>")
        document.write(5 + " x " + 10 + " = " + 5 * 10 + "<br>")
    }
}
function task6_5() {
    var b = prompt("ENTER 1ST SUBJECT NAME")
    var c = prompt("ENTER 1ST SUBJECT TOTAL MARKS ")
    var d = prompt("ENTER 1ST SUBJECT OBATINED MARKS")
    var e = +prompt("MARKS OBTAINED IN " + b)
    var f = +prompt("MARKS OBTAINED IN " + c)
    var g = +prompt("MARKS OBTAINED IN " + d)
    var tmarks = (e + f + g)
    var PE = (e / 100 * 100)
    var Pf = (f / 100 * 100)
    var Pg = (g / 100 * 100)
    var Tpercnt = (PE + Pf + Pg / 3)
    document.write("<h3>Subject Total Marks  Obtained Marks Percentage</h3>")
    document.write(b + "&nbsp" + "100" + "&nbsp" + e + "&nbsp" + PE + "<br>")
    document.write(c + "&nbsp" + "100" + "&nbsp" + f + "&nbsp" + Pf + "<br>")
    document.write(d + "&nbsp" + "100" + "&nbsp" + g + "&nbsp" + Pg + "<br>")
    document.write("&nbsp" + "&nbsp" + tmarks)
}
function task9_1() {
    var city = prompt("Enter Your City Name")
    if (city === "Karachi") {
        alert("Welcome to city of lights!")
    }
}
function task9_2() {

    var gender = prompt("Enter Your Gender")
    if (gender.toLowerCase() === "male") {
        alert(" Good Morning Sir. !");
    }
    else {
        alert(" Good Morning Ma am. !");
    }
}
function task9_3() {
    var colors = prompt("Input colors of Traffic signals")
    if (colors.toLowerCase() === "red") {
        alert("Must Stop!");
    }
    if (colors.toLowerCase() === "yellow") {
        alert("Ready To Move!");
    }
    if (colors.toLowerCase() === "green") {
        alert("Move Now!")
    }
    else {
        alert("This color does not iniclude in Traffic Signal")
    }
}
function task9_4() {
    var fuel = +prompt("PLEASE! input remaining fuel in car")
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car!");
    }
}

//   function task9_5(){
//     var a = prompt ("input 4"); 
//     if (++a === 5)
//     { alert("given condition for variable a is true"); }   
//   }
//   var b = prompt ("input 82");
//    if (b++ === 83){
//        alert("given condition for variable b is true"); }  

//        var c = 12; 
//        if (c++ === 13){ alert("condition 1 is true"); } 
//        if (c === 13){ alert("condition 2 is true"); } 
//        if (++c < 14){ alert("condition 3 is true"); } 
//        if(c === 14){ alert("condition 4 is true"); } 

// // function task9_6(){
// //     var first= +prompt("Insert your 1st Subject Marks")
// //     var second= +prompt("Insert your 2nd Subject Marks")
// //     var third= +prompt("Insert your 3rd Subject Marks")
// //     var total= +prompt ("Insert total marks out of which you obtained")
// //     var obtained= first + second + third;
// //     var percent= obtained / total * 100;
// //     var htmlValue="<h1>MARK SHEET</h1>" + "<br>" + "Total MArks :" + total + "<br>" + "Marks Obtained :" + obtained + "<br>" + "Percentage : " + percent + "%" )

// //     if ( percent >= 80){
// //         document.write(htmlValue)
// //     }
// }
function task9_7() {
    var num = 5;
    var guess = +prompt("Guess the secret number")
    if (guess === num) {
        alert("Bingo! Correct answer!");
    }
    if (guess > +1) {
        alert("Close enough to the correct answer!");
    }
}

function task9_8() {
    var n = +prompt("insert number")
    if (n % 3 == 0) {
        alert(n + " is divisible by 3")
    }
    else {
        alert(n + " is Not divisible")
    }
}
function task9_9() {
    var n = +prompt("Insert number to check")
    if (n % 2 == 0) {
        alert(n + " is an Even number")
    }
    else {
        alert(n + " is an Odd number")
    }
}
function task9_10() {
 var t= +prompt ("Temprature")
 if ( t > 40){
     alert ("It is too hot outside")
 }
 if ( t > 30){
    alert ("The Weather today is Normal.")
}
if ( t > 20){
    alert ("Today’s Weather is cool.")
}
if ( t > 10){
    alert ("OMG! Today’s weather is so Cool.")
}

}
function task9_11() {

}
