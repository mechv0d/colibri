import {useForm} from 'react-hook-form';
import TitleHeader from "../components/Headers/TitleHeader.jsx";
import BaseWrapper from "../components/BaseWrapper/BaseWrapper.jsx";
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/button/filled-button.js';
import '/src/css/forms.css'

export default function Feedback() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        console.log('Данные формы:', data);
        // Здесь будет логика отправки формы
    };

    return (
        <BaseWrapper top_bar_title='Обратная связь'>
            <TitleHeader text="Отправить сообщение"/>
            <form className='base-form feedback' onSubmit={handleSubmit(onSubmit)}>
                <md-outlined-text-field
                    label="Ваша почта"
                    type="email"
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Введите корректный email'
                        }
                    })}
                    errorText={errors.email?.message}
                />

                <md-outlined-text-field
                    type="textarea"
                    label="Сообщение"
                    placeholder="Что вам понравилось, а что нет? Расскажите нам!"
                    rows="6"
                    {...register('message', {
                        required: 'Сообщение обязательно',
                        minLength: {
                            value: 10,
                            message: 'Минимум 10 символов'
                        },
                        maxLength: {
                            value: 1000,
                            message: 'Максимум 1000 символов'
                        }
                    })}
                    errorText={errors.message?.message}
                />

                <md-filled-button type="submit">
                    Отправить
                </md-filled-button>
            </form>
        </BaseWrapper>
    );
}