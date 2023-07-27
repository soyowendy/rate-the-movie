package br.com.souowendy.ratethemovie.dto;

public class ScoreDTO {
	private Long movieId;
	private String userEmail;
	private Double score;

	public ScoreDTO() {

	}

	public Long getMovieId() {
		return movieId;
	}

	public void setMovieId(Long movieId) {
		this.movieId = movieId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
}
