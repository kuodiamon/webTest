function checkID(Customer_Id_Card){
  // 依照字母的編號排列，存入陣列備用。
  var letters = new Array('A', 'B', 'C', 'D', 
      'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
      'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
      'X', 'Y', 'W', 'Z', 'I', 'O');
  // 儲存各個乘數
  var multiply = new Array(1, 9, 8, 7, 6, 5, 
                           4, 3, 2, 1);
  var nums = new Array(2);
  var firstChar;
  var firstNum;
  var lastNum;
  var total = 0;
  // 撰寫「正規表達式」。第一個字為英文字母，
  // 第二個字為1或2，後面跟著8個數字，不分大小寫。
  var regExpID=/^[a-z](1|2)\d{8}$/i; 
  // 使用「正規表達式」檢驗格式
  if (Customer_Id_Card.search(regExpID)==-1) {
    // 基本格式錯誤
	alert("請仔細填寫身份證號碼");
   return false;
  } else {
	// 取出第一個字元和最後一個數字。
	firstChar = Customer_Id_Card.charAt(0).toUpperCase();
	lastNum = Customer_Id_Card.charAt(9);
  }
  // 找出第一個字母對應的數字，並轉換成兩位數數字。
  for (var i=0; i<26; i++) {
	if (firstChar == letters[i]) {
	  firstNum = i + 10;
	  nums[0] = Math.floor(firstNum / 10);
	  nums[1] = firstNum - (nums[0] * 10);
	  break;
	} 
  }
  // 執行加總計算
  for(var i=0; i<multiply.length; i++){
    if (i<2) {
      total += nums[i] * multiply[i];
    } else {
      total += parseInt(Customer_Id_Card.charAt(i-1)) * 
               multiply[i];
    }
  }
  //規則一餘數為零，且檢查碼需為零
  if (lastNum == 0 && (total % 10) != lastNum ){
  alert(\”身份證號碼寫錯了！\”);
  return false;
  }
  //規則二餘數與檢查碼需相符
  if (lastNum != 0 && (10 – (total % 10))!= lastNum) {
  alert(\”身份證號碼寫錯了！\”);
  return false;
  }
}