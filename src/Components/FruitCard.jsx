import React,{useState,useEffect} from 'react'

const FruitCard = ({fruit}) => {

    const [fruitImage, setFruitImage] = useState(null);

    useEffect(() => {
        import(`../assets/${fruit.image}.jpeg`)
            .then(image => setFruitImage(image.default))
            .catch(err => console.error("Image loading error: ", err));
    }, [fruit.image]);


    return (
        <div className='rounded-2xl overflow-hidden shadow-lg transform group hover:scale-110 duration-100 relative'>
             <img src={fruitImage} alt={fruit.name}
                className='w-full h-52 object-full' />
            <div className='flex flex-col items-center my-1 py-1 space-y-1'>
                <span className='font-body text-slate-500 block'>{fruit.name}</span>
                <span className='font-body text-slate-500'>₹{fruit.price}</span>
                <span className='font-body uppercase text-lime-400 text-xs group-hover:visible invisible'>Add to cart</span>
            </div>
            <span className='absolute top-3 right-3 bg-sky-300 text-white border-sky-300
            p-1 rounded-lg text-sm '>1% off</span>
        </div>
        
      )
}

export default FruitCard