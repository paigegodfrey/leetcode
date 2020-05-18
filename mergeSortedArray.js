function merge(nums1, m, nums2, n) {
	let nums1Idx = 0;
	let nums2Idx = 0;
	let tempArr = [];
	let tempIdx = 0;
	let nums1Val;
	let nums2Val;
	let tempVal;
	let minVal;

	while (nums1Idx < nums1.length) {
		nums1Val = nums1Idx < m ? nums1[nums1Idx] : Infinity;
		nums2Val = nums2Idx < n ? nums2[nums2Idx] : Infinity;
		tempVal = tempIdx < tempArr.length ? tempArr[tempIdx] : Infinity;
		minVal = Math.min(tempVal, nums1Val, nums2Val);

		if(nums1Val !== minVal) {
			tempArr.push(nums1Val);
			nums1[nums1Idx] = minVal;
			if(nums2Val === minVal) nums2Idx++;
			else if(tempVal === minVal) tempIdx++;
		};
		nums1Idx++;
	};
	return nums1;
};

console.log(...merge([0,0,3,0,0,0,0,0,0], 3, [-1,1,1,1,2,3], 6))
