
const update = document.getElementById("js_image")
const picture_count = 13 //Total pictures in the carousel
let current_position = 1 //Start current position at the first picture
const picture_path = "./images/spaceball"
const picture_end = ".png"

function picture_move (next_or_prev) {
  
    console.log("Button Clicked: currentPositon = " + current_position)
    
    //next_or_prev is true (next button was selected) update current position + 1 if less than picture count (total pictures in carousel)
    if (next_or_prev && current_position < picture_count) {
        current_position += 1

        console.log("NEXT: moving to next picture " + picture_path + current_position + picture_end)
        update.setAttribute("src", picture_path + current_position + picture_end)
        
    }
    //next_or_prev is false (prev button was selected) update current position - 1 if more than picture count (1)
    if (!next_or_prev && current_position > 1) {
        current_position -= 1
        
        console.log("PREV: moving to prev picture " + picture_path + current_position + picture_end)
        update.setAttribute("src", picture_path + current_position + picture_end)

    }
    console.log("END currentPosition = " + current_position)
}
