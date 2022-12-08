
pub type Position = (usize, usize);
pub enum Direction {
    Top,
    Right, 
    Bottom, 
    Left
}

pub struct Game {
    width: usize,
    height: usize,
    pos: Vec<Position>,
    direction: Direction,
    food: Position
}

impl Game {
    pub fn new(width:usize, height:usize)->Self{
        Self { width: (), height: (), pos: (), direction: (), food: () }
    }
}