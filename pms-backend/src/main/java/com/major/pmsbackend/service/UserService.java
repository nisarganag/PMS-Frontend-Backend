package com.major.pmsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.major.pmsbackend.entity.Users;
import com.major.pmsbackend.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    @SuppressWarnings("null")
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    @SuppressWarnings("null")
    public void updateUser(Long id, Users updatedUser) {
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found for id: " + id));
    
        if (updatedUser.getFirstName() != null) {
            user.setFirstName(updatedUser.getFirstName());
        }
        if (updatedUser.getLastName() != null) {
            user.setLastName(updatedUser.getLastName());
        }
        if (updatedUser.getEmail() != null) {
            user.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPassword() != null) {
            user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
        if (updatedUser.getPhone() != null) {
            user.setPhone(updatedUser.getPhone());
        }
        if (updatedUser.getGender() != null) {
            user.setGender(updatedUser.getGender());
        }
    
        userRepository.save(user);
    }
}
