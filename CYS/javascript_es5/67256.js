solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // 

function solution(numbers, hand) {
    const keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
    }
    
    let left = '*';
    let right = '#';

    const lefts = [1, 4, 7];
    const rights = [3, 6, 9];

    var answer = numbers.reduce((result, number, index)=>{  
        if(lefts.includes(number)) { // 1,4,7 L
            result.push("L");
            left = number;
        } else if(rights.includes(number)){ // 3,6,9 R
            result.push("R");
            right = number;
        } else {
            let leftFinger = keypad['*'];
            let rightFinger = keypad['#'];

            leftFinger =  Math.abs(keypad[number][0] - keypad[left][0]) + Math.abs(keypad[number][1] - keypad[left][1]);
            rightFinger =  Math.abs(keypad[number][0] - keypad[right][0]) + Math.abs(keypad[number][1] - keypad[right][1]);

            if (leftFinger > rightFinger) {
                result.push("R");
                right = number;
            } else if (leftFinger < rightFinger) {
                result.push("L");
                left = number;
            } else if (leftFinger == rightFinger) {
                if (hand == 'right') {
                    result.push("R");
                    right = number;
                } else {
                    result.push("L");
                    left = number;
                }
            }
        }
        return result;
    } ,[]);

    answer = answer.join(""); //LRLLLRLLRRL 

    return answer;
}



/*
방법
1. 왼손은 *에서 오른손은 #에서 시작
2. 1,4,7,*은 왼손으로만 3,6,9,#은 오른손으로만 가능
3. 2,5,8,0은 왼손 오른손중 가까운 손으로 가능
4. 키패드를 객체화 해주기 키:밸류 집합

keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
}

5. numbers.length 만큼 반복
6. if numbers[i] % 3 = 1이면 L 추가하고 왼쪽 손가락 위치를 numbers[i]로 이동
7. else if numbers[i] 0이 아니면서 numbers[i] % 3 이 0 이면 R 추가하고 오른쪽 손가락 위치를 numbers[i]로 이동
8. else 2 5 8 0 같은 가운데 자리면 마지막에 저장해둔 왼쪽 손가락 위치와 오른쪽 위치를 절대값으로 저장해서 비교  
9. 현재 위치 - 왼(오)위치 해서 크기가 작은 부분을 이동시키고, 크기가 같다면 hand에 따라 이동 



*/

/*
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
right (오른손잡이) - # 부터 시작

return LRLRRRLLRRR

*/