import "./Registration.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import RegistrationForm from "@/features/registration-form";
import Image from "next/image";
import Button from "@/shared/ui/Button";

const Registration = () => {
    return (
        <section className="registration container section-spacing-top" id="registration">
            <SectionTitle>Регистрация</SectionTitle>
            <div className="registration__content">
                <div className="registration__form-wrapper">
                    <RegistrationForm/>
                    <div className="registration__image-wrapper">
                        <div className="registration__image-frame">
                            <Image src="/test/photo.png" alt="Скейтбордист" fill className="registration__image-background"/>
                            <Image src="/test/photo.png" alt="Скейтбордист" fill className="registration__image-rotated" />
                        </div>
                        <p>Даю согласие на обработку своих персональных данных, то есть совершение, в том числе,
                            следующих действий: обработку (включая сбор, систематизацию, накопление, хранение, уточнение
                            (обновление, изменение), использование, обезличивание, блокирование, уничтожение
                            персональных данных), при этом общее описание вышеуказанных способов обработки данных
                            приведено в Федеральном законе от 27.07.2006 № 152-ФЗ «О персональных данных», а также на
                            передачу такой информации третьим лицам, в случаях, установленных нормативными документами
                            вышестоящих органов и законодательством. Подтверждаю, что ознакомлен (а) с положениями
                            Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», права и обязанности в
                            области защиты персональных данных мне разъяснены.</p>
                    </div>
                </div>
                <Button type="submit" form="registration-form">
                    зарегистрироваться
                </Button>
            </div>
        </section>
    );
};

export default Registration;
