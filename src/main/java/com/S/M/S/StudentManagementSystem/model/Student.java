package com.S.M.S.StudentManagementSystem.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "Student")
public class Student {

    @Id
    private String studentId;
    private String firstName;
    private String lastName;
    private String age;
    private String address;
    private String year;

}
