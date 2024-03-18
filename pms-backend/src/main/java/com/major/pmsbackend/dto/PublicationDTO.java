package com.major.pmsbackend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PublicationDTO {
    private Long id;
    private Long userId;
    private String title;
    private String description;
    private String category;
    private String language;
    private String country;
    private String source;
    private String author;
    private String publishedData;
    // private byte[] data;
    // private byte[] thumbnail;
    
}