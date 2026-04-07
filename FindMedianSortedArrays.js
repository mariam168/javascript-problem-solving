var findMedianSortedArrays = function(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
    
};
