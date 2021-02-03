import React from 'react';
import logo from '../public/logo-white.png';


  
const Footer =()=>{

    return(
        <div className="main-footer"
             style={{backgroundColor: "#ffead6"}}>
            
                <div className="row">
                    <div className="col-md-3">
                    <img
       src={logo}
       
        className="d-inline-block align-top"
        alt="Метлайн"
       width="300"
        />   
                    </div>
                    <div className="col-md-3 pt-5">
                    <p>Тел.: 8 812 312 87 72</p> 
                    <p>Сайт: www.netangin-fyto.ru</p> 
                    </div>
                    <div className="col-md-3 pt-5">
                    <p>Россия, 190000, г.Санкт-Петербург,</p> 
                    <p>Вознесенский пр., д.4, лит. А</p> 
                    </div>
                    <div className="col-md-3 pt-5">
                    <p>&copy;{new Date().getFullYear()}«МЕТЛАЙН». Сайт создан DIAMOND ELEPHANT</p> 
                    </div>
                    
                                   </div>
            
                

        </div>
    )
}

export default Footer