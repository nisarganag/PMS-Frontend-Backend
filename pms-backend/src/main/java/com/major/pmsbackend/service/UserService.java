package com.major.pmsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.major.pmsbackend.entity.Users;
import com.major.pmsbackend.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;
    public Users registerUserData(Users user) {
        return userRepo.save(user);
    }
    public Users loginUserData(String email) {
        return userRepo.findByEmail(email);
    }
    public boolean validateUser(String email, String password) {
        Users user = userRepo.findByEmail(email);
        if(user != null && user.getPassword().equals(password)) {
            return true;
        }
        return false;
    }
}
