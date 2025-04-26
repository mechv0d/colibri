import TitleHeader from "../components/Headers/TitleHeader.jsx";
import BaseWrapper from "../components/BaseWrapper/BaseWrapper.jsx";
import '@material/web/textfield/outlined-text-field.js'
import {useForm} from 'react-hook-form';
import '/src/css/forms.css'
import {useUser} from "../context/UserContext.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Auth() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const { login, isAuth, user } = useUser();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        login({
            id: 1,
            phone: data.phone,
            name: data.name || 'Пользователь'
        });
        console.log(user);
        navigate('/')
    };

    useEffect(() => {
        if (isAuth) navigate("/");
    }, [isAuth, navigate]);

    return <>
        <BaseWrapper top_bar_title='Вход'>
            <TitleHeader text="Вход в аккаунт"/>
            <form className="base-form" onSubmit={handleSubmit(onSubmit)}>
                <md-outlined-text-field
                    label="Телефон"
                    type="tel"
                    {...register('phone', {
                        required: 'Телефон обязателен',
                        pattern: {
                            value: /^\d{10}$/,
                            message: 'Формат: +7XXXXXXXXXX'
                        }
                    })}
                    errorText={errors.phone?.message}
                    prefix-text="+7"
                />

                <md-filled-button name="send-code" type="button">
                    Отправить код
                </md-filled-button>

                <md-outlined-text-field
                    label="Код"
                    type="number"
                    {...register('code', {required: 'Код обязателен'})}
                    errorText={errors.code?.message}
                />

                <md-filled-button type="submit" name="create">
                    Войти
                </md-filled-button>

                <md-filled-button name="send-again" disabled>
                    Отправить снова (59)
                </md-filled-button>

            </form>
        </BaseWrapper>
    </>
}
