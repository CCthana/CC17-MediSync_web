import { Link } from 'react-router-dom'
import followUs from '../assets/icons/followUs-05.svg'
import logoLine from '../assets/icons/line.svg'
import logoGoogleMap from '../assets/icons/Google_Maps-01.svg'
import logoGoogleMap2 from '../assets/icons/Google_Maps-02.svg'

export default function FollowUs() {
  return (
    <div className='flex justify-center items-center gap-6'>
        <div className='flex gap-5 items-center'>
            <div className='flex gap-3 items-center'>
                <Link to='https://www.facebook.com' target='_blank'>
                    <div className='w-9 h-9 bg-[#B3B3B3] flex items-center justify-center rounded-2xl hover:bg-blue-600 transition duration-300'>
                        <i className="fa-brands fa-facebook-f text-[#F0F4EE] text-2xl"></i>
                    </div>
                </Link>

                <Link to='https://www.youtube.com' target='_blank'>
                    <div className='w-9 h-9 bg-[#B3B3B3] flex items-center justify-center rounded-2xl hover:bg-red-600 transition duration-300'>
                        <i className="fa-brands fa-youtube text-[#F0F4EE] text-2xl"></i>
                    </div>
                </Link>

                <Link to='https://www.youtube.com' target='_blank'>
                    <div className='w-9 h-9 bg-[#B3B3B3] flex items-center justify-center rounded-2xl hover:bg-pink-600 transition duration-300'>
                        <i className="fa-brands fa-instagram text-[#F0F4EE] text-2xl"></i>
                    </div>
                </Link>

                <Link to='https://www.youtube.com' target='_blank'>
                    <div className='w-9 h-9 p-1.5 bg-[#B3B3B3] flex items-center justify-center rounded-2xl hover:bg-green-600 transition duration-300'>
                        <img src={logoLine} alt="logoLine" />
                    </div>
                </Link>
            </div>

            <div className='h-8'>
                <img className='h-full' src={followUs} alt="followUs" />
            </div>
        </div>

        <div className='text-4xl font-thin'>|</div>

        <Link to='https://www.google.com/maps' target='_blank'>
        <div className='flex items-center gap-1'>
            <div className='h-10'>
                <img className='h-full' src={logoGoogleMap} alt="logoGoogleMap" />
            </div>
            <div className='h-6 mt-3'>
                <img className='h-full' src={logoGoogleMap2} alt="logoGoogleMap2" />
            </div>
        </div>
        </Link>
    </div>
  )
}