import React from 'react';
import './FighterCard.scss';

interface BoxerCardProps {
    name: string;
    record: string;
    rank: number;
    division: string;
    image: string;
    country: string;
    isChampion?: boolean;
}

const BoxerCard: React.FC<BoxerCardProps> = ({
                                                 name,
                                                 record,
                                                 rank,
                                                 division,
                                                 image,
                                                 country,
                                                 isChampion = false,
                                             }) => {
    return (
        <article className="boxer-card">
            <header className="boxer-card__header">
                <img src={image} alt={name} className="boxer-card__image"/>
                {isChampion && (
                    <span className="boxer-card__badge boxer-card__badge--champion">
                        World Champion
                    </span>
                )}
            </header>

            <section className="boxer-card__content">
                <div className="boxer-card__meta">
                    <span className="boxer-card__tag boxer-card__tag--division">{division}</span>
                    <span className="boxer-card__tag boxer-card__tag--country">{country}</span>
                </div>

                <h2 className="boxer-card__name">{name}</h2>

                <footer className="boxer-card__stats">
                    <div className="boxer-card__stat-item">
                        <span className="boxer-card__stat-label">Record</span>
                        <span className="boxer-card__stat-value">{record}</span>
                    </div>
                    <div className="boxer-card__stat-item">
                        <span className="boxer-card__stat-label">Rank</span>
                        <span className="boxer-card__stat-value">#{rank}</span>
                    </div>
                </footer>
            </section>
        </article>
    );
};

export default BoxerCard;