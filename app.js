        
       //chapter 4 
        
        // 1. Declare 3 variables in one statement
        var var1 = "Hello", var2 = 42, var3 = true;

        // 2. Legal variable names
        var myVar;
        var $dollarSign;
        var _underscore;
        var camelCase;
        var my1stVariable;

        // Illegal variable names (these will throw errors if used)
        // let 1variable;  
        // let my-variable;
        // let let;         
        // let @price;      
        // let var;        

        // 3. Displaying the content in the browser
        document.write(
            "<h1>Rules for naming JS variables</h1>" +
            "<p>Variable names can only contain letters, digits, underscores, and dollar signs.</p>" +
            "<p>For example: <code>$my_1stVariable</code></p>" +
            "<p>Variables must begin with a letter, underscore (_), or dollar sign ($).</p>" +
            "<p>For example: <code>$name</code>, <code>_name</code>, or <code>name</code></p>" +
            "<p>Variable names are case-sensitive.</p>" +
            "<p>Variable names should not be JS reserved keywords.</p>"
        );


        //chapter 4 
        //question 1
        let num1 = +prompt("Enter your number1");
        let opt = prompt("Enter operator (+, -, *, /)").trim();
        let num2 = +prompt("Enter your number2");
        
        if (opt === "+") {
            console.log(num1 + num2);
            alert(num1 + num2);
        }
        else if (opt === "-") {
            console.log(num1 - num2);
            alert(num1 - num2);
        }
        else if (opt === "*") {
            console.log(num1 * num2);
            alert(num1 * num2);
        }
        else if (opt === "/") {
            if (num2 !== 0) {
                console.log(num1 / num2);
                alert(num1 / num2);
            } else {
                console.log("Error: Division by zero.");
                alert("Error: Division by zero.");
            }
        } else {
            console.log("Error: Invalid operator, please check.");
            alert("Error: Invalid operator, please check.");
        }

          // Store the price of one ticket in a variable
          var ticketPrice = 600;

          // Calculate the cost of buying 5 tickets
          var totalCost = ticketPrice * 5;
  
          // Display the result in the browser
          document.write("<h1>Cost of Buying 5 Movie Tickets</h1>");
          document.write("<p>Price of one ticket: " + ticketPrice + " PKR</p>");
          document.write("<p>Total cost for 5 tickets: " + totalCost + " PKR</p>");


           // Table of 4
        document.write(`<h1>Table of 4</h1>
            <p>4 x 1 = 4<br /> 
            4 x 2 = 8<br /> 
            4 x 3 = 12<br /> 
            4 x 4 = 16<br /> 
            4 x 5 = 20<br /> 
            4 x 6 = 24<br /> 
            4 x 7 = 28<br /> 
            4 x 8 = 32<br /> 
            4 x 9 = 36<br /> 
            4 x 10 = 40<br /></p>`
        );

          var celsius = 30; 

         
          var fahrenheitFromCelsius = (celsius * 9/5) + 32;
          
        
          document.write("<h1>Temperature Converter</h1>");
          document.write("<p>" + celsius + "°C is " + fahrenheitFromCelsius + "°F</p>");
  
          
          var fahrenheit = 86; 
  
          var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
  
          // Output the conversion result
          document.write("<p>" + fahrenheit + "°F is " + celsiusFromFahrenheit.toFixed(2) + "°C</p>");
        


