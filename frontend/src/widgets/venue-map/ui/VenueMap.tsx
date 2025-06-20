import "./VenueMap.css";
import SectionTitle from "@/shared/ui/SectionTitle";

const VenueMap = () => {
    return (
        <section className="venue-map section-spacing-top container" id="location">
            <iframe
                className="venue-map__iframe"
                src="https://yandex.ru/map-widget/v1/?mode=usermaps&um=constructor%3A72bf392da3b8b7559e27720b371c29814fb23576b502aebd0a4f9c7e0416dc14&amp;source=constructor"
                allowFullScreen
                title="Карта места проведения"
            />

            <div className="venue-map__info dashed-all">
                <SectionTitle className="venue-map__title">Место проведения</SectionTitle>
                <div className="venue-map__address">
                    <span className="venue-map__label">Адрес:<br/></span>
                    <span className="venue-map__text">
                        Россия, г. Барнаул, Алтайский государственный университет,
                        Социалистический, 68
                    </span>
                </div>
            </div>
        </section>
    );
};

export default VenueMap;
