export let lib32 = (function() {
    function lib32(value) {

    }

    var version = '0.1.4';

    function size(collection) {
        return Object.keys(collection).length;
    }

    function DOM(element) {

    }

    DOM.get = function (element) {
        let selectedElement = document.querySelectorAll(element)

        if(selectedElement.length > 1) return this.currEleme = selectedElement

        return this.currElem = selectedElement[0]
    }

    DOM.create = function (tag, content = undefined, count = undefined, classes = undefined, id = undefined) {
        if(tag === undefined) return console.error('Method DOM.create must have tag\nDOM.create(tag, [[content], [count], classes, id])')
        let createdElement = document.createElement(tag)
        
        if(count !== undefined) {
            let createdFragment = document.createDocumentFragment()

            for(let i = 0; i < count; i++) {
                let createdElement = document.createElement(tag)

                if(content !== undefined) {
                    if(content instanceof Array)
                        content.length > 1 ? createdElement.textContent = content[i] : createdElement.textContent = content[1]
                    else createdElement.textContent = content
                }

                if(classes !== undefined) {
                    createdElement.classList.add(classes)
                }

                createdFragment.append(createdElement)
            }
            return createdFragment;
        }
        

        if(content !== undefined)
            createdElement.textContent = content


        if(classes !== undefined) {
            createdElement.classList.add(classes)
        }

        if(id !== undefined) {
            createdElement.id = id
        }

        return createdElement
    }

    DOM.insert = function (parent, content) {
        if(parent === undefined) 
            return console.error('DOM.insert must have a parent to insert\nDOM.insert(parent, content)')

        if(content === undefined)
            return console.error('DOM.inser must have a content to insert\nDOM.inser(parent, content)')

        if(content instanceof Array) 
            return parent.append(content)

        // return parent.appendChild(content)
        return this
    }


    lib32.size = size
    lib32.DOM = DOM


    window._ = lib32;
    console.info(`You using lib32 v.${version}`)
}())
