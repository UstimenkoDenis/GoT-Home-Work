// скопируем сюда все что есть в скачанном файле с loading.io (сайт со спинерами)
// все стили и keyframes вырезаем отсюда и помещаем в spinner.css
// Теперь создадим стандартную структуру создаем наш компонент в который поместим нашу верстку но удалим из нее тэг style 
//

import React from 'react';
import './spinner.css';

const Spinner = ()=> {
    return (
        <div className="loadingio-spinner-spin-6l4fkcrph2c">
            <div className="ldio-6ifxvk10iw6">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        </div>
        
    )
}
export default Spinner;

