import "./HomeTopic.css";
import SectionTitle from "@/shared/ui/SectionTitle";

const HomeTopic = () => {
    return (
        <section className="home-topic section-spacing-top dashed-all">
            <div className="home-topic__container container">
                <SectionTitle className="dark">Главная тема</SectionTitle>
                <p className="home-topic__text">
                    Развитие специалистов, работающих с молодежью, формирование сообщества уличной культуры и спорта. <br/>
                    В ходе форума эксперты поделятся опытом, навыками и кейсами в области работы с новыми молодежными лидерами, <br/> социализации уличных культур, создании общественных проектов, а также популяризации здорового образа жизни.
                </p>
            </div>
        </section>

    )
}

export default HomeTopic;