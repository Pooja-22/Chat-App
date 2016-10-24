/**
 * Created by pooja on 23/10/16.
 */

/**
 * Set cookie
 * @param cname
 * @param cvalue
 */

export function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + "; ";
}

/**
 * get cookie
 * @param cname
 * @returns {*}
 */

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}