import '../index.css';

interface sideTabProps{
    leftText: string,
    rightLogo: string,
    rightText: string
};

export default function PGBSideTab({leftText, rightLogo, rightText}: sideTabProps){
    return (
        <div className='flex flex-row theme-color rounded-t-2xl justify-around items-center py-3'>
            <div className='player-numbers'>
                <p className='text-2xl theme-font font-black'> {leftText} </p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='player-logo'>
                    <img src={rightLogo} alt='Player'></img>
                </div>
                <div className='player-logo-under theme-font font-black pb-4'>
                    <p className='text-xs theme-font'> {rightText} </p>
                </div>
            </div>
        </div>
    );
};