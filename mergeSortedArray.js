function merge(nums1, m, nums2, n) {
	let nums1Idx = 0;
	let nums2Idx = 0;
	let nums1Val;
	let nums2Val;
	let minVal;
	let temp = Infinity;
	let newTemp;

	while (nums1Idx < nums1.length) {
		nums1Val = nums1Idx >= m ? Infinity : nums1[nums1Idx];
		nums2Val = nums2Idx === n ? Infinity : nums2[nums2Idx];
		minVal = Math.min(temp, nums1Val, nums2Val);

		if(nums1[nums1Idx] !== minVal) {
			temp = nums1[nums1Idx];
			nums1[nums1Idx] = minVal;
			if(nums2[nums2Idx] === minVal) nums2Idx++;
		};
		nums1Idx++;
		console.log('nums1Idx', nums1Idx);
		console.log('nums2Idx', nums2Idx);
		console.log('temp', temp);
	};
	return nums1;
};

console.log("result", merge([1,2,3,0,0,0], 3, [2,5,6], 3));

// function shiftInPlace(num, idx, arr) {
// 	let newIdx = idx;
// 	let len = arr.length;
// 	while (newIdx < len) {
// 		let temp = arr[newIdx];
// 		if (newIdx > idx) arr[newIdx] = num;
// 		if (newIdx > idx) arr.push(temp);
// 		newIdx++;
// 	}
// 	return arr;
// }