solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');

function solution(numbers, hand) {
    var answer = '';

    const keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
    }
    
    let left = '*';
    let right = '#';



    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num % 3 == 1) {
            // 147
            answer += 'L';
            left = num;
        } else if (num != 0 && num % 3 == 0) {
            // 369
            answer += 'R';
            right = num;

        } else {
            // 0258

            // 시작지점
            let leftFinger = keypad['*'];
            let rightFinger = keypad['#'];

            // 절대값으로 눌러야할 위치 - 현재손 위치

            console.log('num: ' + num);
            console.log('left: ' + left);
            console.log('right: ' + right);

            
            /*
            // 왼손 오른손 중 가까운 위치, hand if
            if (leftFinger > rightFinger) {
                answer += 'R';
                right = num;
            } else if (leftFinger < rightFinger) {
                answer += 'L';
                left = num;
            } else if (leftFinger == rightFinger) {
                if (hand == 'right') {
                    answer += 'R';
                    right = num;
                } else {
                    answer += 'L';
                    left = num;
                }
            }
            */


        }

    } // end for

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