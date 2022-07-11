const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')


items.forEach ((item) => {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
    
})

placeholders.forEach ((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})
let dragitem = null
function dragstart(event){
    
    event.target.classList.add('hold')
    setTimeout(() =>  event.target.classList.add('hide'), 0)
   dragitem = this
}


function dragend(event){
   
   event.target.classList.remove('hide')
   dragitem = null
}



function dragover(event){
    event.preventDefault()
 }
 
 function dragenter(event){
     event.target.classList.add('hovered')
     event.preventDefault()
 }
 
 function dragleave(event){
     event.target.classList.remove('hovered')
 }
 
 function dragdrop(event){
    this.append(dragitem)
    
     event.target.classList.remove('hovered')
 } 