import { useState } from "react";

export default function Home() {
  const [listNumber, setListNumber] = useState([]);

  const randomNumber = () => {
    const listNumer = [];
    for (let i = 1; i < 5; i ++) {
      const list = [...Array(Number(15)).keys()].slice(2, 14)
      let result = 0;
      let results = [];
      for (const i of list) {
        const random = Math.floor(Math.random() * 10);
        result += i * random
        results.push(random)
      }
      results = results.reverse();
      results = results.map(e => e.toString())
      const last_number = 11 - result % 11
      const _result = results.join('') + last_number.toString().slice(-1)
      listNumer.push(_result)
    }
    setListNumber(listNumer)
  }

  return (
    <div className='flex w-full justify-center p-16 flex-col items-center'>
      <h1 className='text-3xl'>Random citizen number</h1>
      <span className="text-sm text-red-600">It is for system testing purposes only.</span>
      <div className="flex w-full justify-center flex-col items-center mt-8">
        <button onClick={randomNumber} className='py-2 px-12 rounded-lg border-2 hover:bg-white hover:text-black'>Start</button>
      </div>
      <div className="mt-4 flex w-full justify-center flex-col items-center">
        { listNumber.map((value, index) => {
          return  (
          <div className="flex w-full flex-row items-center justify-center mt-3" key={index}>
            <span className='tracking-wide w-60 align-middle border-2 py-2 px-12 rounded-lg'>{value}</span>
            <button className="py-2 px-4 border-2 rounded-lg ml-4 hover:text-black hover:bg-gray-400">copy</button>
          </div>
          )
        })}
      </div>
    </div>
  );
}
