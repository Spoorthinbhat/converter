var flag = false;

function calculate() {
    var celcius = parseFloat(document.getElementById("Celcius").value);
    var farenheit = parseFloat(document.getElementById("farenheit").value);
    var Kelvin = parseFloat(document.getElementById("Kelvin").value);
   
    if (!isNaN(celcius) && !isNaN(farenheit) && !isNaN(Kelvin)|| !isNaN(celcius) && !isNaN(farenheit)|| !isNaN(farenheit)&& !isNaN(Kelvin)|| !isNaN(Kelvin)&& !isNaN(celcius)) {
        alert("Enter only one temperature");
        reset();
        return;
    }

    if (isNaN(celcius) && isNaN(farenheit) && isNaN(Kelvin)) {
        alert("Enter a valid number");
        reset();
        return;
    }

    if (!isNaN(celcius)) {
        farenheit = ((celcius * 9 / 5) + 32).toFixed(2);
        document.getElementById("farenheit").value=farenheit;
        Kelvin = (celcius + 273.15).toFixed(2);
        document.getElementById("Kelvin").value=Kelvin;
    } 
    else if (!isNaN(farenheit)) {
        celcius = ((farenheit - 32) * 5 / 9).toFixed(2);
        alert(celcius);
        document.getElementById("Celcius").value=celcius;
        Kelvin = ((farenheit - 32) * 5 / 9 + 273.15).toFixed(2);
        document.getElementById("Kelvin").value=Kelvin;
    } 
    else if (!isNaN(Kelvin)) {
        celcius = (Kelvin - 273.15).toFixed(2);
        document.getElementById("Celcius").value=celcius;
        farenheit = ((Kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
        document.getElementById("farenheit").value=farenheit;
    }

}

function calculate_dist() {
    var Kilo = parseFloat(document.getElementById("Kilo").value);
    var meter = parseFloat(document.getElementById("meter").value);
    var centi = parseFloat(document.getElementById("centi").value);
    var feet = parseFloat(document.getElementById("feet").value);
    var inch = parseFloat(document.getElementById("inch").value);
    var count = 0;
    if (!isNaN(Kilo)) count++;
    if (!isNaN(meter)) count++;
    if (!isNaN(centi)) count++;
    if (!isNaN(feet)) count++;
    if (!isNaN(inch)) count++;
    
    if (count !== 1) {
        alert("Please insert only one value for conversion.");
        reset_1();
        return;
    }

    if (!isNaN(Kilo)) {
        meter = (Kilo * 1000).toFixed(5);
        centi = (Kilo * 100000).toFixed(5);
        feet = (Kilo * 3280.84).toFixed(5); 
        inch = (Kilo * 39370.1).toFixed(5); 
        document.getElementById("meter").value = meter;
        document.getElementById("centi").value = centi;
        document.getElementById("feet").value = feet;
        document.getElementById("inch").value = inch;
    }
    
    else if (!isNaN(meter)) {
        Kilo = (meter / 1000).toFixed(5);
        centi = (meter * 100).toFixed(5);
        feet = (meter * 3.28084).toFixed(5); 
        inch = (meter * 39.3701).toFixed(5); 
        document.getElementById("Kilo").value = Kilo;
        document.getElementById("centi").value = centi;
        document.getElementById("feet").value = feet;
        document.getElementById("inch").value = inch;
    }
    
    else if (!isNaN(centi)) {
        meter = (centi / 100).toFixed(5);
        Kilo = (centi / 100000).toFixed(5);
        feet = (centi / 30.48).toFixed(5); 
        inch = (centi / 2.54).toFixed(5); 
        document.getElementById("meter").value = meter;
        document.getElementById("Kilo").value = Kilo;
        document.getElementById("feet").value = feet;
        document.getElementById("inch").value = inch;
    }
    
    else if (!isNaN(feet)) {
        meter = (feet / 3.28084).toFixed(5);
        Kilo = (feet / 3280.84).toFixed(5);
        centi = (feet * 30.48).toFixed(5); 
        inch = (feet * 12).toFixed(5); 
        document.getElementById("meter").value = meter;
        document.getElementById("Kilo").value = Kilo;
        document.getElementById("centi").value = centi;
        document.getElementById("inch").value = inch;
    }
    
    else if (!isNaN(inch)) {
        meter = (inch / 39.3701).toFixed(5);
        Kilo = (inch / 39370.1).toFixed(5);
        centi = (inch * 2.54).toFixed(5); 
        feet = (inch / 12).toFixed(5); 
        document.getElementById("meter").value = meter;
        document.getElementById("Kilo").value = Kilo;
        document.getElementById("centi").value = centi;
        document.getElementById("feet").value = feet;
    }
}



function reset() {
    alert("Do you want to reset?");
    document.getElementById("Celcius").value = "";
    document.getElementById("farenheit").value = "";
    document.getElementById("Kelvin").value = "";

    return;
}
function reset_1()
{
    document.getElementById("meter").value = "";
    document.getElementById("centi").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("inch").value = "";
    document.getElementById("Kilo").value = "";
    return;
}

