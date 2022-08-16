import { getStyles, setStyle } from "./database.js"

const styles = getStyles()


//this event takes the style selected and creates a new styleId key for the orderBuilder array
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(
        styleObject => `<li>` + 
        `<input type="radio" name="style" value="` + styleObject.id + `"` + `/>` + styleObject.style + 
        `</li>`)


    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}



