package com.major.pmsbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.major.pmsbackend.dto.PublicationDTO;
import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.entity.Users;
import com.major.pmsbackend.repository.UserRepo;
import com.major.pmsbackend.service.PublicationService;

@RestController
@RequestMapping("/api/v1/publications")
public class PublicationModificationController {
    @Autowired
    private PublicationService publicationService;
    @Autowired
    private UserRepo userRepository;

    @DeleteMapping("/{userId}/delete/{id}")
    public ResponseEntity<?> deletePublication(@PathVariable Long userId, @PathVariable Long id) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUsername = auth.getName();

        List<PublicationDTO> publications = publicationService.getPublicationsByUserId(userId);
        @SuppressWarnings("null")
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found for id: " + userId));
        for (PublicationDTO publication : publications) {
            if (user != null && user.getEmail().equals(loggedInUsername) && publication.getId().equals(id)) {
                publicationService.deletePublication(publication.getId());
                return ResponseEntity.status(HttpStatus.OK).body("Publication deleted successfully");
            }
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to delete this publication");
    }

    @PutMapping("/{userId}/update/{id}")
    public ResponseEntity<?> updatePublication(@PathVariable Long userId, @PathVariable Long id,
            @RequestBody Publications updatedPublication) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUsername = auth.getName();
        @SuppressWarnings("null")
        Users user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found for id: " + userId));
        if (user.getEmail().equals(loggedInUsername)) {
            publicationService.updatePublication(id, updatedPublication);
            return ResponseEntity.status(HttpStatus.OK).body("Publication updated successfully");
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to update this publication");
    }
}
