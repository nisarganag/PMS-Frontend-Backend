package com.major.pmsbackend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.major.pmsbackend.entity.Users;

@Repository
public interface UserRepo extends CrudRepository<Users, Long>{
    @SuppressWarnings({ "null", "unchecked" })
    Users save(Users user);
    Users findAllByemail(String email);   
}
