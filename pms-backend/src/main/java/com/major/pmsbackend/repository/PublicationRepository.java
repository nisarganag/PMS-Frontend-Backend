package com.major.pmsbackend.repository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.entity.Users;
public interface PublicationRepository extends JpaRepository<Publications, Long>{
    List<Publications> findByUser(Users user);
    Optional <Publications> findByTitle(String title);
    List<Publications> findByCategory(String category);
    List<Publications> findByLanguage(String language);
    List<Publications> findByCountry(String country);
    List<Publications> findBySource(String source);
    List<Publications> findByAuthor(String author);
    List<Publications> findByPublishedData(String publishedData);
    List<Publications> findByUserAndCategory(Users user, String category);
    List<Publications> findByUserAndLanguage(Users user, String language);
    List<Publications> findByUserAndCountry(Users user, String country);
    List<Publications> findByUserAndSource(Users user, String source);
    List<Publications> findByUserAndAuthor(Users user, String author);
    List<Publications> findByUserAndPublishedData(Users user, String publishedData);
    List<Publications> findByUserAndTitle(Users user, String title);
    List<Publications> findByUserAndTitleAndCategory(Users user, String title, String category);
    List<Publications> findByUserAndTitleAndLanguage(Users user, String title, String language);
    List<Publications> findByUserAndTitleAndCountry(Users user, String title, String country);
    List<Publications> findByUserAndTitleAndSource(Users user, String title, String source);
    List<Publications> findByUserAndTitleAndAuthor(Users user, String title, String author);
    List<Publications> findByUserAndTitleAndPublishedData(Users user, String title, String publishedData);
    List<Publications> findByUserAndCategoryAndLanguage(Users user, String category, String language);
    List<Publications> findByUserAndCategoryAndCountry(Users user, String category, String country);
    List<Publications> findByUserAndCategoryAndSource(Users user, String category, String source);
    List<Publications> findByUserAndCategoryAndAuthor(Users user, String category, String author);
    List<Publications> findByUserAndCategoryAndPublishedData(Users user, String category, String publishedData);
    List<Publications> findByUserAndLanguageAndCountry(Users user, String language, String country);
    List<Publications> findByUserAndLanguageAndSource(Users user, String language, String source);
    List<Publications> findByUserAndLanguageAndAuthor(Users user, String language, String author);
    List<Publications> findByUserAndLanguageAndPublishedData(Users user, String language, String publishedData);
}
