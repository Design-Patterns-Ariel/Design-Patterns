function printAll0(...nums: number[]) {
    for (let i: number = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }

}

printAll0();
printAll0(1, 2, 3);
printAll0(6, 4);

function printAll12(nums?: number[]) {
    for (let i: number = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }

}

printAll12();
printAll12([1, 2, 3]);
printAll12([6, 4]);