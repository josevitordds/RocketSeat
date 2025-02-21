import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'
import cooper from '../../../assets/medal-cooper.svg'

import Image from 'next/image'
import { getRanking } from '@/http/api'
export default async function Raking() {
    const { ranking } = await getRanking()

    return (
        <div className='w-full max-w-[440px] space-y-5'>
            <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
                Raking de indicações
            </h2>

            <div className='space-y-4'>
                {ranking.map((item, index) => {
                    const rakingPosition = index+1;
                    return (
                        <div key={item.id} className='relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 '>
                            <span className='text-sm text-gray-300 leading-none '>
                                <span className='font-semibold'>{rakingPosition}°</span> |
                                {item.name}
                            </span>

                            <span className='font-heading text-2xl font-semibold text-gray-200 leading-none'>
                               {item.score}
                            </span>

                            {rakingPosition ===1 && <Image src={gold} alt='logo' className='absolute top-0 right-8' />}
                            {rakingPosition ===2 && <Image src={silver} alt='logo' className='absolute top-0 right-8' />}
                            {rakingPosition ===3 && <Image src={cooper} alt='logo' className='absolute top-0 right-8' />}
                        </div>
                    )
                })}


            </div>

        </div>
    )
}