package com.S.M.S.StudentManagementSystem.repository;

import com.S.M.S.StudentManagementSystem.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends MongoRepository<Student, String> {
    @Query("{'firstName':?0}")
    public List<Student> findByFirstName(String firstName);

    @Query("{'lastName':?0}")
    public List<Student> findByLastName(String lastName);

    @Query("{'age':?0}")
    public List<Student> findByAge(String age);

    @Query("{'year':?0}")
    public List<Student> findByYear(String year);

}
