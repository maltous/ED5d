function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vTb9Yuwy4Z":
        Script1();
        break;
      case "5yBgjSuHpbQ":
        Script2();
        break;
      case "6PLKQekcHz7":
        Script3();
        break;
      case "6GL9qmedyzA":
        Script4();
        break;
      case "6L522M1u8DM":
        Script5();
        break;
      case "5Vv0u0qTIdf":
        Script6();
        break;
      case "6EetTpC2yt9":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

