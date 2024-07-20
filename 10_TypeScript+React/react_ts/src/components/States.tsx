import { useState, ChangeEvent } from 'react'

const States = () => {
    const [text, setText] = useState< string | null >('Testando o Hook')

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }

  return (
    <div>
        {text && <p>{text}</p>}
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default States