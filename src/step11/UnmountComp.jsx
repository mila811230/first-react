//파일명 : src/step11/UnmountComp.jsx

import {useState, useEffect} from 'react'

export function UnmountComp(){
  const [mounted, setMounted] = useState(true)
  useEffect(() => {
    console.log('컴포넌트 마운팅됨') 
    //마운팅 된 뒤, 수정된 뒤에 실행
    return () => {
    console.log('컴포넌트 언마운팅 전')
    }
  }, [])

    return (
    <div>
      컴포넌트
    </div>
    )
  } 