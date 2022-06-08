package com.S.M.S.StudentManagementSystem.controller;

import com.S.M.S.StudentManagementSystem.model.Student;
import com.S.M.S.StudentManagementSystem.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    private IStudentService studentService;

    @GetMapping("/all")
    public List<Student> getAllStudents(){
        return studentService.findAll();
    }

    @GetMapping("/firstName/{firstName}")
    public List<Student> getStudentsByFirstName(@PathVariable String firstName){
        return studentService.findByFirstName(firstName);
    }

    @GetMapping("/lastName/{lastName}")
    public List<Student> getStudentsByLastName(@PathVariable String lastName){
        return studentService.findByLastName(lastName);
    }

    @GetMapping("/age/{age}")
    public List<Student> getStudentsByAge(@PathVariable String age){
        return studentService.findByAge(age);
    }

    @GetMapping("/year/{year}")
    public List<Student> getStudentsByYear(@PathVariable String year){
        return studentService.findByYear(year);
    }

    @GetMapping("/id/{id}")
    public Student getStudentsById(@PathVariable String id){
        return studentService.findById(id);
    }

    @PostMapping("/create")
    public Student create(@RequestBody Student student){
        student.setStudentId(UUID.randomUUID().toString());
        return studentService.create(student);
    }

    @PutMapping("/update")
    public Student update(@RequestBody Student student){
        return studentService.update(student);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteById(@PathVariable String id){
        studentService.delete(id);
    }

}
