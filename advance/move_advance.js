var products = [
    {
        id: 1,
        name: "Coffee",
      },
      {
        id: 2,
        name: "Milk",
      },
      {
        id: 3,
        name: "Mineral water",
      },
      {
        id: 4,
        name: "Fruit Juice",
      },
]

// Tạo html row để append vào table
function createHtmlRow(idProduct, nameProduct){
    return `<tr>
              <td>${nameProduct}</td>
              <td><button onclick="moveUpDown(${idProduct}, true)">Up</button></td>
              <td><button onclick="moveUpDown(${idProduct}, false)">Down</button></td>
            </tr>`;
}

// Hàm này sẽ giúp in các phần tử trong array ra bảng
function loadTable(){
    var table = document.getElementById('product-table');
    let htmlRows = '';
    
    products.map(e =>{

        // Đưa id và name vào để tạo row cho mỗi phần tử
        htmlRows += createHtmlRow(e.id, e.name);

    });

    // Dán các rows vào bên trong table, NB: không dùng append vi no k hieu html
    table.innerHTML = htmlRows;
}

// id: int
// isMoveUp: boolean 
function moveUpDown(id, isMoveUp){
  
   let index = canMove(id, isMoveUp);
   if(index == -1)
        return;

    // Nếu mà chọn đi lên thì hoán đổi với (index - 1)
    // Nếu không thì hoán đổi với index + 1
    let indexMove = isMoveUp ? index - 1 : index + 1;
        
    productSwap(index, indexMove);

    // Load lại bảng
    loadTable();
}

// Hàm này sẽ kiểu tra, nếu không move up hay down được thì sẽ trả về -1
// Nếu không thì trả về index của element co id
function canMove(id, isMoveUp){
    
    // Tìm index của phần tử có id trong mảng
    let index = products.findIndex(e => e.id === id);

    // Nếu chọn đi lên mà ở vị trí index 0 thì k lên được. Trả về -1
    if(isMoveUp && index <= 0)
        return -1;
    
    // Nếu chọn đi xuống mà ở vị trí (products.length -1) thì k xuống được. Trả về -1
    if(!isMoveUp && index >= products.length -1)
    return -1;

    return index;
}

// Hoán đổi
function productSwap(indexCurrent, indexSwap){
    let temp = products[indexCurrent];
    products[indexCurrent] = products[indexSwap];
    products[indexSwap] = temp;
}

// Phải chạy hàm này để nó load ra lần đầu
loadTable();
