export default function Home() {
  return (
    <div className='flex w-full justify-center p-16 flex-col items-center'>
      <h1 className='text-3xl'>Random citizen number</h1>
      <span className="text-sm text-red-600">It is for system testing purposes only.</span>
      <div className="flex w-full justify-center flex-col items-center mt-8">
        <button className='py-2 px-12 rounded-lg border-2 hover:bg-white hover:text-black'>Start</button>
      </div>
      <div className="mt-4 flex w-full justify-center flex-col items-center">
        <div className="flex w-6/12 flex-row items-center justify-center">
          <span className='tracking-wide align-middle border-2 py-2 px-12 rounded-lg'>1234567890123</span>
          <button className="py-2 px-4 border-2 rounded-lg ml-4">copy</button>
        </div>
      </div>
    </div>
  );
}
