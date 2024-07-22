const animals = [
  '고양이', '호랑이', '기러기'
]

export function ListTest3() {
  return (
    <ul>
      {/* map 함수에서 만들어지는 요소는 반드시 유니크한 키값을 가지고 있어여 함 */}
      {animals.map(
        (animal, index) => {
          return <li key={index}>{index}.{animal}</li>
        }
      )
    }
    </ul>
  )
}