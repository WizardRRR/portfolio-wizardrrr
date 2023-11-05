import WIZARD_LOGO from './../assets/logo-wizard-rrr.png'
import Image from "next/image"
import EXP_ICO from './../assets/exp-svgrepo-com.svg'
function HomePage() {
  return (
    <div className="p-10 w-fit">
      <div className='flex gap-5 transition-all duration-700 hover:scale-110 ml-[50px] hover:ml-[100px] mb-[200px]'>
        <Image
          src={WIZARD_LOGO}
          alt='logo-wizard-rrr'
          width={75}
          height={75}
          className='rounded-full border-8 border-blue-700/20 hover:border-blue-700 transition-all 
        duration-500 cursor-pointer w-[100px]'
        />
        <div className='flex flex-col'>
          <h1 className="text-white text-7xl font-extrabold cursor-pointer">
            WizardRRR
          </h1>
          <p className="text-gray-300 text-xl">
            Software Developer
          </p>
        </div>
      </div>
      <div>
        <div className='flex gap-2 items-center mb-5'>
          <Image
            src={EXP_ICO}
            alt='logo de experiencia 👌'
            width={40}
          />
          <h3 className='text-white text-4xl font-semibold'>
            Experiencia
          </h3>
        </div>
        <p className='text-slate-300 w-1/2'>
          I am a web software developer with a strong expertise in various technologies. My skills span across ReactJS, React Native, JavaScript ES6, Laravel, PHP, HTML, CSS, and front-end libraries. Additionally, I have experience in cloud computing with AWS.
          <br />
          <br />
          I have gained experience in leading development teams in creating web applications.
          <br />
          <br />
          Ultimately, I find deep satisfaction in the world of development and am excited to continue exploring new technologies and challenges.</p>
      </div>
    </div>
  )
}

export default HomePage