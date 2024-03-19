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
    public void updateUser(Long id, Users updatedUser) {
        @SuppressWarnings("null")
        Users user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found for id: " + id));
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        user.setPhone(updatedUser.getPhone());
        user.setGender(updatedUser.getGender());
        userRepository.save(user);
    }
}
