const longestCommonSubSequence = (str1, str2) => {
  const lenStr1 = str1.length; //i
  const lenStr2 = str2.length; //j
  console.log(lenStr1, lenStr2);

  const dp = Array.from({ length: lenStr1 + 1 }, () => Array(lenStr2 + 1).fill('')); //2D array with size 0f(m+1, and n+1) assign it '' 
  // fill the array with 0 instead if you want to calculate the length
  console.log(dp);
  for (let i = 1; i <= lenStr1; i++) {
      for (let j = 1; j <= lenStr2; j++) {
          if (str1[i - 1] === str2[j - 1]) {
              console.log(`I find a match in index ${i - 1} of str1 and ${j - 1} of str2 char=${str1[i - 1]}`);
              dp[i][j] = dp[i - 1][j - 1] + str1[i - 1]; //finding a match replace str1[i - 1] with 1 to only calcualte length
              console.log(`max value: ${dp[i][j]}`)
          } else {
              dp[i][j] = dp[i][j - 1].length > dp[i - 1][j].length ? dp[i][j - 1] : dp[i - 1][j];
              // Math.max(dp[i][j-1], dp[i-1][j]) //to find the length
          }
      }
  }
  console.log(dp);
  return dp[lenStr1][lenStr2];

}

const calculateLCS = () => {
  const str1 = document.getElementById("str1").value;
  const str2 = document.getElementById("str2").value;
  console.log(str1, str2)
  const result = longestCommonSubSequence(str1, str2);
  document.getElementById("output").innerText = result;
}