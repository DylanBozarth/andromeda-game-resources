import { useState } from 'react';
import './sci-ui.scss'
export const FAQ = () => {
    const [tab, setTab] = useState(1);
    const [FAQtoggle, setFAQToggle] = useState()
    const gameplay = [
        {
            Q: 'What will be the objective of the game?',
            A: 'The objective for each player will be different. Some will want to conquer, others to trade, or to focus on research. There are many ways to play, though no area should be neglected.'
        },
        {
            Q: 'Will there be strict rules on how to play?',
            A: 'No, the game developers will be taking a hands-off approach. We create the game, you create the fun.'
        },
        {
            Q: 'What is the target demographic?',
            A: ''
        },
        {
            Q: 'What will players be doing most of the time?',
            A: ''
        },
        {
            Q: 'The game is free to play, Will this game be pay to win?',
            A: 'No, our monetization system is designed to impact the game as little as possible.'
        },
        {
            Q: 'Will there be updates to the game and will you accept player feedback?',
            A: 'Of course, We will constantly be updating the game to add features and remove bugs. We will also have forums for players to give us feedback.'
        }
    ]
    const combat = [
        {
            Q: '',
            A: ''
        },
        {
            Q: '',
            A: ''
        },
        {
            Q: '',
            A: ''
        },
        {
            Q: '',
            A: ''
        },
        {
            Q: '',
            A: ''
        },
        {
            Q: '',
            A: ''
        }
    ]
    const diplomacy = [
        {
            Q: '',
            A: ''
        }
    ]
    const research = [
        {
            Q: '',
            A: ''
        }
    ]
    return (
        <div>
            <h1 className='FAQ-title'>Game Information</h1>
            <div className='FAQ-tabs' id='A'>
                <div onClick={() => setTab(1)} className='tab btn btn1'>Gameplay</div>
                <div onClick={() => setTab(2)} className='tab btn btn2'>Combat</div>
                <div onClick={() => setTab(3)} className='tab btn btn3'>Diplomacy</div>
                <div onClick={() => setTab(4)} className='tab btn btn4'>Research</div>
            </div>
            <div className={tab === 1 ? 'display' : 'hidden'}>
                {gameplay.map((gameplay) => {
                    return (
                        <div className='FAQ-block'>
                            <div className='FAQ-question' onClick={() => setFAQToggle(FAQtoggle === gameplay.Q ? null : gameplay.Q)}>{gameplay.Q}<div className={FAQtoggle === gameplay.Q ? 'minus' : 'cross'}></div></div>
                            <p className={FAQtoggle === gameplay.Q ? 'FAQ-answer' : 'hidden'} >{gameplay.A}</p>
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