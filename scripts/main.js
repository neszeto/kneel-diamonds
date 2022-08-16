import { KneelDiamonds, newKneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    const renderAllHTML = () => {
        mainContainer.innerHTML = newKneelDiamonds()
    }
    renderAllHTML()
})