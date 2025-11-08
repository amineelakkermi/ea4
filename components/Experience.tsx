import styles, { layout } from '@/styles/style'
import Image from 'next/image'
import experienceImg from '@/public/experienceImg.png';

const Experience = () => {
  return (
   <div className='relative w-full'>
    <div className={`max-w-7xl mx-auto px-6 sm:px-10 py-24 flex justify-between items-center`}>
      <div className="w-[70%]">
      <h1 className={`${styles.title}`}>At the Heart of Design is an Opportunity to slove problem</h1>
      </div>
      <div className="w-[30%]">
        <Image src={experienceImg} width={215} height={215} alt='experience' />
      </div>
    </div>


   </div>
  )
}

export default Experience