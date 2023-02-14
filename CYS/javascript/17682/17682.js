solution('1D2S#10S');


function solution(dartResult) {
    var answer = 0;

    let total = 0;
    let sum = [];

    for(let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9 ) { //숫자
            if( dartResult[i] == '1' && dartResult[i + 1] == '0' ) {
                // i번째가 1 뒷자리가 0 >> 10점 처리
                total = 10;
                i ++;
                continue;
            } else {
                total = dartResult[i];
            }
        }
        else if (dartResult[i] == 'S'){ 
            sum.push(total);
        }
        else if (dartResult[i] == 'D'){ 
            sum.push(Math.pow(total, 2));
        }
        else if (dartResult[i] == 'T'){ 
            sum.push(Math.pow(total, 3));
        }
        else if (dartResult[i] == '*'){ // (직전 점수 + 해당 점수) * 2
            
        }
        else if (dartResult[i] == '#'){ // 해당 점수 마이너스
           
        } 
    }

    for (const key in sum) {
        answer = answer + Number(sum[key]);
    }

    return answer;
}


/* 방법
1. dartResult.length 로 for문 반복
2. dartResult[i] = S 1제곱
    dartResult[i] = D 2제곱
    dartResult[i] = T 3제곱 
    dartResult[i] = #(아차상) 해당 점수 마이너스
    dartResult[i] = *(스타상) 현재 점수, 직전 점수  *2
3. dartResult[i]가 숫자일 경우 (1~9) 변수에 넣어줌
4. 그 외 문자열은 위에처럼 제곱이나 마이너스 처리
5. 보너스, 옵션 적용된 점수를 합쳐서 반환 





문제
1. 다트 게임은 총 3번의 기회로 구성된다.
2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
10. 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

입력: 점수|보너스|[옵션] 으로 이뤄진 문자열 
보너스는 S, D, T 중 하나.
옵선은 * 아니면 #. 없을 수도 있다.

dartResult	answer	설명
1S2D*3T	    37	    1^1 * 2 + 2^2 * 2 + 3^3
1D2S#10S	9	    1^2 + ((2^1) * (-1)) + 10^1
1S*2T*3S	23	    ((1^1 * 2) * 2) + (2^3 * 2) + 3^1



*/