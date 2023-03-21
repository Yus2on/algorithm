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

/* 방법
1. lottos와 win_nums의 같은 수가 몇 개인지 찾음
2. 지워진 수 (=0)이 모두 틀리면 최저순위, 모두 맞으면 최고순위
3. lottos 중 당첨번호만 : 최저순위 // 순위 - 당첨번호 = 최저순위
4. 당첨번호 + 지워진 수 : 최고순위 // 순위 - (당첨 + 지워진수) = 최고순위
5. 순위 = 6 - 맞은개수 + 1 

문제
- 구매한 로또 번호 lottos, 당첨 번호 win_nums
- 최고 당첨 순위, 최저 당첨 순위를 배열로 반환
순위	당첨 내용
1	    6개  번호가 모두 일치
2	    5개  번호가 일치
3	    4개  번호가 일치
4	    3개  번호가 일치
5	    2개  번호가 일치
6     (낙첨) 그 외
*/