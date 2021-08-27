package softarex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import softarex.model.Student;
import softarex.repository.StudentRepository;
import softarex.service.StudentService;

import javax.servlet.http.HttpSession;
import java.util.List;


@RestController

@RequestMapping("/class_page")
public class SecondPageController {

    private final StudentService studentService;

    @Autowired
    public SecondPageController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/student")
    public List<Student> getStudent()
    {
        return studentService.getAll();
    }

    @PostMapping("/student")
    public Student createStudent(@RequestBody Student student) {

        return studentService.add(student);
    }

    @PutMapping("/student/{name}")
    public void raiseHand(@PathVariable("name") String name){
        studentService.riseHand(name);
    }

    @DeleteMapping ("/student/{name}")
    public void logOut(@PathVariable("name") String name) {

        studentService.deleteByName(name);
    }
}
