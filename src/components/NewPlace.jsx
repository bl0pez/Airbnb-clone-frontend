import { useEffect, useRef, useState } from "react";
import { HeaderInput } from "./HeaderInput";
import { Perks } from "./Perks";
import { MapBox } from "./MapBox";
import DatePicker,  { registerLocale } from "react-datepicker";
import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es);

const startTimes = {
    start: new Date(),
    end: addHours(new Date(), 24),
}

export const NewPlace = () => {

    const mapRef = useRef(null);

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [addPhotos, setAddPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuest, setMaxGuest] = useState(1);

    const [formValues, setFormValues] = useState(startTimes);

    const onDateChange = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event,
        });
    }

    const addPhotoByLink = () => {

    }


    return (
        <div>
            <form action="">
                <HeaderInput
                    title='Titulo'
                    description='Titulo para tu lugar. Debe ser corto y llamativo como en un anuncio'
                />
                <input
                    className="input" 
                    type="text" 
                    placeholder='title, for examble: My lovely apt' />

                <HeaderInput
                    title='Fotos'
                    description='Agrega fotos de tu lugar'
                />
                <div className='flex gap-2'>
                    <input
                        className="input" 
                        type="text" 
                        placeholder={'Add using a link ...jpg'} />
                    <button className="bg-gray-200 px-4 rounded-2xl">Add&nbsp;photo</button>
                </div>
                <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    <button className='flex justify-center gap-1 items-center border bg-transparent rounded-2xl p-8 text-gray-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                            <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload</button>
                </div>

                <HeaderInput
                    title='Descripcion'
                    description='Describe tu lugar'
                />
                <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>

                <HeaderInput
                    title='beneficios'
                    description='Agrega beneficios que ofreces a tus huespedes'
                />
                <div className='grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                    <Perks />
                </div>

                <HeaderInput
                    title='Información extra'
                    description='Agregar información extra que pueda ser útil para los huéspedes'
                />
                <textarea name="" id="" cols="30" rows="10" />

                <HeaderInput
                    title='Check in time'
                    description='Selecciona el día y la hora de entrada y salida.'
                />
                <div className='grid gap-2 sm:grid-cols-3'>
                    <div>
                        <h3 className='mt-2 -mb-1'>Día y hora de entrada</h3>
                        <DatePicker
                        selected={formValues.start}
                        className="input"
                        onChange={(event) => onDateChange(event, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'>Día y hora de salida</h3>
                        <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        className="input"
                        onChange={(event) => onDateChange(event, 'end')}
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption='Hora'
                    />
                    </div>
                    <div>
                        <h3 className='mt-2 -mb-1'>
                            número máximo de invitados</h3>
                        <input type="text" />
                    </div>
                </div>
                <HeaderInput
                    title='Direccion'
                    description='Busca tu direccion en el mapa'
                />

                    <MapBox />
    
                <button className='primary my-4'>Crear</button>
            </form>
        </div>
    )
}
