class Player {
  constructor({ x, y, score, id }) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
  }

  movePlayer(dir, speed) {
    if (dir == "up") {
      this.y = this.y + speed;
    }
    if (dir == "down") {
      this.y = this.y - speed;
    }
    if (dir == "right") {
      this.x = this.x + speed;
    }
    if (dir == "left") {
      this.x = this.x - speed;
    }
  }
  // Check for collisions
  collision(item) {
    // Set a radius to check for collisions
    let collisionRadius = 10;
    // Check the distance between x and y coordinate of player and item
    const dx = this.x - item.x;
    const dy = this.y - item.y;
    // Check the actual distance between the player and the item
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    // If the distance is less then the radius of both player and item return true and increase score by 1
    if (distance <= collisionRadius * 2) {
      this.score += 1;
      return true;
    }
  }

  calculateRank(arr) {
    // Store all current players in descending order
    const sortedPlayers = arr.sort((a, b) => {
      return b.score - a.score;
    });
    // Assign rank to chosen player and add 1 to account for starting index = 0
    const playerRank =
      sortedPlayers.findIndex((player) => player.id === this.id) + 1;
    // Return correct message
    return `Rank: ${playerRank}/${arr.length}`;
  }
}

export default Player;
