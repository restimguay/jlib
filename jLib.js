/**
 * jLib.js by Resti M. Guay
 * JLib.js is the consolidation of commonly use javascript snippets
 * @param {type} selector
 * @returns {j.Anonym$0}
 */
j = function(selector) {
    return {
        version: 0.1,
        release: 'July 5, 2014',
        createdBy: 'Resti Guay',
        onload: [],
        addToOnloadEvent: function(method) {
            this.onload.push(method);
        },
        /**
         * 
         * @returns {DOM}
         */
        getInstance: function() {
            var elems =document.querySelectorAll(selector);
            if(elems.length === 1){
                return elems[0];
            }else{
                return elems;
            }
        },
        /**
         * Check the string if it starts with the given pattern
         * @param {String} s
         * @returns {Boolean}
         */
        startsWith: function(s) {
            return selector.startsWith(s);
        },
        /**
         * Check the string if it ends with the given pattern
         * @param {String} s
         * @returns {Boolean}
         */
        endsWith: function(s) {
            return selector.endsWith(s);
        },
        /**
         * Evaluate if the object is typeof Object
         * @param {type} object
         * @returns {Boolean}
         */
        isObject: function(object) {
            if (typeof (object) === 'object') {
                return true;
            }
            return false;
        },
        /**
         * Evaluate if the object is typeof Boolean
         * @param {type} object
         * @returns {Boolean}
         */
        isBoolean: function(object) {
            if (typeof (object) === 'boolean') {
                return true;
            }
            return false;
        },
        /**
         * Evaluate if the object is typeof String
         * @param {type} object
         * @returns {Boolean} 
         */
        isString: function(object) {
            if (typeof (object) === 'string') {
                return true;
            }
            return false;
        },
        value: function() {
            return this.getInstance(selector).value;
        },
        html: function(newHTML) {
            if (newHTML === undefined) {
                return this.getInstance(selector).innerHTML;
            } else {
                this.getInstance(selector).innerHTML = newHTML;
            }
        },
        hide: function() {
            var elem = this.getInstance(selector);
            if (elem.length > 1) {
                for (var i = 0; elem[i]; i++) {
                    elem[i].style.visibility = 'hidden';
                }
            } else {
                elem.style.visibility = 'hidden';
            }
        },
        show: function() {
            var elem = this.getInstance(selector);
            if (elem.length > 1) {
                for (var i = 0; elem[i]; i++) {
                    elem[i].style.visibility = 'visible';
                }
            } else {
                elem.style.visibility = 'visible';
            }
        },
        toggle: function() {
            var elem = this.getInstance(selector);
            if (elem.length > 1) {
                for (var i = 0; elem[i]; i++) {
                    if (elem[i].style.visibility === '' || elem[i].style.visibility === 'visible') {
                        elem[i].style.visibility = 'hidden';
                    } else {
                        elem[i].style.visibility = 'visible';
                    }
                }
            } else {
                if (elem.style.visibility === '' || elem.style.visibility === 'visible') {
                    this.hide();
                } else {
                    this.show();
                }
            }
        },
        load: function(parameter) {
            var elem = this.getInstance(selector);
            j.ajax({
                path: parameter.path,
                data: parameter.data,
                successCallback: function(data) {
                    elem.innerHTML = data;
                }
            });
        },
        submit: function(parameter) {
            var elem = this.getInstance(selector);
            var data= new String();
            for(var i = 0; elem[i];i++){
                data = data.concat(elem[i].name + '='  + elem[i].value + '&');                
            }
            j.ajax({
                path: elem.action,
                data: '?' + data,
                method:elem.method,
                successCallback: function(response) {
                    alert(response);
                }
            });
        }
    };
};
j.ajax = function(parameter) {
    var xhr;
    if (typeof XMLHttpRequest !== 'undefined') {
        xhr = new XMLHttpRequest();
    } else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"]

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            }
            catch (e) {
            }
        } // end for
    }
    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }
        if (xhr.status !== 200) {
            return;
        }
        // all is well  
        if (xhr.readyState === 4) {
            if (parameter.successCallback !== undefined) {
                parameter.successCallback(xhr.responseText);
            }
        }
    }
    xhr.onreadystatechange = ensureReadiness;
    var method = parameter.method=undefined?GET:parameter.method;

    xhr.open(method, parameter.path + parameter.data, true);
    xhr.send();
};
/**
 * Check the string if starts with the given pattern
 * @param {String} s
 * @returns {Boolean}
 */
if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function(s) {
        return this.slice(0, s.length) === s;
    };
}
/**
 * Check the string if ends with the given pattern
 * @param {String} s
 * @returns {Boolean}
 */
if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(str) {
        return this.slice(-str.length) === str;
    };
}



