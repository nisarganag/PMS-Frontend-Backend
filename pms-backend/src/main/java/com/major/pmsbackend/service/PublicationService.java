package com.major.pmsbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.entity.Users;
import com.major.pmsbackend.repository.PublicationRepository;
import com.major.pmsbackend.repository.UserRepo;

@Service
public class PublicationService {
    @Autowired
    private PublicationRepository publicationRepository;
    @Autowired
    private UserRepo userRepository;
    public void uploadPublication(Publications publication) {
        // Get currently logged-in user's email
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        
        // Find the user by email
        Users user = userRepository.findByEmail(email)
            .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + email));

        // Set the user to the publication
        publication.setUser(user);

        // Save the publication
        publicationRepository.save(publication);
    }
}
