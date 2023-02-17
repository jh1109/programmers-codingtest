function solution(array, n) {
    var answer = 0;
    array.forEach(elem => elem === n && ++answer);
    return answer;
}