# Game of Life

This project is an implementation of Conway's Game of Life.

## How to Run

1. Open `index.html` in a web browser.
2. The controls are simple:
    - Click to select alive cells.
    - Press `S` to start the animation, which runs until you stop it with `Q`.
    - Press `D` to advance one step at a time, allowing you to observe the game slowly.
3. The game will update the grid according to the rules of Conway's Game of Life.

## Rules of Conway's Game of Life

1. Any live cell with fewer than 2 live neighbours dies, as if by underpopulation.
2. Any live cell with 2 or 3 live neighbours lives on to the next generation.
3. Any live cell with more than 3 live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly 3 live neighbours becomes a live cell, as if by reproduction.

## About the Project

This implementation was developed using JavaScript, HTML, and CSS, focusing on simplicity and interactivity. The project includes a graphical interface that allows users to visualize the evolution of cell patterns over time. The game's logic was made to run with O(n²) complexity, as it involves iterating over a 2D grid of cells to calculate the next state based on the rules of Conway's Game of Life.

## Why This Project is Interesting

Conway's Game of Life demonstrates how simple rules can create complex behaviors, mirroring concepts found in artificial life and computational theory. It is Turing complete, meaning that, in theory, it can simulate any computation. This leads to thought-provoking questions about whether our own reality follows a similar set of fundamental rules, making it an intriguing analogy for simulation theory.
