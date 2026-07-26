var twoSum = function(nums, target)
{

    var i = 0;
    let store = [];
    let arrLen = nums.length - 1;
    var j = 0;

        while(i <= arrLen)
        {
        j = i+1
        while(j <= arrLen)
        {
            if( target = nums[i] + nums[j] )
            {
                store.push(i);
                store.push(j);
                return store;
            }
            j++;
        }
        i++;
    }
};


