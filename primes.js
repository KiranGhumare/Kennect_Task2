document.getElementById("calculateButton").addEventListener("click", function () {
    const start = parseInt(document.getElementById("startRange").value);
    const end = parseInt(document.getElementById("endRange").value);
    
    const allNums = generateAllNumbers(start, end);
    const primeResultsContainer = document.getElementById("primeResults");
    
    primeResultsContainer.innerHTML = "";
    
    allNums.forEach(num => {
        const row = document.createElement("tr");
        const cellNum = document.createElement("td");
        const cellResult = document.createElement("td");
        const cellTime = document.createElement("td");
        
        const startTime = performance.now();
        const isNumPrime = isPrime(num);
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        
        cellNum.textContent = num;
        cellResult.textContent = isNumPrime ? "Prime" : "Normal";
        cellTime.textContent = timeTaken.toFixed(2);
        
        row.appendChild(cellNum);
        row.appendChild(cellResult);
        row.appendChild(cellTime);
        primeResultsContainer.appendChild(row);
    });
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        
        return true;
    }
    
    function generateAllNumbers(start, end) {
        const allnums = [];
        for (let num = start; num <= end; num++) {
            allnums.push(num);
        }
        return allnums;
    }
    
});
