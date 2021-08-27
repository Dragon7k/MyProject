package softarex.service;

import softarex.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAll();


    Student add(Student student);
    void deleteByName(String name);
    void riseHand(String name);

}
