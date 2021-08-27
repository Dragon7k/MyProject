package softarex.model;

import javax.persistence.*;
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private boolean hand;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Student(){

    }
    public Student(String name, boolean hand) {
        this.name = name;
        this.hand = hand;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isHand() {
        return hand;
    }

    public void setIsHand(boolean hand) {
        this.hand = hand;
    }

}
