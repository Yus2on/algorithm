solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);


function solution(lottos, win_nums) {
    var answer = [];
    let zero = 0;
    let win = 0;

    lottos.forEach(num => {
        if (num == 0) {
            zero ++;
        } else if (win_nums.includes(num)) {
            win ++;
        }
    });

    if (zero == 6) {
        return [1,6];
    } else if (win == 0) {
        return [6,6];
    }

    let max = 7 - (win + zero);
    let min = 7 - win;
    answer.push(max, min);

    return answer;
}

/* ���
1. lottos�� win_nums�� ���� ���� �� ������ ã��
2. ������ �� (=0)�� ��� Ʋ���� ��������, ��� ������ �ְ����
3. lottos �� ��÷��ȣ�� : �������� // ���� - ��÷��ȣ = ��������
4. ��÷��ȣ + ������ �� : �ְ���� // ���� - (��÷ + ��������) = �ְ����
5. ���� = 6 - �������� + 1 

����
- ������ �ζ� ��ȣ lottos, ��÷ ��ȣ win_nums
- �ְ� ��÷ ����, ���� ��÷ ������ �迭�� ��ȯ
����	��÷ ����
1	    6��  ��ȣ�� ��� ��ġ
2	    5��  ��ȣ�� ��ġ
3	    4��  ��ȣ�� ��ġ
4	    3��  ��ȣ�� ��ġ
5	    2��  ��ȣ�� ��ġ
6     (��÷) �� ��
*/