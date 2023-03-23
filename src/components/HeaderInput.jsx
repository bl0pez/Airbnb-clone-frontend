export const HeaderInput = ({ title, description}) => {
    return (
        <>
            <h2 className='text-2xl mt-4'>{title}</h2>
            <p className='text-sm text-gray-500'>{description}</p>
        </>
    )
}
