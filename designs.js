$(document).ready(function () { 
  const sizePicker = $('#sizePicker');
  sizePicker.submit(function makeGrid(grid) {  //submit botton operation
    $('table tr').remove(); //here when you press submit botton, it is generated again
    let row_input = $('#inputHeight').val(); //the user type the value of the height to add rows
    let col_input = $('#inputWidth').val(); //the user type  the width value to add columns
    for (var i = 1; i <= row_input; i++) {
      $('table').append("<tr></tr>"); //cycle is created in the cell row
      for (var j = 1; j <= col_input; j++) {
        $('tr:last').append("<td></td"); //cycle adds one cell after each row
        $('td').attr("class", 'cells') //in 'td', a class is created for cells
      }
    }
    grid.preventDefault(); //here you prevent the grid from being removed after I created it
    $('.cells').click(function (event) { //you create an event to color a cell
      var paint = $('#colorPicker').val();
      $(event.target).css('background-color', paint); //adds the chosen  color in the grid
    });
  });
});