const longestCommonSubSequence = (str1, str2) => {
  const lenStr1 = str1.length; //i
  const lenStr2 = str2.length; //j

  const dp = Array.from({ length: lenStr1 + 1 }, () =>
    Array(lenStr2 + 1).fill('')
  ); //2D array with size 0f(m+1, and n+1) assign it ''

  // fill the array with 0 instead if you want to calculate the length
  for (let i = 1; i <= lenStr1; i++) {
    for (let j = 1; j <= lenStr2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        console.log(
          `I find a match in index ${i - 1} of str1 and ${j - 1} of str2 char=${
            str1[i - 1]
          }`
        );
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1]; //finding a match replace str1[i - 1] with 1 to only calcualte length
        console.log(`max value: ${dp[i][j]}`);
      } else {
        dp[i][j] =
          dp[i][j - 1].length > dp[i - 1][j].length
            ? dp[i][j - 1]
            : dp[i - 1][j];
        // Math.max(dp[i][j-1], dp[i-1][j]) //to find the length
      }
    }
  }
  console.log(dp);
  return dp[lenStr1][lenStr2];
};

const calculateLCS = () => {
  const str1 = document.getElementById('str1').value;
  const str2 = document.getElementById('str2').value;
  console.log(str1, str2);
  const result = longestCommonSubSequence(str1, str2);
  document.getElementById('output').innerText = result;
};

// Afternoon
// Task 1

const longestCommonSubSequence2 = (str1, str2) => {
  // get the string's length to build the matrix, the 2D array
  const lengStr1 = str1.length; // aabbc
  const lengStr2 = str2.length; // abc

  // build the 2D array with zeros
  const dp = Array.from({ length: lengStr1 + 1 }, () => Array(lengStr2 + 1).fill(0))

  // fill db using bottom-up approach
  for (let i = 1; i <= lengStr1; i++) {
    for (let j = 1; j <= lengStr2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // if match, increment the value from the diagonal cell
        dp[i][j] = dp[i - 1][j - 1] + 1  
      } else {
        // if not match, take the max value from left or top cell
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[lengStr1][lengStr2]
};

// Task 2
const findAllCommonSubsequences = (str1, str2, length) => {
  const result = []

  // helper function to generate all subs. of a given length
  function generateSubsequences(str, subseq, index, subsequences) {
    if (subseq.length === length) {
      // add it to the set
      subsequences.add(subseq)
      return
    }
    for (let i = index; i < str.length; i++) {
      // generate subsequences by including the current character and moving to the next index
      generateSubsequences(str, subseq + str[i], i + 1, subsequences)      
    }
  }

  // generate all subsequences of the desired length for both strings
  let subsequences1 = new Set()
  generateSubsequences(str1, '', 0, subsequences1)

  let subsequences2 = new Set()
  generateSubsequences(str2, '', 0, subsequences2)

  // find common subsequences by checking ontersection of both sets
  subsequences1.forEach(subseq => {
    if (subsequences2.has(subseq)) {
      result.push(subseq)
    }
  })

  return result
}

const calculateLCS2 = () => {
  const str1 = document.getElementById('str1-afternoon').value;
  const str2 = document.getElementById('str2-afternoon').value;
  const resultLength = longestCommonSubSequence2(str1, str2);
  const resultString = longestCommonSubSequence(str1, str2)
  const resultAllCommonSubsequences = findAllCommonSubsequences(str1, str2, resultLength)

  document.getElementById('output-length').innerText = resultLength;
  document.getElementById('output-lcs').innerText = resultString;
  document.getElementById('output-all').innerText = resultAllCommonSubsequences.join(', ');
};
