package br.com.souowendy.ratethemovie.service;

import br.com.souowendy.ratethemovie.dto.MovieDTO;
import br.com.souowendy.ratethemovie.entities.Movie;
import br.com.souowendy.ratethemovie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {
	@Autowired
	private MovieRepository movieRepository;

	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		return movieRepository.findAll(pageable).map(MovieDTO::new);
	}

	@Transactional(readOnly = true)
	public Optional<MovieDTO> findById(Long id) {
		Optional<Movie> movie = movieRepository.findById(id);
		return Optional.of(new MovieDTO(movie.get()));
	}
}
