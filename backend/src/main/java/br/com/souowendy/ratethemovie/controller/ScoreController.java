package br.com.souowendy.ratethemovie.controller;

import br.com.souowendy.ratethemovie.dto.ScoreDTO;
import br.com.souowendy.ratethemovie.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/scores")
public class ScoreController {
	@Autowired
	private ScoreService scoreService;

	@PutMapping
	public ResponseEntity<Void> saveScore(@RequestBody ScoreDTO dto) {
		scoreService.saveScore(dto);
		return ResponseEntity.noContent().build();
	}
}
