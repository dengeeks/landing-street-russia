import "./Goals.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import GoalsCard from "@/entities/goals-card";

const Goals = () => {
    return (
        <section className="container section-spacing-top goals-section" id="about">
            <SectionTitle>Цели</SectionTitle>
            <div className="goals__list">
                <GoalsCard/>
                <GoalsCard/>
                <GoalsCard/>
                <GoalsCard/>
            </div>
        </section>
    )
}

export default Goals;