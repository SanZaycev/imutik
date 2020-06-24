import React from 'react';
import {NavLink} from "react-router-dom";
import EducationItem from "./components/EducationItem/EducationItem";
import Preloader from "./components/Preloader/Preloader";
import ItemsPreloader from "./components/ItemsPreloader/ItemsPreloader";
import './App.css';

const App = (props) => {
  let onFilterField = e => {
    props.itemsFetchingAC(true);
    let params = new URLSearchParams(window.location.search);
    let found = { subject: null, genre: null, grade: null, search: null, };
    params.forEach((p, key) => { found[key] = p; });
    console.log(found);
    switch(e.target.name){
      case 'subject':
        if(found.subject || found.subject === ''){ window.history.pushState(null, null, decodeURIComponent(window.location.search).replace('subject=' + found.subject.split(' ').join('+'), 'subject=' + e.target.value.split(' ').join('+'))); }
        else{
          if(!found.genre && !found.grade && !found.search){ window.history.pushState(null, null, '/?subject=' + e.target.value.split(' ').join('+')); }
          else{ window.history.pushState(null, null, decodeURIComponent(window.location.search) + '&subject=' + e.target.value.split(' ').join('+')); }
        }
        setTimeout(()=>props.itemsFetchingAC(false),500); break;
      case 'genre':
        if(found.genre || found.genre === ''){ window.history.pushState(null, null, decodeURIComponent(window.location.search).replace('genre=' + found.genre.split(' ').join('+'), 'genre=' + e.target.value.split(' ').join('+'))); }
        else{
          if(!found.subject && !found.grade && !found.search){ window.history.pushState(null, null, '/?genre=' + e.target.value.split(' ').join('+')); }
          else{ window.history.pushState(null, null, decodeURIComponent(window.location.search) + '&genre=' + e.target.value.split(' ').join('+')); }
        }
        setTimeout(()=>props.itemsFetchingAC(false),500); break;
      case 'grade':
        if(found.grade || found.grade === ''){ window.history.pushState(null, null, decodeURIComponent(window.location.search).replace('grade=' + found.grade, 'grade=' + e.target.value)); }
        else{
          if(!found.subject && !found.genre && !found.search){ window.history.pushState(null, null, '/?grade=' + e.target.value); }
          else{ window.history.pushState(null, null, decodeURIComponent(window.location.search) + '&grade=' + e.target.value); }
        }
        setTimeout(()=>props.itemsFetchingAC(false),500); break;
      case 'search':
        if(found.search || found.search === ''){ window.history.pushState(null, null, decodeURIComponent(window.location.search).replace('search=' + found.search.split(' ').join('+'), 'search=' + e.target.value.split(' ').join('+'))); }
        else{
          if(!found.subject && !found.genre && !found.grade){ window.history.pushState(null, null, '/?search=' + e.target.value.split(' ').join('+')); }
          else{ window.history.pushState(null, null, decodeURIComponent(window.location.search) + '&search=' + e.target.value.split(' ').join('+')); }
        }
        setTimeout(()=>props.itemsFetchingAC(false),1000); break;
      default:
        window.history.pushState(null, null, window.location.search);
        setTimeout(()=>props.itemsFetchingAC(false),500);
    }
    props.filterFieldAC(e.target.name, e.target.value, window.location.search);
  };
  let switchPrice = e => { props.switchPrice(e.target.value); };
  let eduList;
  if(props.educations.length > 0){ eduList = props.educations.map(edu =><EducationItem key={edu.courseId} { ...edu } isPrice={props.isPrice}/>); }
  else{ eduList = <li className="empty-courses"><h3>Сейчас тут пусто.</h3><div className="empty-items-image" /></li>; }
  return (
      <div className="wrapper">
        <Preloader isFetching={props.isFetching} />
        <div className="content">
          <div className="l-header">
            <div className="header">
              <NavLink to="#" className="header-logo"><h1>Облако знаний</h1></NavLink>
              <div className="header-nav">
                <NavLink to="#" className="header-btn header-btn-primary">Каталог</NavLink>
              </div>
              <select onChange={e => switchPrice(e)} name="priceSwitcher" className="switchPrice">
                <option value="true">Цена</option>
                <option value="false">Бонусы</option>
              </select>
            </div>
          </div>
          <div className="l-container-4">
            <h1 className="u-text-center">Витрина</h1>
            <div className="courses u-mt-30">
              <form className="courses-form form" id="filterform">
                <div>
                  <select id="subject" name="subject" onChange={e => onFilterField(e)} value={props.subject}>
                    <option value="">Все предметы</option>
                    <option value="Алгебра">Алгебра</option>
                    <option value="Английский язык">Английский язык</option>
                    <option value="Биология">Биология</option>
                    <option value="География">География</option>
                    <option value="Геометрия">Геометрия</option>
                    <option value="Демо-версия">Демо-версия</option>
                    <option value="Информатика">Информатика</option>
                    <option value="История">История</option>
                    <option value="Литература">Литература</option>
                    <option value="Математика">Математика</option>
                    <option value="Обществознание">Обществознание</option>
                    <option value="Окружающий мир">Окружающий мир</option>
                    <option value="Робототехника">Робототехника</option>
                    <option value="Русский язык">Русский язык</option>
                    <option value="Физика">Физика</option>
                    <option value="Химия">Химия</option>
                  </select>
                </div>
                <div>
                  <select id="genre" name="genre" onChange={e => onFilterField(e)} value={props.genre}>
                    <option value="">Все жанры</option>
                    <option value="Демо">Демо</option>
                    <option value="Задачник">Задачник</option>
                    <option value="Подготовка к ВПР">Подготовка к ВПР</option>
                    <option value="Подготовка к ЕГЭ">Подготовка к ЕГЭ</option>
                    <option value="Рабочая тетрадь">Рабочая тетрадь</option>
                  </select>
                </div>
                <div>
                  <select id="grade" name="grade" onChange={e => onFilterField(e)} value={props.grade}>
                    <option value="">Все классы</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                  </select>
                </div>
                <div>
                  <input className="borderFind" type="text" placeholder="Поиск" id="search" name="search" onChange={e => onFilterField(e)} value={props.search}/>
                  <button className="courses-form-search-btn" type="submit" title="Найти"/>
                </div>
              </form>
            </div>
            <ul className="courses-list" id="courseslist"><ItemsPreloader isLoad={props.itemsLoading} />{eduList}</ul>
          </div>
        </div>
        <div className="l-footer">
          <div className="footer">
            <div className="footer-legal">
              <p>&copy; <NavLink to="#">ООО &laquo;Физикон Лаб&raquo;</NavLink>, 2013&mdash;2020</p>
              <p><NavLink rel="nofollow" to="#">Пользовательское соглашение</NavLink></p>
            </div>
            <ul className="footer-social">
              <li><NavLink to="#" className="twitter">Twitter</NavLink></li>
              <li><NavLink to="#" className="vkontakte">Vkontakte</NavLink></li>
              <li><NavLink to="#" className="facebook">Facebook</NavLink></li>
              <li><NavLink to="#" className="instagram">Instagram</NavLink></li>
            </ul>
            <div className="footer-legal">
              <p><NavLink to="tel:+74987446757">+7 (499) 322-07-57</NavLink>, <NavLink to="mailto:info@imumk.ru">info@imumk.ru</NavLink></p>
              <p><NavLink rel="nofollow" to="#">Правила пользования сайтом</NavLink></p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
