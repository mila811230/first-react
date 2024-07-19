import { useState } from "react";
import { Grading } from './Grading'

export function Exam () {
  const [kor, setKor] = useState()
  const [eng, setEng] = useState()
  const [math, setMath] = useState()

  return (
    <>
    <div>
      <form>
        <p>국어 : <input type="text" value={kor} 
        onChange = {(e) => setKor(Number(e.target.value))}/>
        </p>
        <p>영어 : <input type="text" value={eng} 
        onChange = {(e) => setEng(Number(e.target.value))}/>
        </p>
        <p>수학 : <input type="text" value={math}
        onChange = {(e) => setMath(Number(e.target.value))}/>
        </p>
      </form>
    </div>

    <Grading kor = {kor} eng = {eng} math = {math}/>
    </>
  )
}
