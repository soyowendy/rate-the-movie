package br.com.souowendy.ratethemovie.service;

import br.com.souowendy.ratethemovie.dto.ScoreDTO;
import br.com.souowendy.ratethemovie.entities.Movie;
import br.com.souowendy.ratethemovie.entities.Score;
import br.com.souowendy.ratethemovie.entities.User;
import br.com.souowendy.ratethemovie.repository.MovieRepository;
import br.com.souowendy.ratethemovie.repository.ScoreRepository;
import br.com.souowendy.ratethemovie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {
	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public void saveScore(ScoreDTO scoreDTO) {
		User user = userRepository.findByEmail(scoreDTO.getUserEmail());

		if (user == null) {
			user = new User();
			user.setEmail(scoreDTO.getUserEmail());
			user = userRepository.saveAndFlush(user);
		}

		Movie movie = movieRepository.findById(scoreDTO.getMovieId()).get();

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(scoreDTO.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0;
		for (Score s : movie.getScores()) {
			sum += s.getValue();
		}

		double avg = sum / movie.getScores().size();

		movie.setScore(avg);
		movie.setCount(movie.getScores().size());

		movie = movieRepository.saveAndFlush(movie);
	}
}
