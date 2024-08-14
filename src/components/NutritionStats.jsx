import React from "react";

const NutritionStats = () => {
    return (
    <div className="nutrition-stats-section">
        <div className="info-box"><img src="calories-icon.svg" alt="calories icon" />
        <div className="info-text">
                <p>1,930kCal</p>
                <p>Calories</p>
            </div>
            </div>
        <div className="info-box"><img src="protein-icon.svg" alt="protein icon" />
        <div className="info-text">
                <p>155g</p>
                <p>Protéines</p>
            </div>
        </div>
        <div className="info-box"><img src="carbs-icon.svg" alt="carbs icon" />
        <div className="info-text">
                <p>290g</p>
                <p>Glucides</p>
            </div>
        </div>
        <div className="info-box"><img src="fat-icon.svg" alt="fat icon" />
        <div className="info-text">
                <p>50g</p>
                <p>Lipides</p>
            </div>
        </div>
      
    </div>
    )
}

export default NutritionStats;