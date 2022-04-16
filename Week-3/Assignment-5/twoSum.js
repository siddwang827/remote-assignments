function twoSum(nums, target) {
    const table = {}

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in table) {
            return [table[nums[i]], i]
        }
        table[target - nums[i]] = i
    }
}
