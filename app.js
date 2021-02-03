const question = 'ゲーム市場で、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
 const correct = 'ニンテンドーDS';

 const $button = document.getElementsByTagName('button');

const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(correct === e.target.textContent){
    window.alert('正解！');
 } else {
    window.alert('不正解！');
 }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
const buttonLength = $button.length;
while(handlerIndex < buttonLength) {
  $button[0].addEventListener('click',(e) => {
  clickHandler(e);
});
  handlerIndex++;
}

