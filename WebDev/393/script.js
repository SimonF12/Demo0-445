const game = {
    lives: 3,
    coins: 0,
    
    get points() {
      return this.coins * 10;
    },
    
    playerDies() {
      if (this.lives > 0) {
        this.lives--;
      }
    },
    
    newGame() {
      this.lives = 3;
      this.coins = 0;
    }
  };