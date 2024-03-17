package com.major.pmsbackend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="publications")
public class Publications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    private String description;
    private String category;
    @Column(nullable = false)
    private String language;
    private String country;
    private String source;
    @Column(nullable = false)
    private String author;
    private String publishedData;
    @Lob
    @Column(name="data",length = 1000000)
    private byte[] data;

    @ManyToOne
    @JoinColumn(name = "user_Id", insertable = true, updatable = true)
    private Users user;
}
