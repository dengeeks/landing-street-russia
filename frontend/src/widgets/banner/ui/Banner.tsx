import "./Banner.css";
import MediaSwitcher from "@/shared/ui/MediaSwitcher";
import SelectMenu from "@/shared/ui/SelectMenu";
import Image from "next/image";

const Banner = () => {
    return (
        <section className="banner">
            <MediaSwitcher type="photo" src="/test/photo.png" alt="баннер" sizes="calc(100vw - 32px)"/>
            <div className="banner__inner container">
                <div className="banner__content">
                    <h1 className="banner__title">
                        образовательный форум уличной культуры и спорта
                    </h1>
                    <div className="banner__date">
                        <Image src="/png/z-banner.png" alt="иконка" fill priority/>
                        <div className="banner__info">
                            <span className="banner__label">Даты проведения</span>
                            <div className="banner__range">
                                24–27
                                <br/>
                                октября
                            </div>
                            <span className="banner__location">г. Барнаул</span>
                        </div>
                    </div>
                </div>
                <SelectMenu
                    placeholder="выбрать регион"
                    options={['dawdaw', 'awdawdaw', 'aaaa']}
                />
            </div>
        </section>
    );
};

export default Banner;
