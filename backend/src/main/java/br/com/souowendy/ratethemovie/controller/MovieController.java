package br.com.souowendy.ratethemovie.controller;

import br.com.souowendy.ratethemovie.dto.MovieDTO;
import br.com.souowendy.ratethemovie.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/movies")
public class MovieController {
	@Autowired
	private MovieService movieService;

	@GetMapping
	public ResponseEntity<Page<MovieDTO>> findAll(Pageable pageable) {
		return ResponseEntity.ok(movieService.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<MovieDTO>> findById(@PathVariable Long id) {
		return ResponseEntity.ok(movieService.findById(id));
	}
}
