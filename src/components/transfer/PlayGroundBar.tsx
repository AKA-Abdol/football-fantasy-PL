import PToggleTab from './PageToggleTab';
import RahnemaEngLogo from "../../images/rahnema-college-logo-eng.svg";
export default function PlayGroundBar() {


    return (
        <div className="px-[4px] flex flex-row w-full bg-white -z-index-[100]">
            
            <div className='flex flex-col w-[48%] lg:mr-auto lg:flex-row lg:w-full'>
                <div className='between-logo min-w-[170px] flex flex-col items-center pl-3 lg:mx-auto -ml-[190px]'>
                    <div className='bg-white flex items-center justify-center sw-1/4 h-[40%] rounded-lg box-shadow-sm -z-index-[100]'>
                        <img className='py-4 px-1 w-[90%]' src={RahnemaEngLogo} alt='Rahnema Logo' />
                    </div>
                    <div className='mx-auto w-full'>
                        <PToggleTab/>
                    </div>

                </div>
            </div>

        </div>
    )
}