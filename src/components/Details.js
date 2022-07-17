import React from "react";
import Navbar from "./Navbar";

function Details () {
    return (
        <div>
            <Navbar />
            <h1>Details</h1>
            <p>Our wedding is going to be held at the historic Chief Hosa Lodge in Golden Colorado October 15th, 2022 at 4 o'clock in the afternoon.</p> 
            <p>Please <a href="/rsvp" target="_blank">RSVP</a> before September 15th</p>

            <h3>DIRECTIONS |</h3><p> The venue is located at 27661 Genesee Lane, Golden, CO 80401. Take interstate 70 west from Golden, CO and exit on 253. Turn left on Moss Rock Road and continue onto Genesee Drive. Take another left onto Genesee Lane and the Lodge will be on your right. 
            </p>

            <h3>PARTY |</h3><p> Please join us for cocktails and an evening of dancing immedietly following the ceremony. Catering will be provided by Piggin' Out Smokehouse. Please contact <a href="mailto: barrett4467@gmail.com">Becca</a> if you have any dietary restrictions (gluten-free, vegetarian, etc.) or have any additional questions!  </p>
            
            <h3>ABOUT THE LODGE |</h3><p>The Chief Hosa Lodge, designed by architect Jules Jacques Benois Benedict became the city’s first mountain lodge opening in 1918. Using timber and stone from the immediate area, Benedict designed the lodge to blend into the hillside. He named the lodge after a Southern Arapaho tribal leader who was given the honorary title ‘Hosa’ by the Ute tribe, which meant ‘peaceful and beautiful’. </p>
        </div>
    )
}

export default Details; 