<%--
  Created by IntelliJ IDEA.
  User: vital
  Date: 10.06.2021
  Time: 18:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Classroom login</title>
    <style>
        .members {
            display: flex;
            justify-content: center;
            height: 100%;
            margin-top: 300px;

        }
    </style>
</head>
<body>
<div class="members" >
    <form method="post" action="/class_page/class_members">
        <p style="text-align: center"><label>Your Name</label></p>
        <p style="text-align: center"><input name="name" /></p>
        <p style="text-align: center"><button >Login</button></p>

    </form>
</div>
</body>
</html>

