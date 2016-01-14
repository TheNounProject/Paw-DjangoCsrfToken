// Grabs the Django CSRF token from the cookie csrftoken, returns as dynamic value
var CsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            cookies = (request.getHeaderByName('Cookie') || '').split(';'),
            token = null;

        for (var index in cookies) {
            var cookie = cookies[index].trim();
            if (cookie.indexOf('csrftoken') == 0) {
                token = cookie.split('=')[1];
            }
        }

        return token;
    }
}

CsrfToken.identifier = "com.thenounproject.DjangoCsrfToken";
CsrfToken.title = "Django CSRF Token";

registerDynamicValueClass(CsrfToken)
