jlib
====
jLib.js is a light weight javascript framework that can be extended.

    //hide element by ID
    j('#myText').hide();
    //hide element by Class
    j('.myText').hide();
    //get value element by ID
    alert(j('#myText').value());
    get element innderHTML by ID
    alert(j('#myTextArea').html());    
    //j('#myTextArea').html("hello");
    //alert(j('#myTextArea').html());
    
    //toggle visiblity of elements by its ID or by their Class Name
    j('#myTextArea').toggle();
    j('#myText').toggle();
    j('.myText').toggle();
    alert('hidden');
    j('#myTextArea').toggle();
    j('#myText').toggle();
    j('.myText').toggle();
    alert('visible');
    j('#myTextArea').toggle();
    j('#myText').toggle();
    j('.myText').toggle();
    alert('hidden again');
