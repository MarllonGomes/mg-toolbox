import { parse } from "postcss";
import { useEffect, useState } from "react"
import CurrencyImput from 'react-currency-input-field';

export default function HorasDeTrabalho() {

  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    if (!price || !hours) {
      setResult(null);
      return;
    }

    const MINUTES_IN_ONE_HOUR = 60;
    const pricePerMinute = Number(price.toString().replaceAll('.', '').replaceAll(',', '.')) / 60;
    const totalMinutes = Number(minutes) + (Number(hours) * MINUTES_IN_ONE_HOUR);
    const totalPrice = Number(pricePerMinute * totalMinutes).toFixed(2);
    setResult(Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice))
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    calculateResult();
  }

  useEffect(() => {
    calculateResult();
  },[price,hours,minutes])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <form onSubmit={onSubmitForm}>
        <div className="p-8 d-flex justify-center align-center flex-1 flex-column border border-gray-200 bg-white rounded shadow-sm">
          <label className="block mb-2 font-semibold">Horas e Minutos Trabalhados</label>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <label className='text-xs'>Horas</label>
              <input placeholder='Horas' type="number" value={hours} onChange={(e) => setHours(e.target.value)} className="border-gray-200 border px-4 py-2 rounded w-full mb-5" />
            </div>
            <div>
              <label className='text-xs'>Minutos</label>
              <input placeholder='Minutos' type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} className="border-gray-200 border px-4 py-2 rounded w-full mb-5" />
            </div>
          </div>
          <label className="block mb-2 font-semibold">Valor Por Hora</label>
          <CurrencyImput
            decimalSeparator=','
            groupSeparator='.'
            onChange={setPrice}
            prefix='R$ '
            className='border-gray-200 border px-4 py-2 rounded w-full mb-5'
            placeholder='R$ 50,00'
          />
          <button onClick={calculateResult} className="block text-center py-2 px-3 w-full text-white bg-indigo-400 rounded pointer font-semibold">Calcular</button>
        </div>
      </form>
      <div className="p-8 text-center justify-center items-center flex flex-1 flex-col border border-gray-200 bg-white rounded shadow-sm">

        {result === null &&
          <p className="text-gray-500 mb-4">Preencha os valores ao lado e clique em calcular para saber o valor.</p>
        }

        {result !== null &&
          <>
            <h2 className="text-2xl font-medium mb-2">Resultado</h2>
            <div>
              <p className="text-gray-500 mb-4">O valor a ser pago pelo trabalho será:</p>
              <h3 className="text-indigo-400 text-5xl font-bold">{result}</h3>
            </div>
          </>
        }
      </div>
    </div>
  )
}