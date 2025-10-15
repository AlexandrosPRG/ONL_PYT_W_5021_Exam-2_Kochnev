from django.http import HttpResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

USER_DB = {"admin": "secret", "user": "1234"}

LOGIN_FORM_HTML = """
<!doctype html>
<title>Login</title>
<h3>Login</h3>
<form method="post" action="/login">
  <label>username: <input type="text" name="username" required></label><br>
  <label>password: <input type="password" name="password" required></label><br>
  <button type="submit">Sign in</button>
</form>
"""

@method_decorator(csrf_exempt, name="dispatch")
class LoginView(View):
    def get(self, request):
        return HttpResponse(LOGIN_FORM_HTML)

    def post(self, request):
        username = request.POST.get("username", "")
        password = request.POST.get("password", "")
        if USER_DB.get(username) == password:
            resp = HttpResponse("Logged in")
            resp.set_cookie("logged_in", "1", max_age=24*60*60, httponly=True, samesite="Lax")
            return resp
        resp = HttpResponse("Login error")
        resp.delete_cookie("logged_in")
        return resp
