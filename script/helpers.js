export const valueSetter = (selector, value) => {
    document.querySelector(selector).innerHTML = value;
}
let j = 0
export const tagCreator = (tagName, parent, child, childValue,  value = '', index = '') => {
    const tag = document.createElement(tagName);
    tag.classList = 'memberShip'
    // tag.dataset.option = index
    parent.appendChild(tag)
    
    if(Array.isArray(child)) {
        
        for(let i = 0; i < child.length; i++) {

            const element = document.createElement(child[i])
            tag.appendChild(element)

            for(j in childValue) {
                element.innerHTML = childValue[j];
                // j += 1
            }

            console.log(element)
            
        }
    } else {

        tag.innerHTML = value;
    }
    
    
}