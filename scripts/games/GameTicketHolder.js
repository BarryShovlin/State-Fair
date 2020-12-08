const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".games")

export const GameTicketHolder = () => {
    eventHub.addEventListener("gameTicketPurchased", CustomEvent => {
        contentTarget.innerHTML += `<div class="person player"></div>
        `
    })

}
