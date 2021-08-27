import axios from "axios";


const BASE_URL = "http://localhost:8080/class_page/student";



class StudentService  {
  
    getStudent()
    {
        return axios.get(BASE_URL);
    }

    createStudent(student)
    {
        return axios.post(BASE_URL, student);
    }
    raiseHand(name)
    {
        return axios.put(BASE_URL +'/'+ name);
       }
    deleteStudent(name)
    {
        return axios.delete(BASE_URL+'/'+name)
    }
}

export default new StudentService();