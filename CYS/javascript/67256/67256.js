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

            // ��������
            let leftFinger = keypad['*'];
            let rightFinger = keypad['#'];

            // ���밪���� �������� ��ġ - ����� ��ġ

            console.log('num: ' + num);
            console.log('left: ' + left);
            console.log('right: ' + right);

            
            /*
            // �޼� ������ �� ����� ��ġ, hand if
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