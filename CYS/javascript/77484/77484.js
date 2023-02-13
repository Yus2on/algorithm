solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);


function solution(lottos, win_nums) {
    var answer = [];
    let zero = 0;
    let win = 0;
    let max = 0;
    let min = 0;

    for(let i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) {
            // �˾ƺ� �� ���� ��ȣ (0) �� �ִٸ�
            zero ++;
        } else if (win_nums.includes(lottos[i])) {
            // ��ġ�ϴ� ��ȣ�� �ִٸ�
            win ++;

        }
    }

    if (zero == 6) {
        return [1,6];
    } else if (win == 0) {
        return [6,6];
    }

   

    return answer;
}

/* ���
1. lottos�� win_nums�� ���� ���� �� ������ ã��
2. ������ �� (=0)�� ��� Ʋ���� ��������, ��� ������ �ְ����
3. lottos �� ��÷��ȣ�� : ��������
4. ��÷��ȣ + ������ �� : �ְ����
5. ���� = 6 - �������� + 1



����
- ������ �ζ� ��ȣ lottos, ��÷ ��ȣ win_nums
- �ְ� ��÷ ����, ���� ��÷ ������ �迭�� ��ȯ
����	��÷ ����
1	6�� ��ȣ�� ��� ��ġ
2	5�� ��ȣ�� ��ġ
3	4�� ��ȣ�� ��ġ
4	3�� ��ȣ�� ��ġ
5	2�� ��ȣ�� ��ġ
6(��÷)	�� ��
*/