
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import {addCustomOrder, getOrders, getMetals, getSizes, getStyles} from "./database.js"


/*ALGORITHM

when the create custom order button is clicked (event.target), 
you want addCustomOrder function to run which adds the orderBuilder to the customOrders array

*/


document.addEventListener(
    "click",
    (event) => {
        const buttonClicked = event.target
        if (buttonClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `
}


export const newKneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${jewelryOrders()}
        </article>
    `
}


//this creates the HTML format for the custom jewelry orders
const jewelryOrders = () => {
    let customOrders = getOrders()
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

   let HTMLStr = ""
    for (let order of customOrders) {
        const foundMetal = metals.find(
            (metal) => {
                return metal.id === order.metalId
            }
        )
        const metalCost = foundMetal.price

        const foundSize = sizes.find(
            (size) => {
                return size.id === order.sizeId
            }
        )
        const sizeCost = foundSize.price

        const foundStyle = styles.find(
            (style) => {
                return style.id === order.styleId
            }
        )
        const styleCost = foundStyle.price

        HTMLStr += `<div>Order #${order.id} cost ${metalCost + sizeCost + styleCost}</div>`
    }
    return HTMLStr
}


