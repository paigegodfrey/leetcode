function shiftInPlace(num, idx, arr) {
    let newIdx = idx;
    let len = arr.length;
    while(newIdx < len) {
        let temp = arr[newIdx];
        if(newIdx > idx) arr[newIdx] = num;
        if(newIdx > idx) arr.push(temp);
        newIdx++;
    }
    return arr;
}