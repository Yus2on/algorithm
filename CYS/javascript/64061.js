console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));

function solution(board, moves) {
    var answer = 0;
    let arr = [];

    for (let i = 0; i < moves.length; i ++) {
        const move = moves[i] - 1;

        for (let j = 0; j < board.length; j ++) {
            const doll = board[j][move];

            if (doll != 0){
                if (arr.length != 0  && arr[arr.length-1] == doll) { 
                    arr.pop();
                    answer += 2;
                } else {
                    arr.push(doll);
                    board[j][move] = 0;
                }
                break;
            }
        } 
    }
    return answer;

    /*
    문제
    1. 4 3 1 1 3 2 0 4 가 나와서 1, 3이 터져야 하는데 처음부터 3이 터지는 것 같음
    2. 3, 1, 2 가 각 두 개씩 터져서 answer 6개가 됨 
    3. 왜 3이 두 번 나와서 3부터 터지는지?? -> 인형을 하나 뽑았으면 다음 위치로 이동을 해야 하는데... 이동하지 않고 잡힌 라인 인형을 전부 뽑아버림?
    4. arr.pop() 이나 push()가 실행되면 다음 위치로 옮겨줘야 함 -> 뽑은 자리가 0이면 다음 위치로 이동해야만? 
    5. 인형을 뽑으면 인형이 있던 자리는 0이 됨. 원래 인형이 없던 자리도 0. 다음 위치로 이동하려면 move 가 바뀌어야 함 

    문제 해결
    1. 0으로 만들면 그 라인은 끝났으니 반복문을 탈출하려고 break 추가
    2. break; 가 인형 자리를 0으로 만든 직후에 들어가면 안되는 이유 
        - 그렇게 되면 답이 2가 나오는데 하나가 터진 후 남은 수끼리 붙어서 터지는건 체크가 안되고 break 후 다음 이동이 시작되기 때문

    방법
    1. 인형을 담을 arr 선언
    2. 인형을 뽑을 moves length 반복
    3. moves 최소길이 1, 순서에 맞는 index 필요  
    4. moves length > board.lenght 반복
    5. move(게임 상 움직임) 는 0으로 고정해놓고 j만 반복하면서 인형이 있으면(0이 아니면) if문 실행 
    6. arr에 들어간 인형이 존재하면서 이전 것과 현재 것이 같으면 pop() 하고 answer을 + 2 (두개 터졌으니까)
    7. 아니면 arr에 인형 push() 하고 인형 뽑은 자리를 0으로 바꿔줌

    4 3 1 1 3 2 0 4 
    4 3 3 2 0 4
    4 2 0 4 
    결과:  1,1 과 3,3 총 4개 터져서 사라짐 
   */

    
}


