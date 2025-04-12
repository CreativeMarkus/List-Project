$(document).ready(function () {
  let list = $('#list');
  let inputs = $('input');
  $('#list').sortable();

  // create a list item with value
  function createListItem(value) {
    let li = $('<li></li>');
    li.append(document.createTextNode(value));

    // Strike-through 
    li.on('click', function () {
      $(this).toggleClass('strike');
    });

    // delete button "X"
    let deleteButton = $('<button>X</button>');
    deleteButton.on('click', function (e) {
      e.stopPropagation(); // Prevent toggle strike when delete is clicked
      li.remove(); // Remove the list item
    });

    // Append delete button to the list item
    li.append(' ').append(deleteButton);

    return li;
  }

  // Function to add item from an input field
  function addItemFromInput(inputSelector) {
    let value = $(inputSelector).val();
    if (value.trim() !== '') {
      let li = createListItem(value);
      list.append(li);
      $(inputSelector).val(''); // Clear the input field
    }
  }

  // Main button: Add input1 value to the list
  $('.main-button').on('click', function () {
    addItemFromInput('#input1');
  });

});