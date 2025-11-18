// V komponentě FeatureCard.js
const FeatureCard = ({ title, description, icon, colorClass }) => {
    return (
      <div className={`p-6 rounded-xl border-2 border-transparent hover:border-current transition duration-300 ${colorClass} bg-dark-card shadow-lg hover:shadow-2xl`}>
        <div className={`text-4xl mb-4 ${colorClass}`}>{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    )
  }
  
  export default FeatureCard
  