const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
nums.push(200);
nums.push(5);

nums.push(400);
nums.push(500);
// console.log(nums);

for(let item of nums){
    console.log(item);
}
nums.forEach(function(item, index)){
    console.log(index + " " + item);
}
nums.sort(funtion (a, b)){
    return a-b;
}