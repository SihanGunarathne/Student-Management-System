package com.S.M.S.StudentManagementSystem.service;

import com.S.M.S.StudentManagementSystem.model.Student;
import com.S.M.S.StudentManagementSystem.repository.StudentRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Slf4j
public class StudentService implements IStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student create(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> findByFirstName(String firstName) {
        log.info("####### FIND BY FIRSTNAME {} ", firstName);
        List<Student> studentList = studentRepository.findByFirstName(firstName);
        log.info("####### FIND BY studentList {} ", studentList);
        return studentList;
    }

    @Override
    public List<Student> findByLastName(String lastName) {
        log.info("####### FIND BY LastNAME {} ", lastName);
        List<Student> studentList = studentRepository.findByLastName(lastName);
        log.info("####### FIND BY studentList {} ", studentList);
        return studentList;
    }

    @Override
    public List<Student> findByAge(String age) {
        log.info("####### FIND BY Age {} ", age);
        List<Student> studentList = studentRepository.findByAge(age);
        log.info("####### FIND BY studentList {} ", studentList);
        return studentList;
    }

    @Override
    public List<Student> findByYear(String year) {
        log.info("####### FIND BY YEAR {} ", year);
        List<Student> studentList = studentRepository.findByYear(year);
        log.info("####### FIND BY studentList {} ", studentList);
        return studentList;
    }


    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public void delete(String id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student update(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student findById(String id) {
        return studentRepository.findById(id).get();
    }

}