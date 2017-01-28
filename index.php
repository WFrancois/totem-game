<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
		<link rel="stylesheet" type="text/css" href="game.css">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans|Caesar+Dressing|Pacifico' rel='stylesheet' type='text/css'>
    <link rel="icon" type="image/png" href="img/shaman_logo.png" />
		<title>Shaman Legion - Totem Game</title>
	</head>
	<body>
		<h2>Totem game - Shaman's Class Hall - WoW Alpha <img src="img/shaman_logo.png" alt="shaman logo"></h2>
    <div class="game-container">
		  <p class="goal">Goal ? You need to put all the cell in <span class="blue">blue</span></p>
      <div class="fl-l">
        <div class="title">Stage <span class="currentStage">1</span></div>
        <a class="resetStage" href="#">Reset this stage</a>
        <p class="numberClick">Number of click <span>0</span></p>
        <table id="game">
          <tr>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
          </tr>
          <tr>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
          </tr>
          <tr>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
          </tr>
          <tr>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
          </tr>
          <tr>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
            <td class=""></td>
          </tr>
        </table>
      </div>
		  <div class="fl-r">
        <div class="title">Scoreboard</div>
        <a href="#" class="resetGame">Reset the game</a>
        <table id="scoreboard">
        <tr>
          <th>Stage</th>
          <th>Clicks</th>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <td>2</td>
          <td>0</td>
        </tr>
        <tr>
          <td>3</td>
          <td>0</td>
        </tr>
        <tr>
          <td>4</td>
          <td>0</td>
        </tr>
        <tr>
          <td>5</td>
          <td>0</td>
        </tr>
        </table>
      </div>
      <div class="clearfix"></div>
    </div>
    <div id="win"></div>
		<script src="jquery-2.2.0.min.js"></script>
		<script src="script.js"></script>
	</body>
</html>
