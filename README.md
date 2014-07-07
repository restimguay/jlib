jlib
====
like jQuery, jLib.js is my light weight javascript framework that contains all essential methods that i commonly use to simplify and speedup my development.

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
    //ajax functions with call back
    /*j.ajax({
        path: 'ajax.php',
        data: '?name=Resti',
        successCallback: function(text) {
            alert('data is ' + text.responseText);
        }
    });*/
    //update the element innerHtml
    j('#myDiv').load({        
        path: 'ajax.php',
        data: '?name=Resti'
    });
    //submit the form
    j('#myForm').submit();
