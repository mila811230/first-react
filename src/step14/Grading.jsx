import { useState } from "react";

export function Grading(props) {
  //총점
  const [total, setTotal] = useState(0)
  //평균
  const [avg, setAvg] = useState(0)
  //과락건수
  const [fff, setFff] = useState(0)
  //합격
  const [pass, setPass] = useState(0)
  // let pass_msg = '합격하셨습니다.'

  function grading() {
    let _total = props.kor + props.eng + props.math
    let _avg = Math.round(((_total/3) * 10) / 10)
    let _fff = 0

    if (props.kor < 50) {_fff++;}
    if (props.eng < 50) {_fff++;}
    if (props.math < 50) {_fff++;}
    if (_avg >= 60 && _fff == 0){
      setPass(true)
    } else {
      setPass(false)
    }
    setTotal(_total)
    setAvg(_avg)
    setFff(_fff)
  }

  return (
    <>
    <div>
      <button onClick = {grading}>판정</button>
      <p>국어 : {props.kor}, 영어 : {props.eng}, 수학 : {props.math}</p>
      <p>총점 : {total}점, 평균 : {avg}, 과락 : {fff}건</p>
      <p>{(pass) ? '합격이예용' : '불합격이야 공부좀해!'}</p>
    </div>
    </>
  )
}