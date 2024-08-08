function pivotInteger(n: number): number {
    let i: number = 1;
    let arr: number[] = [];
    let res: number = 0;
    
    if (n === 1) {
        return 1
    }

    while (i <= n) {
        arr.push(i);
        i++;
    };
    i--;

    while (res === 0 && i > 1) {
        i--;
        if (arr.slice(0,i).reduce((a,b)=>a+b) === arr.slice(i-1).reduce((a,b)=>a+b)) {
            res = arr[i]
        };
    };

    return res === 0 ? -1 : arr[i-1]
};
