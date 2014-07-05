/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
            if (selector.startsWith('.')) {
                return document.getElementsByClassName(selector.substring(1, selector.length));
            } else if (selector.startsWith('#')) {
                return document.getElementById(selector.substring(1, selector.length));
            } else if (this.isObject(selector)) {
                return selector;
            } else if (this.isString(selector)) {
                return document.getElementById(selector);
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
        }
    };
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



