
// VARIABLES
const js_image_update = document.getElementById("js_image")
const picture_count = 13 //Total pictures in the carousel
let current_position = 1 //Start current position at the first picture
const picture_path = "./images/spaceball"
const picture_end = ".png"
let auto_move_direction = "next"; //current direction for the automated function for JavaScript Carousel 
    // as designed, the auto_move will continue with the direction regardless of user controls via arrow buttons
    // this can be modified to continue with the direction the user last used with manual scrolling


// MANUAL USER MOVE (using buttons)
function picture_move (next_or_prev) {
    console.log("PICTURE_MOVE: next_or_prev = " + next_or_prev)
    console.log("PICTURE_MOVE: currentPositon = " + current_position)
    
    //next_or_prev is true (next button was selected) 
    if (next_or_prev && current_position < picture_count) {
        move_next();
    }
    //next_or_prev is false (prev button was selected) 
    if (!next_or_prev && current_position > 1) {
        move_prev();
    }
    console.log("END currentPosition = " + current_position)
}

// AUTOMATED MOVE (setTimeout call)
// To adjust carousel speed, make changes to second parameter in setTimeout 
function auto_move () {
    console.log("AUTO MOVE: direction = "+ auto_move_direction + " current_position = " + current_position)
    
    // Logic check for if carousel has reached either end to update direction
    if (current_position == picture_count)
        auto_move_direction = "prev";
    if (current_position == 1)
        auto_move_direction = "next";
    
    // Automated move
    if (auto_move_direction == "next")
        move_next();
    else 
        move_prev();

    // automation
    setTimeout(auto_move, 7000); // <---- timing control for JS Carousel transition between pictures
}

// MOVE FUNCTIONS
function move_next() {
    current_position += 1;
    console.log("NEXT: moving to next picture " + picture_path + current_position + picture_end);
    js_image_update.setAttribute("src", picture_path + current_position + picture_end);
}
function move_prev() {
    current_position -= 1;
    console.log("PREV: moving to prev picture " + picture_path + current_position + picture_end);
    js_image_update.setAttribute("src", picture_path + current_position + picture_end);
}

// BUTTONS 
function show_buttons() {
    const button_DOM = document.getElementById("buttons")
    button_DOM.style.opacity = 0.6;
}
function hide_buttons() {
    const button_DOM = document.getElementById("buttons")
    button_DOM.style.opacity = 0;
}