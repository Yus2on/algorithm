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
���
1. �޼��� *���� �������� #���� ����
2. 1,4,7,*�� �޼����θ� 3,6,9,#�� ���������θ� ����
3. 2,5,8,0�� �޼� �������� ����� ������ ����
4. Ű�е带 ��üȭ ���ֱ� Ű:��� ����

keypad = {
        1:[0,3], 2:[1,3], 3:[2,3],
        4:[0,2], 5:[1,2], 6:[2,2],
        7:[0,1], 8:[1,1], 9:[2,1],
        '*':[0,0], 0:[1,0], '#':[2,0],
}

5. numbers.length ��ŭ �ݺ�
6. if numbers[i] % 3 = 1�̸� L �߰��ϰ� ���� �հ��� ��ġ�� numbers[i]�� �̵�
7. else if numbers[i] 0�� �ƴϸ鼭 numbers[i] % 3 �� 0 �̸� R �߰��ϰ� ������ �հ��� ��ġ�� numbers[i]�� �̵�
8. else 2 5 8 0 ���� ��� �ڸ��� �������� �����ص� ���� �հ��� ��ġ�� ������ ��ġ�� ���밪���� �����ؼ� ��  
9. ���� ��ġ - ��(��)��ġ �ؼ� ũ�Ⱑ ���� �κ��� �̵���Ű��, ũ�Ⱑ ���ٸ� hand�� ���� �̵� 



*/

/*
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
right (����������) - # ���� ����

return LRLRRRLLRRR

*/