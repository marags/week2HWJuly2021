
const picture_count = 13 //Total pictures in the carousel
let current_position = 1 //Start current position at the first picture
let picture_path = "./images/spaceball"
let picture_end = ".png"

function picture_move (next_or_prev) {
  
    console.log("Button Clicked: currentPositon = " + current_position)
    let update = document.getElementById("js_image")
    
    //NextOrPrev is true, Next button was clicked, move to right (- pictureWidth) if not at the last picture
    if (next_or_prev && current_position < picture_count) {
        current_position += 1
        console.log("NEXT: moving to next picture " + picture_path + current_position + picture_end)
        update.setAttribute("src", picture_path + current_position + picture_end)
    }
    // Else, Prev button was clicked, move to the left (+ pictureWidth) if not at the first picture
    if (!next_or_prev && current_position > 1) {
        current_position -= 1
        console.log("PREV: moving to prev picture " + picture_path + current_position + picture_end)
        update.setAttribute("src", picture_path + current_position + picture_end)
        
    }
    console.log("END currentPosition = " + current_position)
}