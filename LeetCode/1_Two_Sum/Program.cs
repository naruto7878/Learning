/*
//First Try
public class Solution1 {
    public int[] TwoSum(int[] nums, int target) {
        int goal = 0;
        for(int i = 0; i < nums.Length - 1; i++)
        {
            goal = target - nums[i];
            for(int j = i+1; j < nums.Length; j++)
            {
                if(nums[j] == goal)
                {
                    return new int[]{ i,j };
                }
            }
        }
        return new int[]{ 0,0 };
    }
}

//2nd try
public class Solution2 {
    public int[] TwoSum(int[] nums, int target) {
        int goal = 0;
        Dictionary<int,int> map = new Dictionary<int,int>{};
        for(int i = 0; i < nums.Length; i++)
        {
            goal = target - nums[i];
            if(map.ContainsKey(goal))
            {
                return new int[] {map[goal], i};
            }
            if(!map.ContainsKey(nums[i]))
            {
                map.Add( nums[i],i);
            }
        }
        return new int[]{ 0,0 };
    }
}
*/
//3rd try
public class Solution3 {
    public int[] TwoSum(int[] nums, int target) {
        int goal = 0;
        Dictionary<int,int> map = new Dictionary<int,int>{};
        for(int i = 0; i < nums.Length; i++)
        {
            if(map.ContainsKey(target - nums[i]))
            {
                return new int[] {map[target - nums[i]], i};
            }
            if(!map.ContainsKey(nums[i]))
            {
                map.Add( nums[i],i);
            }
        }
        return new int[]{ 0,0 };
    }
}
