package com.major.pmsbackend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.major.pmsbackend.entity.Publications;
import com.major.pmsbackend.entity.Users;
public interface PublicationRepository extends JpaRepository<Publications, Long>{
    List<Publications> findByUser(Users user);
}
