package com.S.M.S.StudentManagementSystem.service;

import com.S.M.S.StudentManagementSystem.model.Student;

import java.util.List;

public interface IStudentService {

    Student create(Student student);

    List<Student> findByFirstName(String firstName);

    List<Student> findByLastName(String lastName);

    List<Student> findByAge(String age);

    List<Student> findByYear(String year);

    List<Student> findAll();

    void delete(String id);

    Student update(Student student);

    Student findById(String id);
}
