$(document).ready(function(){
    // INITIALIZATION STAGE 1
  var current_stage = 1;
  var max_stage = 5;
  var number_of_click = 0;
  stage(current_stage);
  $('.currentStage').html(current_stage);
  function stage(numberStage) {
    if(numberStage == 1) {
      /*ROW 1 :*/  noactive(1,1);  noactive(1,2);   active(1,3);  noactive(1,4);  noactive(1,5);
      /*ROW 2 :*/  noactive(2,1);    active(2,2); noactive(2,3);    active(2,4);  noactive(2,5);
      /*ROW 3 :*/    active(3,1);  noactive(3,2); noactive(3,3);  noactive(3,4);    active(3,5);
      /*ROW 4 :*/  noactive(4,1);    active(4,2); noactive(4,3);    active(4,4);  noactive(4,5);
      /*ROW 5 :*/  noactive(5,1);  noactive(5,2);   active(5,3);  noactive(5,4);  noactive(5,5);
    } else if(numberStage == 2) {
      /*ROW 1 :*/    active(1,1);  noactive(1,2); noactive(1,3);  noactive(1,4);    active(1,5);
      /*ROW 2 :*/  noactive(2,1);    active(2,2);   active(2,3);    active(2,4);  noactive(2,5);
      /*ROW 3 :*/  noactive(3,1);    active(3,2); noactive(3,3);    active(3,4);  noactive(3,5);
      /*ROW 4 :*/  noactive(4,1);    active(4,2);   active(4,3);    active(4,4);  noactive(4,5);
      /*ROW 5 :*/    active(5,1);  noactive(5,2); noactive(5,3);  noactive(5,4);    active(5,5);
    } else if(numberStage == 3) {
      /*ROW 1 :*/ noactive(1,1);  noactive(1,2);  noactive(1,3);    active(1,4);    active(1,5);
      /*ROW 2 :*/ noactive(2,1);    active(2,2);    active(2,3);    active(2,4);  noactive(2,5);
      /*ROW 3 :*/   active(3,1);    active(3,2);  noactive(3,3);  noactive(3,4);  noactive(3,5);
      /*ROW 4 :*/ noactive(4,1);    active(4,2);    active(4,3);    active(4,4);  noactive(4,5);
      /*ROW 5 :*/ noactive(5,1);  noactive(5,2);  noactive(5,3);    active(5,4);    active(5,5);
    } else if(numberStage == 4) {
      /*ROW 1 :*/   active(1,1);    active(1,2); noactive(1,3);    active(1,4);    active(1,5);
      /*ROW 2 :*/   active(2,1);  noactive(2,2); noactive(2,3);  noactive(2,4);    active(2,5);
      /*ROW 3 :*/   active(3,1);  noactive(3,2); noactive(3,3);  noactive(3,4);    active(3,5);
      /*ROW 4 :*/   active(4,1);  noactive(4,2); noactive(4,3);  noactive(4,4);    active(4,5);
      /*ROW 5 :*/   active(5,1);    active(5,2); noactive(5,3);    active(5,4);    active(5,5);
    } else if(numberStage == 5) {
      /*ROW 1 :*/  noactive(1,1);  noactive(1,2); noactive(1,3);  noactive(1,4);   noactive(1,5);
      /*ROW 2 :*/  noactive(2,1);  noactive(2,2); noactive(2,3);  noactive(2,4);   noactive(2,5);
      /*ROW 3 :*/  noactive(3,1);  noactive(3,2); noactive(3,3);  noactive(3,4);   noactive(3,5);
      /*ROW 4 :*/  noactive(4,1);  noactive(4,2); noactive(4,3);  noactive(4,4);   noactive(4,5);
      /*ROW 5 :*/  noactive(5,1);  noactive(5,2); noactive(5,3);  noactive(5,4);   noactive(5,5);
    }
  }

    // Reset Stage
  $(".resetStage").click(function() {
    stage(current_stage);
    number_of_click = 0;
    $('.numberClick span').html(number_of_click);
  })

    // Reset Game
  $('.resetGame').click(function() {
    current_stage = 1;
    number_of_click = 0;
    stage(current_stage);
    $('.currentStage').html(current_stage);
    $('#win').text('');
    $('.numberClick span').html(number_of_click);
    $('#scoreboard tr td:nth-child(2)').html("0");
  })

    // Click on table
  $("#game td").click(function() {
    var column_num = parseInt( $(this).index() ) + 1;
    var row_num = parseInt( $(this).parent().index() )+1;
    if(row_num <= 5 && row_num >= 1 && column_num <= 5 && column_num >= 1) {
      var i = 0;
      var next_row = 0;
      var next_column = 0;
    	while(i < 4) {
        if(i == 0) {
          next_row = row_num;
          next_column = column_num + 1;
        }
        if(i == 1) {
          next_row = row_num;
          next_column = column_num - 1;
        }
        if(i == 2) {
          next_row = row_num + 1;
          next_column = column_num;
        }
        if(i == 3) {
          next_row = row_num - 1;
          next_column = column_num;
        }
        toggle(next_row, next_column);
        i = i + 1;
      }            
      toggle(row_num, column_num);
    }
    number_of_click += 1;
    $('.numberClick span').html(number_of_click);
    var number_of_blue = 0;
    var number_of_red = 0;
    for (var i = 1; i <= 5; i++) {
      for (var j = 1; j <= 5; j++) {
        if($('#game tr:nth-child('+i+') td:nth-child('+j+')').attr('class') == 'active') {
          number_of_blue += 1;
        } else {
          number_of_red += 1;
        }
      };
    };  
    if(number_of_blue == 25) {
        // WIN
        if(current_stage == max_stage) {
          // FINISH
          $('#win').text('GRATZ YOU\'VE DONE ALL THE STAGE. Number of click for the previous stage : '+number_of_click);
          $('#scoreboard tr:nth-child('+ (current_stage + 1) +') td:nth-child(2)').html(number_of_click)
        } else {
          current_stage += 1;
          $('#win').text('STAGE UP. CURRENT STAGE : '+current_stage+' Previous stage done in '+number_of_click+' clicks');
          $('#scoreboard tr:nth-child('+ (current_stage) +') td:nth-child(2)').html(number_of_click)
          $('.currentStage').html(current_stage);
          number_of_click = 0;
          $('.numberClick span').html(number_of_click);
          stage(current_stage);
        }
    }
  });
  function toggle(row, column) {
    $('#game tr:nth-child('+row+') td:nth-child('+column+')').toggleClass('active');
  }

  function active(row, column) {
    if($('#game tr:nth-child('+row+') td:nth-child('+column+')').attr('class') == '') {
      $('#game tr:nth-child('+row+') td:nth-child('+column+')').toggleClass('active')
    }
  }
  function noactive(row, column) {
    if($('#game tr:nth-child('+row+') td:nth-child('+column+')').attr('class') == 'active') {
      $('#game tr:nth-child('+row+') td:nth-child('+column+')').toggleClass('active')
    }
  }
});