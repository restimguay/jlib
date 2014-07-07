<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="jLib.js" type="text/javascript"></script>
        <script src="jLib_TEST.js" type="text/javascript"></script>
    </head>
    <body>
        <input type="text" id="myText" value="1"/> 
        <input type="text" class="myText" value="2"/> 
        <input type="text" class="myText" value="3" onclick="this.hide();"/> 
        <textarea id="myTextArea">Hello World</textarea>
        <div id="myDiv">1</div>
        <form id="myForm" method="post" action="ajaxSubmit.php" >
            <input type="text" name="firstName" value="Resti" />
            <input type="text" name="lastName" value="Guay" />
        </form>
    </body>
</html>
