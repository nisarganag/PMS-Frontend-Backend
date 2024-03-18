package com.major.pmsbackend.service;

import java.util.List;
import java.util.stream.Collectors;

// import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.major.pmsbackend.dto.PublicationDTO;
import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.entity.Users;
import com.major.pmsbackend.repository.PublicationRepository;
import com.major.pmsbackend.repository.UserRepo;
import com.major.pmsbackend.utils.DataUtils;

@Service
public class PublicationService {
    @Autowired
    private PublicationRepository publicationRepository;
    @Autowired
    private UserRepo userRepository;

    public String uploadPublication(MultipartFile file, Publications publication) throws Exception {
        if (publication == null) {
            throw new IllegalArgumentException("Publication cannot be null");
        }

        // Get currently logged-in user's email
        String email = SecurityContextHolder.getContext().getAuthentication().getName();

        // Find the user by email
        Users user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found for email: " + email));

        // Set the user to the publication
        publication.setUser(user);

        // Save the publication
        @SuppressWarnings("null")
        Publications savedPublication = publicationRepository.save(Publications.builder().title(publication.getTitle())
                .description(publication.getDescription())
                .category(publication.getCategory())
                .language(publication.getLanguage())
                .country(publication.getCountry())
                .source(publication.getSource())
                .author(publication.getAuthor())
                .publishedData(publication.getPublishedData())
                .user(publication.getUser())
                .data(DataUtils.compressData(file.getBytes()))
                .build());

        return "File uploaded successfully : " + savedPublication.getId();

    }

    public byte[] downloadPublication(Long id) {
        @SuppressWarnings("null")
        Publications publication = publicationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Publication not found for id: " + id));
        return DataUtils.decompressData(publication.getData());
    }

    public List<PublicationDTO> getPublicationsByUserId(Long userId) {
        List<Publications> publications = publicationRepository.findByUserId(userId);
        return publications.stream()
                .filter(publication -> publication.getUser().getId().equals(userId)) // Filter by user ID
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private PublicationDTO convertToDTO(Publications publication) {
        PublicationDTO dto = new PublicationDTO();
        dto.setId(publication.getId());
        dto.setUserId(publication.getUser().getId());
        dto.setTitle(publication.getTitle());
        dto.setDescription(publication.getDescription());
        dto.setCategory(publication.getCategory());
        dto.setLanguage(publication.getLanguage());
        dto.setCountry(publication.getCountry());
        dto.setSource(publication.getSource());
        dto.setAuthor(publication.getAuthor());
        dto.setPublishedData(publication.getPublishedData());
        // if (publication.getData() != null) {
        // dto.setData(DataUtils.decompressData(publication.getData()));
        // } else {
        // dto.setData(null);
        // }

        return dto;
    }

    @SuppressWarnings("null")
    public void deletePublication(Long id) {
        publicationRepository.deleteById(id);
    }
}
