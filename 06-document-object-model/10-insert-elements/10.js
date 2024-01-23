// Ví dụ chèn phần tử liền kề
function insertElement() {
    const filter = document.querySelector('.filter');
  
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';
  
    filter.insertAdjacentElement('beforebegin', h1);
  }



  // ví dụ chèn Văn bản liền kề
  function insertText() {
    const item = document.querySelector('li:first-child');
  
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
  }

  
  // ví dụ chèn AdjacentHTML
  function insertHTML() {
    const clearBtn = document.querySelector('#clear');
  
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
  }


  // ví dụ chèn trước
  function insertBeforeItem() {
    const ul = document.querySelector('ul');
  
    const li = document.createElement('li');
    li.textContent = 'insertBefore';
  
    const thirdItem = document.querySelector('li:nth-child(3)');
  
    ul.insertBefore(li, thirdItem);
  }
  
  insertElement();
  
  /*
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
  */