from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .neo4j_driver import driver


@csrf_exempt
@api_view(["POST"])
def register_api(request):
    username = request.data.get("username")
    password = request.data.get("password")



    if not username or not password:
        return Response({"success": False, "error": "Missing username or password"}, status=400)

    # with driver.session() as session:
    #  
    #     result = session.run(
    #         "MATCH (u:User {username: $username}) RETURN u",
    #         username=username
    #     )
    #     if result.single():
    #         return Response({"success": False, "error": "Username already exists"}, status=400)

    #   
    #     session.run(
    #         "CREATE (u:User {username: $username, password: $password})",
    #         username=username,
    #         password=password  
    #     )

    return Response({"success": True, "username": username})


@csrf_exempt
@api_view(["POST"])
def login_api(request):
    username = request.data.get("username")
    password = request.data.get("password")

    print("LOGIN API CALLED")  

    with driver.session() as session:
        result = session.run(
            "MATCH (u:User {username: $username, password: $password}) RETURN u",
            username=username,
            password=password
        )
        user = result.single()
        if user:
            return Response({"success": True, "username": username})
        return Response({"success": False, "error": "Invalid credentials"}, status=400)
