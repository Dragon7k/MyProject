package softarex.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import softarex.model.Student;

import javax.sql.DataSource;
import java.util.List;

@Component
public class StudentDAO {

    private  JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDAO(DataSource dataSource)
    {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Student> showAll()
    {
        return jdbcTemplate.query("SELECT * FROM student", new BeanPropertyRowMapper<>(Student.class));
    }


    public void logInStudent(Student student){
        jdbcTemplate.update("INSERT INTO student (name, hand )VALUES (?,?)", student.getName(), student.isHand());
    }

    public void logOutStudent(String name)
    {
        jdbcTemplate.update("DELETE FROM student WHERE name =?",name);
    }

    public void updateStudent(String name)
    {
        jdbcTemplate.update("UPDATE Student SET hand = NOT hand WHERE name =?", name);
    }

}
