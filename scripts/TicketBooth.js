const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent) 
} else if (clickEvent.target.id === "foodTicket") {
    const foodEvent = new CustomEvent("foodTicketPurchased")
    eventHub.dispatchEvent(foodEvent)
} else if (clickEvent.target.id === "gameTicket") {
    const gameEvent = new CustomEvent("gameTicketPurchased")
    eventHub.dispatchEvent(gameEvent)
} else if (clickEvent.target.id === "sideshowTicket") {
    const showEvent = new CustomEvent("sideshowTicketPurchased")
    eventHub.dispatchEvent(showEvent)
} else if (clickEvent.target.id === "fullPackageTicket"){
    const fullEvent = new CustomEvent("fullPackageTicketPurchased")
    eventHub.dispatchEvent(fullEvent)
}
    
})

