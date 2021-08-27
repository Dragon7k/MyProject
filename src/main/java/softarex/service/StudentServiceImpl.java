package softarex.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import softarex.model.Student;
import softarex.repository.StudentRepository;

import java.util.List;
@Service
@Transactional(readOnly = true)

public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    @Transactional
    public Student add(Student student) {
        return studentRepository.save(student);
    }

    @Override
    @Transactional
    public void deleteByName(String name) {
        studentRepository.deleteByName(name);
    }

    @Override
    @Transactional
    public void riseHand(String name) {
        studentRepository.riseHand(name);
    }


}
