'use client'
import "./RegistrationForm.css"
import FormField from "@/shared/ui/FormField";
import CheckBox from "@/shared/ui/CheckBox";
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {RegistrationType} from "../model/type";
import FormSelectField from "@/shared/ui/FormField/FormSelectField";

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<RegistrationType>()

    const onSubmit: SubmitHandler<RegistrationType> = async data => {
        console.log(data)
    }
    return (
        <form className="registration-form" id="registration-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="registration-form__fields">
                <FormField
                    {...register('fio', { required: 'Обязательное поле' })}
                    error={errors.fio?.message}
                    label="ФИО"
                    name="fio"
                    placeholder="Иванов Иван Иванович"
                    required
                />
                <FormField
                    {...register('phone', { required: 'Обязательное поле' })}
                    error={errors.phone?.message}
                    label="Контактный телефон"
                    name="phone"
                    placeholder="+7(999) 999-99-99"
                    required
                />
                <FormField
                    {...register('email', { required: 'Обязательное поле' })}
                    error={errors.email?.message}
                    label="Электронная почта"
                    name="email"
                    placeholder="Ваша почта"
                    required
                />
                <FormField
                    {...register('vk_id', { required: 'Обязательное поле' })}
                    error={errors.vk_id?.message}
                    label="ID ВКонтакте"
                    name="vk_id"
                    placeholder="ID ВКонтакте"
                    required
                />
                <Controller
                    name="region"
                    control={control}
                    rules={{ required: 'Выберите регион' }}
                    render={({ field }) => (
                        <FormSelectField
                            {...field}
                            error={errors.region?.message}
                            label="Регион"
                            required
                            placeholder="Выберите регион"
                            name="region"
                            options={['Алматы', 'Москва']}
                        />
                    )}
                />
                <Controller
                    name="activity"
                    control={control}
                    rules={{ required: 'Выберите род деятельности' }}
                    render={({ field }) => (
                        <FormSelectField
                            {...field}
                            error={errors.activity?.message}
                            label="Род деятельности"
                            required
                            placeholder="Выберите род деятельности"
                            name="activity"
                            options={['Алматы', 'Москва']}
                        />
                    )}
                />
                <FormField
                    {...register('workplace', { required: 'Обязательное поле' })}
                    error={errors.workplace?.message}
                    label="Полное название места работы"
                    name="workplace"
                    placeholder="Место работы"
                    required
                />
                <FormField
                    {...register('jobTitle', { required: 'Обязательное поле' })}
                    error={errors.jobTitle?.message}
                    label="Должность"
                    name="jobTitle"
                    placeholder="Должность"
                    required
                />
            </div>
            <CheckBox
                id="agreement-with-personal-info"
                {...register('agreement', {
                    required: 'Необходимо согласие на обработку данных'
                })}
                error={errors.agreement?.message}
            >
                Согласен на обработку данных
            </CheckBox>
        </form>
    )
}

export default RegistrationForm;