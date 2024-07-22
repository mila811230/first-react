import { useState } from "react"

export function FormTest4 (props) {
  const [haveBreakfast, setHaveBreakfast] = useState(true)
  const [numberOfGuest, setNumberOfGuest] = useState(0)

  const handleSubmit = (event) => {
    alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`)
    event.preventDefault()
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label for="">
        아침식사 여부 :
        <input  type="checkBox" 
                checked = {haveBreakfast}
                onChange = {(event) => {
                   setHaveBreakfast(event.target.checked)
        }}/>
      </label>
      <br/>
      <label>
        <input  type="number" 
                value={numberOfGuest}
                onChange = {(event) => {
                  setNumberOfGuest(event.target.value)
                }}/>
      </label>
      <button type="submit">제출</button>
  </form>
  )
}