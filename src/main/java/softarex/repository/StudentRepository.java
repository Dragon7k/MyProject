
package softarex.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import softarex.model.Student;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

  @Modifying
  @Query("UPDATE Student s SET s.hand = CASE s.hand WHEN TRUE THEN FALSE ELSE TRUE END WHERE s.name in :name")
  void riseHand(@Param("name") String name);
  void deleteByName(String name);
}

