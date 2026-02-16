const StatCard = ({ number, label }) => (
    <div className="stat-card">
        <span className="stat-number">{number}</span>
        <span className="stat-label">{label}</span>
    </div>
);
export default StatCard;