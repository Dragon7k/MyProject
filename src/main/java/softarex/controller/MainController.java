package softarex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import softarex.dao.StudentDAO;
import softarex.model.Student;

@Controller
public class MainController {

    @GetMapping("/login")
    public String loginPage()
    {
        return "pages/login_page";
    }
}
