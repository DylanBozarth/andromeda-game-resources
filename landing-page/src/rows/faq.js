import { useState } from 'react';
import './sci-ui.scss'
export const FAQ = () => {
    const [tab, setTab] = useState(1);
    const [FAQtoggle, setFAQToggle] = useState()
    const mechanics = [
        {
            Q: 'will X happen',
            A: 'maybe'
        }
    ]
    return (
        <div>
            <h1 className='FAQ-title'>Frequently Asked Questions</h1>
            <div className='FAQ-tabs' id='A'>
                <div onClick={() => setTab(1)} className='tab btn btn1'>Gameplay</div>
                <div onClick={() => setTab(2)} className='tab btn btn2'>Multiplayer</div>
                <div onClick={() => setTab(3)} className='tab btn btn3'>Game Specifics</div>
                <div onClick={() => setTab(4)} className='tab btn btn4'>Development</div>
            </div>
            <div className={tab === 1 ? 'display' : 'hidden'}>
                {mechanics.map((mechanic) => {
                    return (
                        <div className='FAQ-block'>
                            <div className='FAQ-questions' >{mechanic.Q}</div>
                        <p className={FAQtoggle === mechanic.Q ? 'FAQ-answer' : 'hidden'} >{mechanic.A}</p>
                    </div>
                    )
                    
                })}

            </div>
            <div className={tab === 2 ? 'display' : 'hidden'}>
                DISPLAY 2
            </div>
            <div className={tab === 3 ? 'display' : 'hidden'}>
                DISPLAY 3
            </div>
            <div className={tab === 4 ? 'display' : 'hidden'}>
                DISPLAY 4
            </div>

        </div>
    )
}