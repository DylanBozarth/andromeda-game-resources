export const About = () => {
    return (
        <div>
            About us ASDJLASJDLASD
        </div>
    )

}
{combat.map((combat) => {
    return (
        <div className='FAQ-block'>
            <div className='FAQ-question' onClick={() => setFAQToggle(FAQtoggle === combat.Q ? null : combat.Q)}>{combat.Q}<div className={FAQtoggle === combat.Q ? 'minus' : 'cross'}></div></div>
            <div className={FAQtoggle === combat.Q ? 'FAQ-answer' : 'hidden'} >{combat.A}</div>
        </div>
    )

})}