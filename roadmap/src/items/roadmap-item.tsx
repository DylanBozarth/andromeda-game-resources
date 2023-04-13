interface itemInterface {
    title: string,
    desc: string
}
export const RoadmapItem = ({title, desc}: itemInterface) => {
    return (
        <div className="roadmap-box">
        <h3 className="roadmap-title">{title}</h3>
        <p className="roadmap-desc">{desc}</p>
    </div>
    )
    
}