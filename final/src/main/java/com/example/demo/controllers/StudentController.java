package com.example.demo.controllers;

import com.example.demo.entities.Student;
import com.example.demo.services.StudentService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    public final String uploadDirectory = System.getProperty("user.dir") + "/src/main/resources/static/images";

    @GetMapping("/getStudent")
    public List<Student> getStudent(){
        return studentService.getStudentData();
    }
    @PostMapping("/saveData")
    public Student saveStudent(@ModelAttribute Student student, @RequestParam("image") MultipartFile file) {

        String originalFileName = file.getOriginalFilename();
        Path fileNameAndPath = Paths.get(uploadDirectory, originalFileName);

        try {
            Files.write(fileNameAndPath, file.getBytes());
        }catch (IOException e){
           e.printStackTrace();
        }


          student.setProfileImage(originalFileName);

        return  studentService.saveStudentData(student);
    }

    @DeleteMapping("student/{id}")
    public String deleteStudentById(@PathVariable ("id") int id){
         studentService.deleteStudentByIdData(id);
         return "Student successfuly  deleted";
    }

}
