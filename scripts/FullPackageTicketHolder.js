const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".rides", ".food", ".games", ".sideshow")


export const fullPackageTicketHolder = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", CustomEvent => {
        contentTarget.innerHTML += `
        <div class="person bigSpender"</div>
        `
    })
}