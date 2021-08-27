<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

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
    <title>Title</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous">


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
            crossorigin="anonymous"></script>





<style>
    html {
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    .wrapper{
        min-height: 85%;
        height: auto;

    }
    .table-area {
        height: 90%;
        display: flex;
        align-items: center;
    }
    .table {
        height: 50%;
        border: 3px solid;
    }
    .table-value {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid;

    }
    .scroll-table-body {
        height: 50%;
        overflow-x: auto;
        margin-top: 0px;
        margin-bottom: 20px;
    }
    .scroll-table .table-value{
        text-align: left;
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        padding: 10px 15px;
        font-size: 14px;
        vertical-align: top;
    }
    .members {
        display: flex;
        justify-content: center;
        height: 50px;

    }
    /* Footer
    ===================*/
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
</style>

</head>
<body>
<div class="header">
    <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
        <ul class="nav nav-pills">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Action</a>
                <ul class="dropdown-menu">
                    <form method="post" action="/class_page/update/${loginName}" >
                        <button id="rise_hand_button" class="dropdown-item">Rise hand up/down</button>
                    </form>
                </ul>
            </li>
        </ul>
        <ul class="nav nav-pills1">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">${loginName}</a>
                <ul class="dropdown-menu">
                    <form method="post" action="/class_page/remove/${loginName}" >
                        <button class="dropdown-item">LogOut</button>
                    </form>
                </ul>
            </li>
        </ul>
    </nav>
</div>

<div class="wrapper">
    <div class="d-flex justify-content-center table-area">
        <div class="col-4">
            <div class="members">
                <div>Class members</div>
            </div>
            <div class="table scroll-table-body">
                <c:forEach var="stud" items="${student}">
                    <div class="table-value" >
                        <div>${stud.name}</div>
                        <div>${stud.hand}</div>
                    </div>
                </c:forEach>
            </div>
        </div>
    </div>
</div>
<footer class="footer mt-auto py-3 bg-light">
    <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
    </div>
</footer>

</body>
</html>




