package br.com.souowendy.ratethemovie.repository;

import br.com.souowendy.ratethemovie.entities.Score;
import br.com.souowendy.ratethemovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
