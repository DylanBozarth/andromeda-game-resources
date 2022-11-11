import { useState } from 'react';
import './sci-ui.scss'
export const FAQ = () => {
    const [tab, setTab] = useState(1);
    return (
        <div>
            <div className='FAQ-tabs' id="A">
                <div onClick={() => setTab(1)} className="tab btn btn1">Gameplay</div>
                <div onClick={() => setTab(2)} className="tab btn btn2">Multiplayer</div>
                <div onClick={() => setTab(3)} className="tab btn btn3">Trade </div>
                <div onClick={() => setTab(4)} className="tab btn btn4">Chesse</div>
            </div>
            <div className={tab === 1 ? 'display' : 'hidden'}>
                Pretend there's a bunch of text here.
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