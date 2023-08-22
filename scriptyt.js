////Adding functionality of adding deleting and searching items

const addForm=document.getElementById('addform');
const newListul=document.getElementById('items');//items//itemList
//adding filter
const filter=document.getElementById('filter');
filter.addEventListener('keydown',filerItem);

addForm.addEventListener('submit',addItems);

//delete event
newListul.addEventListener('click',removeItem)

function addItems(e){
    e.preventDefault();
    // console.log(1)
    const formInputt=document.getElementById('formInput').value//item//newItem
    
    //creating new li element
    const li=document.createElement('li')
    li.className='list-group-item'
    // console.log(li)

    //adding textnode to li got from formInput

    li.appendChild(document.createTextNode(formInputt));

    newListul.appendChild(li)

    //creating delete button element

    const delBtn=document.createElement('button');
    //adding classes

    delBtn.className='btn btn-danger btn-sm float-right delete'
    delBtn.appendChild(document.createTextNode('X'))

    //adding button to li
    li.appendChild(delBtn)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            const li=e.target.parentElement;
            // li.remove() same thing
            newListul.removeChild(li);
        }
    }
    
}


////filter items
function filerItem(e){
    // console.log(1)
    // console.log(e.target.value.toLowerCase())
    const text=e.target.value.toLowerCase();
    
    //get li
    const items=newListul.getElementsByTagName('li')
    // console.log(items)

    //converting to array

    Array.from(items).forEach(function(formInputt){
        const itemName=formInputt.firstChild.textContent;
        // console.log(itemName)
        if(itemName.toLowerCase().indexOf(text)!=-1){
            formInputt.style.display='block';
        }else{
            formInputt.style.display='none'
        }
    })
}