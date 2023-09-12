// SIDEBAR DROPDOWN
function myFunction() {


document.addEventListener('DOMContentLoaded', function () {
  // note ? the fetch methods are provided for the add suer adn the delete suer
  const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
  const sidebar = document.getElementById('sidebar');
  const usersList = document.getElementById('usersList')
  allDropdown.forEach(item => {
      const a = item.parentElement.querySelector('a:first-child');
      a.addEventListener('click', function (e) {
          e.preventDefault();

          if (!this.classList.contains('active')) {
              allDropdown.forEach(i => {
                  const aLink = i.parentElement.querySelector('a:first-child');
                  aLink.classList.remove('active');
                  i.classList.remove('show');
              })
          }

          this.classList.toggle('active');
          item.classList.toggle('show');
      })
  })

  // SIDEBAR COLLAPSE
  const toggleSidebar = document.querySelector('nav .toggle-sidebar');
  const allSideDivider = document.querySelectorAll('#sidebar .divider');

  function updateSidebarState() {
      if (sidebar.classList.contains('hide')) {
          allSideDivider.forEach(item => {
              item.textContent = '-';
          });
          allDropdown.forEach(item => {
              const a = item.parentElement.querySelector('a:first-child');
              a.classList.remove('active');
              item.classList.remove('show');
          });
      } else {
          allSideDivider.forEach(item => {
              item.textContent = item.dataset.text;
          });
      }
  }

  function toggleSidebarState() {
      sidebar.classList.toggle('hide');
      updateSidebarState();
  }

  toggleSidebar.addEventListener('click', toggleSidebarState);

  sidebar.addEventListener('mouseleave', function () {
      if (this.classList.contains('hide')) {
          updateSidebarState();
      }
  });

  sidebar.addEventListener('mouseenter', function () {
      if (this.classList.contains('hide')) {
          updateSidebarState();
      }
  });

  // PROFILE DROPDOWN
  const profile = document.querySelector('nav .profile');
  const imgProfile = profile.querySelector('img');
  const dropdownProfile = profile.querySelector('.profile-link');

  function toggleProfileDropdown() {
      dropdownProfile.classList.toggle('show');
  }

  imgProfile.addEventListener('click', toggleProfileDropdown);

  window.addEventListener('click', function (e) {
      if (e.target !== imgProfile && e.target !== dropdownProfile) {
          if (dropdownProfile.classList.contains('show')) {
              toggleProfileDropdown();
          }
      }
  });





  // Function to show the "Add User" form
  function showAddUserForm() {
    const addUserForm = document.getElementById('addUserForm');
    addUserForm.style.display = 'block';
    setTimeout(() => {
      addUserForm.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adjust the delay as needed
    }


    // Event listener to trigger the "Add User" form display
    const addUserLink = document.querySelector('.addUser');
    addUserLink.addEventListener('click', showAddUserForm);

    // Convert users, admins, and products to arrays
   let  usersArray = [

    ];




    // Function to create user div
    function createUserDiv(user) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-item');
    userDiv.setAttribute('userid',user._id)
    if(user.type === 'user'){
    userDiv.innerHTML = `
      <h3>${user.name}</h3>
      <p>id:${user._id}</p>
      <p>Email: ${user.email}</p>
      <p>Age: ${user.address}</p>
      <p>Role: ${user.type}</p>
      <button id="editbtn">Make Sub-Admin</button>
    `
    }else{
    userDiv.innerHTML = `
    <h3>${user.name}</h3>
    <p>id:${user._id}</p>
    <p>Email: ${user.email}</p>
    <p>Age: ${user.address}</p>
    <p>Role: ${user.type}</p>`
    }
    usersList.appendChild(userDiv);
  }
    const usersData = document.getElementById('usersData');
    usersData.addEventListener('click', async (e) => {
      e.preventDefault();
      try{
        const response = await fetch('http://localhost:3000/api/mange/allUsers',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'
              }
        })
        if (response.ok){
            const data = await response.json()
            console.log(data)
            usersArray = data;
            console.log(usersArray,'usersarray')
           usersList.innerHTML = '';
            usersArray.forEach(user => createUserDiv(user));
        }
      }catch(e){
          console.log('error',e.message)
      }
    })






  usersList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('#deletebtn');
    console.log('Event Target:', e.target);
    console.log('Delete Button:', deleteBtn);
    if (deleteBtn) {
      const userDiv = deleteBtn.parentElement;
      console.log(userDiv);

      const id = parseInt(userDiv.getAttribute('userid'), 10);
      console.log(id);
      const confirmDelete = confirm(`Are you sure you want to delete this user?${id}`);
      deleteUser(id);
    }
  });


  function updateUi() {
    usersList.innerHTML = '';
    usersArray.forEach(user => {
      createUserDiv(user);
    });
  }





  usersList.addEventListener(
    'click', async (e)=>{
      const editBtn = e.target.closest('#editbtn');
      console.log('Event Target@@@:', e.target);
      console.log('Edit Button@@@:', editBtn);
      if (editBtn) {
        const userDiv = editBtn.parentElement;
          console.log(userDiv);
          const index = userDiv.getAttribute('userid');
          console.log('index@@@',typeof index,index)
          const user =usersArray.find(ele=>ele._id === index);
          console.log("USER@@:",user );

      try {
        const response = await fetch(`http://localhost:3000/api/mange/change/${index}`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json', // Add the Content-Type header to indicate JSON data
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'
          }
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          updateUi();
        }
      } catch (error) {
        console.error('Error:', error);
      }

    }
    }
  )
  /**
   * Edits the user form.
   *
   * @param {object} user - The user object containing the user's information.
   * @return {undefined} This function does not return a value.
   */
  function editform(user,index){
  const editForm = document.getElementById('editForm');

  console.log(editUserForm)
  editForm.elements.name.value = user.name;
  editForm.elements.userId.value = user._id;
  editForm.elements.email.value = user.email;
      editForm.elements.gender.value = user.address;
      editForm.elements.role.value = user.type;
      divForm.style.display = 'block';

      // Optional: Scroll to the form for better user experience
      divForm.scrollIntoView({ behavior: 'smooth' });

  }
  const divForm = document.getElementById('editUserForm')
  const editUserForm = document.getElementById('editForm');

  let  booksArray = [

  ];
  const booksData = document.getElementById('booksData');
  booksData.addEventListener('click', async (e) => {

    try{
      const response = await fetch(`http://localhost:3000/api/store/books`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data , typeof data);
      booksArray = [...data];
      console.log('booksArray',booksArray);
      booksArray.forEach(book => createBookDiv(book));

    }catch (error) {
      console.error('Error:', error);
    }
  })
  // const book =[
  //   {
  //     "_id": "64c5365e421bd4eddeea2bc1",
  //     "name": "Book XY1",
  //     "sellingPrice": 25,
  //     "category": "Fantasy",
  //     "description": "Beautiful and very special book",
  //     "imageURL": "https://picsum.photos/200",
  //     "quantity": 100,
  //     "__v": 0
  //   },

  // ]
  function showAddBookForm() {
    const addBookForm = document.getElementById('addBookDiv');
    addBookForm.style.display = 'block';
    setTimeout(() => {
      addBookForm.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adjust the delay as needed
  }

  // Event listener to trigger the "Add Book" form display
  const addBookLink = document.querySelector('.addBook');
  addBookLink.addEventListener('click', showAddBookForm);

  // Function to create Book div
  const booksList = document.getElementById('booksList');
  function createBookDiv(book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-item');
    bookDiv.setAttribute('bookid', book._id);
    bookDiv.innerHTML = `
      <h3>${book.name}</h3>
      <p>ID: ${book._id}</p>
      <p>category: ${book.category}</p>
      <p>selling price: ${book.sellingPrice}</p>
      <p>quantity: ${book.quantity}</p>
      <p>description: ${book.description}</p>
      <p></p><img src="${book.imageURL}" alt="bookImage"></p>
      <button id="deletebtn">Delete</button>
      <button id="editBookbtn">Edit</button>
    `;
    booksList.appendChild(bookDiv);
  }

  // Loop through the books array and create book divs
  booksArray.forEach(book => createBookDiv(book));

  const addBookForm = document.getElementById('addBookForm');
  addBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('addName').value;
    const bookId = document.getElementById('addBookId').value;
    const Category = document.getElementById('addCategory').value;
    const SellingPrice = parseInt(document.getElementById('addSellingPrice').value);
     const Quantity = parseInt(document.getElementById('addQuantity').value);
    const Description = document.getElementById('addDescription').value;
    const ImageURL = document.getElementById('addImageURL').value;

    const newBook = {
      "name": title,
       "costPrice": 15,
        "sellingPrice": SellingPrice,
         "category": Category,
      "description": Description,
      "imageURL": ImageURL,
      "quantity": Quantity
  }

  try {
    const response = await fetch(`http://localhost:3000/api/mange/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Add the Content-Type header to indicate JSON data
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'
      },
      body: JSON.stringify(newBook) // Convert newBook object to JSON string
    });
  } catch (error) {
    console.error('Error:', error);
  }

    booksArray.push(newBook);


    createBookDiv(newBook);
  });

  booksList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('#deletebtn');
    if (deleteBtn) {
      const bookDiv = deleteBtn.parentElement;
      const id = bookDiv.getAttribute('bookid');
      console.log('the id',id)
      const book = booksArray.find(book => book._id === id);
      const confirmDelete = confirm(`Are you sure you want to delete this book?  ${book.name}`);
      if (confirmDelete) {
        deleteBook(id);
      }
    }
  });

  async function deleteBook(id) {
    const index = booksArray.findIndex(book => book._id === id);
    try {
      const response = await fetch(`http://localhost:3000/api/mange/books/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', // Add the Content-Type header to indicate JSON data
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'
        }// Convert newBook object to JSON string
      });
    } catch (error) {
      console.error('Error:', error);
    }
    if (index !== -1) {
      booksArray.splice(index, 1);
      updateBooksUI();
    }
  }

  async function updateBooksUI() {
    booksList.innerHTML = '';
    try{
      const response = await fetch(`http://localhost:3000/api/store/books`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data , typeof data);
      booksArray = [...data];
      console.log('booksArray',booksArray);
      booksArray.forEach(book => createBookDiv(book));

    }catch (error) {
      console.error('Error:', error);
    }
    // booksArray.forEach(book => {
    //   createBookDiv(book);
    // });
  }

  // Edit book section
  const editBookDiv = document.getElementById('editBookDiv');
  const editBookForm = document.getElementById('editBookForm');

  function editBook(book) {
    editBookForm.elements.editName.value = book.name;
    editBookForm.elements.editBookId.value = book._id;
    editBookForm.elements.editCategory.value = book.category;
    editBookForm.elements.editSellingPrice.value = book.sellingPrice;
    editBookForm.elements.editQuantity.value = book.quantity;
    editBookForm.elements.editDescription.value = book.description;
    editBookForm.elements.editImageURL.value = book.imageURL;
    editBookDiv.style.display = 'block';
    editBookDiv.scrollIntoView({ behavior: 'smooth' });
  }

  booksList.addEventListener('click', (e) => {
    const editBtn = e.target.closest('#editBookbtn');
    console.log('Event Target:', e.target);
    console. log(editBtn);
    if (editBtn) {
      const bookDiv = editBtn.parentElement;
      const id = bookDiv.getAttribute('bookid');
      console.log(id);
      const book = booksArray.find(book => book._id === id);
      console.log(book);
      editBook(book);
    }
  });

   editBookForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const _id = editBookForm.elements.editBookId.value;
    const index = booksArray.findIndex(book => book._id === _id);
    const editedBook = {
      "name": editBookForm.elements.editName.value,
      "_id":_id,
      "costPrice":125,
      "category": editBookForm.elements.editCategory.value,
      "sellingPrice": editBookForm.elements.editSellingPrice.value,
      "quantity": editBookForm.elements.editQuantity.value,
      "description": editBookForm.elements.editDescription.value,
      "imageURL": editBookForm.elements.editImageURL.value,
    };
    try {
      const response = await fetch(`http://localhost:3000/api/mange/books/${_id}`, {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json', // Add the Content-Type header to indicate JSON data
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'
        },body: JSON.stringify(editedBook)
      });
    } catch (error) {
      console.error('Error:', error);
    }
    booksArray[index] = editedBook;
    updateBooksUI();
    editBookDiv.style.display = 'none';
  });

  // function searchBooksByYear(searchYear) {
  //   const matchingBooks = booksData.filter((book) => book.year === searchYear);
  //   return matchingBooks;
  // }

  // // Example usage:
  // const searchYear = 1960;
  // const foundBooks = searchBooksByYear(searchYear);
  // console.log(foundBooks);
  //

  //???????????????????????????????????????????????????????


  // >>>>>>>search part
  // Assuming you have three arrays: booksArray, usersArray, and adminsArray

  const searchInput = document.getElementById('searchInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');

  // Function to perform the search and filter the data
  function searchAndFilterData(searchTerm) {
    const filteredData = [];

    // Search in the booksArray
    booksArray.forEach(book => {
      if (fuzzyMatch(book.title, searchTerm) || fuzzyMatch(book.author, searchTerm) || fuzzyMatch(book.genre, searchTerm)) {
        filteredData.push(book);
      }
    });

    // Search in the usersArray
    usersArray.forEach(user => {
      if (fuzzyMatch(user.name, searchTerm) || fuzzyMatch(user.email, searchTerm)) {
        filteredData.push(user);
      }
    });

    // Search in the adminsArray
    adminsArray.forEach(admin => {
      if (fuzzyMatch(admin.name, searchTerm) || fuzzyMatch(admin.email, searchTerm)) {
        filteredData.push(admin);
      }
    });

    return filteredData;
  }

  // Function to check for a fuzzy match
  function fuzzyMatch(str, searchTerm) {
    const regex = new RegExp(searchTerm.split('').join('.*'), 'i');
    return str.match(regex);
  }

  // Function to display the search results
  function displaySearchResults(results) {
    searchResultsContainer.innerHTML = '';

    results.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('search-result');
      // Customize the content based on the type of object (book, user, or admin)
      if (result.hasOwnProperty('title')) {
        resultDiv.innerHTML = `<h1>Search Results</h1>
        <div id="result1">
          <h3>${result.title}</h3>
          <p>Author: ${result.author}</p>
          <p>Genre: ${result.genre}</p>
          <button class="add-btn">Add</button>
          <button class="delete-btn">Delete</button>
        </div>
        `;
      } else if (result.hasOwnProperty('name')) {
        resultDiv.innerHTML = `<h1>search results</h1>
        <div id="result2">
        <h3>${result.name}</h3>
        <p>Email: ${result.email}</p>
        <p>Role: ${result.role}</p>
        </div>`;
      }
      searchResultsContainer.appendChild(resultDiv);
    });
  }

  // Event listener for the search input
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      const results = searchAndFilterData(searchTerm);
      displaySearchResults(results);
    } else {
      searchResultsContainer.innerHTML = '';
    }
  });

  // get the total number of books
  async function fetchTotalBooks() {
    try {
      const response = await fetch('http://localhost:3000/api/mange/countBooks',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'

      }}
      );
      const data = await response.json();
      console.log(data);
      return data.totalBooks
      ;
    } catch (error) {
      console.error('Error fetching total number of books:', error);
      return 0;
    }
  }

  // Function to update the total number of books on the page
  async function updateTotalBooks() {
    const totalBooks = await fetchTotalBooks();
    document.getElementById('totalBooks').textContent = totalBooks;
  }

  // Initial update and set interval to update every minute (60000 milliseconds)
  updateTotalBooks();
  setInterval(updateTotalBooks, 6000);
  ///???????????????????????????????
  async function fetchTotalUsers() {
    try {
      const response = await fetch('http://localhost:3000/api/mange/countUsers',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'

      }}
      );
      const data = await response.json();
      console.log(data.totalUsers,'users');
      return data.totalUsers
      ;
    } catch (error) {
      console.error('Error fetching total number of users:', error);
      return 0;
    }
  }

  // Function to update the total number of books on the page
  async function updateTotalUsers() {
    const users = await fetchTotalUsers();
    document.getElementById('totalUsers').textContent = users;
  }

  // Initial update and set interval to update every minute (60000 milliseconds)
  updateTotalUsers();
  setInterval(updateTotalUsers, 6000);
  ///???????????????????????
  async function fetchTotalOrders() {
    try {
      const response = await fetch('http://localhost:3000/api/mange/countOrders',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'

      }}
      );
      const data = await response.json();
      ;
      return data.totalOrders
      ;
    } catch (error) {
      console.error('Error fetching total number of books:', error);
      return 0;
    }
  }

  // Function to update the total number of books on the page
  async function updateTotalOrders() {
    const orders = await fetchTotalOrders();
    document.getElementById('totalOrders').textContent = orders;
  }

  // Initial update and set interval to update every minute (60000 milliseconds)
  updateTotalOrders();
  setInterval(updateTotalOrders, 6000);
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  async function fetchTotalProfit() {
    try {
      const response = await fetch('http://localhost:3000/api/mange/totalProfit',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGM5MWNjOGZhMzNlZTlmNDFmYTg4ODMiLCJpYXQiOjE2OTA5MDE3MDQsImV4cCI6MTcyNjkwMTcwNH0.QpudSuJlfwDjYtXY-wobDjxFs-jJIGB94mBJRZ1h47w'

      }}
      );
      const data = await response.json();
      ;
      console.log(data)
      return data.totalProfit
      ;
    } catch (error) {
      console.error('Error fetching total number of books:', error);
      return 0;
    }
  }

  // Function to update the total number of books on the page
  async function updateTotalProfit() {
    const profit = await fetchTotalProfit();
    document.getElementById('totalProfit').textContent = profit;
  }

  // Initial update and set interval to update every minute (60000 milliseconds)
  updateTotalProfit();
  setInterval(updateTotalProfit, 6000);
  });
};
