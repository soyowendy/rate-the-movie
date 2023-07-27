package br.com.souowendy.ratethemovie.repository;

import br.com.souowendy.ratethemovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
}
