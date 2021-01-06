
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const button = document.querySelector('.list');
const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src'))

//span このことについて追求



addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
const items = document.querySelectorAll('#list li')
// const elem2 = document.querySelector('img')
 const newItem = document.createElement('li');
 
 newItem.textContent= 'アイテム' + (list.children.length + 1);
                                  //　↑　↑　lこの３単語だけでループはできる（＋１を加えると完成）
　 list.appendChild(newItem)

// elem2.textContent ='アイテム' + (list.children.length + 1)

// console.log(elem2.getAttribute('src'));

// list.appendChild(elem2)


})

 removeButton.addEventListener('click',(event) => {
    list.removeChild(list.lastElementChild) // リストの最初の「アイテム1」が消える


 })