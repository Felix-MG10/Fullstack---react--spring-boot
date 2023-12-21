package com.example.demo.services;

import com.example.demo.entities.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student saveStudentData(Student student){
        return studentRepository.save(student);
    }

    public List<Student> getStudentData() {
        return studentRepository.findAll();
    }

    public void deleteStudentByIdData(int id) {
        studentRepository.deleteById(id);
    }
}
