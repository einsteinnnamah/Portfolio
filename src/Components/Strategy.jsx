import React from 'react'
import quickair from '../assets/quickair.png'
const Strategy = () => {
  const strategy = [
    {
      id: 1,
      image: quickair,
      title: "Product improvement",
      brief: "QuickAir is a platform where people can purchase airtime fast. Lately, it has been discovered that buying takes time about 40s+.",
      link: "https://einsteinnnamah.notion.site/Product-improvement-Quick-Air-01d3883976a54065a84224ca4be15f57?pvs=4",
    },
    {
      id: 2,
      image: null,
      title: "Neurodiverse project: Help improve online learning in ADHD and Autism students",
      brief: "Many individuals with Autism and ADHD have difficulty with social communication and struggle to social communication and organization, impacting studies and online learning participation.",
      link: "https://einsteinnnamah.notion.site/Neurodiverse-project-Help-improve-online-learning-in-ADHD-and-Autism-students-98131f05840c4cc2ae47c2021f8059f3?pvs=4",
    },
  ]
  return (
    <div className='max-w-[1440px] font-Satoshi  mx-auto md:px-[60px] xl:px-[120px] px-[20px] py-5 p-3'>
        <div className='text-white font-Satoshi py-3 font-medium text-[22px] md:text-[24px] lg:text-[30px]'>
        My Strategy works 💭  
        </div>
        <div className='flex gap-[62px] flex-col md:flex-row '>
        {strategy.map((items, i) => (
        <div key={items.id} className='md:w-[570px] h-[300px] rounded-[10px] px-[25px] py-[30px] bg-white'>
            {items.image && <img src={items.image} alt={`Image for ${items.title}`} />}
         <a href={items.link} target='_blank' className=' text-[22px] md:text-[20px] hover:underline lg:text-[24px] xl:text-[30px] font-Satoshi font-bold'>{items.title}</a>
         <p className=' text-[18px] md:text-[16px] lg:text-[19px] font-Satoshi'>{items.brief}</p>
        </div>
     
        ))

        }
        </div>
       
    </div>
  )
}

export default Strategy