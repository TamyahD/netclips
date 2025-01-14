package com.netclip.netclips.repository;

import com.netclip.netclips.domain.VideoUser;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the VideoUser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VideoUserRepository extends JpaRepository<VideoUser, Long> {}
