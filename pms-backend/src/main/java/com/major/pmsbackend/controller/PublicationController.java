package com.major.pmsbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.service.PublicationService;

@RestController
@RequestMapping("/api/v1/publications")
public class PublicationController {
    @Autowired
    private PublicationService publicationService;
    
    @Secured("USER")
    @PostMapping("/upload")
    public void uploadPublication(@RequestBody Publications publication) {
        publicationService.uploadPublication(publication);
    }
}
