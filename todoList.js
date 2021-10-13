const txt = document.querySelector('.txt')
const save= document.querySelector('.save')
const list = document.querySelector('.list')
const deleteAll = document.querySelector('.deleteAll')
let todoData = [];

//新增儲存
save.addEventListener('click',function(e){
    if(txt.value==""){
        alert('請輸入內容');
        return;
    }
    
    let obj = {};
    obj.content = txt.value;
    todoData.push(obj);
    renderData();
})

//刪除個別
list.addEventListener('click',function(e){
    if(e.target.getAttribute("class")!=="delete")
    {
        alert('你目前沒有正確點到按鈕');
        return;
    }
    let num = e.target.getAttribute("data-num");
    //console.log(num);
    todoData.splice(num,1);
    renderData();
});

//刪除所有
deleteAll.addEventListener('click',function(e){
    let num = e.target.getAttribute("data-num");
    todoData.splice(0);
    renderData();
})


//重新render
function renderData(){
    let str =''
    todoData.forEach(function(item,index){
        str+=`
        <li>${item.content}
                <input type="button" class="delete" data-num=${index} value="刪除待辦">
        </li>`
    })
    const list = document.querySelector('.list')
    list.innerHTML = str;
    txt.value="";
  
}

