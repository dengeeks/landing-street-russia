import "./GoalsCard.css";
import Image from "next/image";

const GoalsCard = () => {
    return (
        <article className="goals-card">
            <Image src="/test/photo.png" fill alt="" sizes="(min-width: 1240px) 1204px, calc(100vw - 32px)"/>
            <div className="goals-card__info">
                <div className="goals-card__number">Цель #1</div>
                <div className="goals-card__text">
                    Развитие молодых специалистов по работе с молодежью
                </div>
            </div>
        </article>
    );
};

export default GoalsCard;
