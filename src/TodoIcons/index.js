import { ReactComponent as CheckRVG } from './check.svg' //Esta es la forma de importar un archivo svg
import { ReactComponent as DeleteSVG } from './delete.svg' //Esta es la forma de importar un archivo svg
import './TodoIcon.css';

const iconType = {
    "check": (color) => <CheckRVG className='Icon-svg' fill={color} />,
    "delete": (color) => <DeleteSVG className='Icon-svg' fill={color} />
}

function TodoIcons ({type, color, onClick}){
    return (
        <span className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    );
}


export { TodoIcons }