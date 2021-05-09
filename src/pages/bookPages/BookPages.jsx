import { useEffect, useState} from 'react'

import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
// import { Item } from '../../components/BookCard';

import API_BASE_URL from '../../constants'

// import List from "../../components/BookCard/List";
import img1 from '../../assets/images/rasm1.png'
import like from '../../assets/images/icons/like.svg'
import facebook from '../../assets/images/icons/facebook.svg'
import instagram from '../../assets/images/icons/instagram.svg'
import telegram from '../../assets/images/icons/telegram.svg'
import user from '../../assets/images/icons/user.png'
import SearchPage from '../searchPage';

import "./BookPages.scss";

const BookPages = () => {

const {id} = useParams();
    const [book, setBook] = useState({
        isFetched: false,
        data: {},
        error: null,
      });
    
      useEffect(() => {
        axios
          .get(`${API_BASE_URL}/api/books/3/${id}`, {})
          .then(function (response) {
            setBook({
              isFetched: true,
              data: response.data,
              error: false,
            });
          })
          .catch(function (error) {
            setBook({
              isFetched: true,
              data: [],
              error: error,
            });
          });
      }, [id]);
      console.log(book)
      
  return (

    <div className="book">
        <div className="book-inner container">
            <div className="book-inner-location">
                <p>Badiiy kitoblar | Otamdan qolgan dalalar</p>
            </div>
            <div className="book-inner-block">
                <div className="book-inner-block-left">
                    <h4>Taklif qilamiz</h4>
                    <SearchPage className='book-inner-block-left-item'/>
                    <button>barchasini ko‘rish</button>
                </div>
                <div className="book-inner-block-right">
                    <p className="book-inner-block-right-sana">Qo’shilgan sana: 21/02/2020</p>
                    <div className="book-inner-block-right-row">
                        <div className="book-inner-block-right-row-information">
                            <div className="book-inner-block-right-row-information-left">
                                <img src={img1} alt="" />
                            </div>
                            <div className="book-inner-block-right-row-information-right">
                                    <h2 className="book-inner-block-right-row-information-right-title">
                                        Otamdan qolgan dalalar
                                    </h2>
                                    <div className="book-inner-block-right-row-information-right-author">
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Muallif:</span>
                                            <p>Tog’ay Murod</p>
                                        </div>
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Hajmi:</span>
                                            <p>168 bet</p>
                                        </div>
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Nashr qilingan yili:</span>
                                            <p>2015</p>
                                        </div>
                                    </div>
                                    <div className="book-inner-block-right-row-information-right-author">
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Ko’rishlar soni:</span>
                                            <p>1802 marta</p>
                                        </div>
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Holat:</span>
                                            <h3 className="book-inner-block-right-row-information-right-author-authors-busu">Bo’sh</h3>
                                        </div>
                                        <div className="book-inner-block-right-row-information-right-author-authors">
                                            <span>Yoqtirishlar:</span>
                                            <p>32 ta</p>
                                        </div>
                                    </div>
                                    <div className="book-inner-block-right-row-information-right-h2">
                                        <img src={like} alt="" />
                                        <p>Yoqdi</p>
                                    </div>
                                    <button className="book-inner-block-right-row-information-right-btn">
                                        Band qilish
                                    </button>
                            </div>
                        </div>
                        <h3 className="book-inner-block-right-row-summary">Kitob tavsifi</h3>
                        <p className="book-inner-block-right-row-text">
                           Keyingi yillar romanchiligining yuksalishda Tog’ay Murodning
                           alohida o’rni mavjud. Adib 70-yillardayoq adabiyotimizga
                            yorqin yulduz kabi kirib keldi. Uning ilk qissa va
                            hikoyalari o’z davridayoq yuksak baholangan. Istedodli 
                            yozuvchi Tog’ay Murodning “Ot kishnagan oqshom” hikoya 
                            va qissalardan iborat ilk to’plamidagi xarakterlar yaratish
                            san’atini hayot haqiqatinibadiiy tahlil qilish va uslubini
                            namoyon qila olgan adib sifatida nasrimiz yuksalishini yana
                            bir cho’qqi sari etaklaganligi adabiy tanqidchilikda o’z ifodasini
                            haqqoni bahosini olmoqda. Adabiyot jamiyat vijdoni,
                            badiiy so’z san’atkorligi anashu vijdonni harakatga keltirib
                            turishday ma’suliyatli burchni ado qilar ekan ular yurak sadolari
                            yozuvchilik vijdoni, hayqiriqlariga quloq solishga majburdirlar 
                            anshu xususiyatlarini o’zida tom ma’noda mujassamlashtirgan 
                            adiblardan biri Tog’ay Muroddir. Ammo shu o’ringa sobiq sho’rolar 
                            davri ularning inson hayotidagi fojialarga ne chog’lik sababachi
                            bo’lganligiga diqqat qilsak.
                        </p>
                        <div className="book-inner-block-right-row-comment">
                            <div className="book-inner-block-right-row-comment-left">
                                <h5>Izoh qoldiring!</h5>
                                <label className="book-inner-block-right-row-comment-left-label" htmlFor="t1">
                                
                                    <input type="text" id='t' name='t1' placeholder='Izoh qoldiring!' />
                                </label>
                            </div>
                            <div className="book-inner-block-right-row-comment-right">
                                <h6>Do‘stlaringizga ulashing</h6>
                                <div className="book-inner-block-right-row-comment-right-mesengs">
                                    <Link className="book-inner-block-right-row-comment-right-mesengs-link"><img className="book-inner-block-right-row-comment-right-mesengs-link-img" src={facebook} alt="" /></Link>
                                    <Link className="book-inner-block-right-row-comment-right-mesengs-link"><img className="book-inner-block-right-row-comment-right-mesengs-link-img" src={instagram} alt="" /></Link>
                                    <Link className="book-inner-block-right-row-comment-right-mesengs-link"><img className="book-inner-block-right-row-comment-right-mesengs-link-img" src={telegram} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="book-inner-block-right-row-user">
                            <img src={user} alt="" />
                            <div className="book-inner-block-right-row-user-name">
                                <h3 className="book-inner-block-right-row-user-name-names">Bobur Mavlonov</h3>
                                <p className="book-inner-block-right-row-user-name-comments">Siz hozircha izoh qoldirmagansiz</p>
                            </div>
                        </div>
                        <div className="book-inner-block-right-row-users">
                            <span className="book-inner-block-right-row-users-counts">567 Izoh</span>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Abdumalik Kalandarov</h4>
                                        <span>30/03/2021</span>
                                    </div>
                                    <p>
                                        Dolor sit amet, consectetur
                                        adipiscing elit. Nullam duis
                                        blandit commodo consectetur 
                                        lorem quis tristique 
                                        consectetur duis leo mattis est.
                                    </p>
                                </div>
                            </div>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Javohir Jaloliddinov</h4>
                                        <span>20/05/2021</span>
                                    </div>
                                    <p>
                                        Dolor sit amet, consectetur adipiscing
                                        elit. lorem quis tristique consectetur
                                        duis leo mattis est.
                                    </p>
                                </div>
                            </div>
                            <div className="book-inner-block-right-row-users-comments">
                                <div className="book-inner-block-right-row-users-comments-img">
                                    <img src={user} alt="" />
                                </div>
                                
                                <div className="book-inner-block-right-row-users-comments-info">
                                    <div className="book-inner-block-right-row-users-comments-info-name">
                                        <h4>Ubaydullayev Abdulaziz</h4>
                                        <span>12/05/2020</span>
                                    </div>
                                    <p>
                                        Mullam duis blandit commodo lorem
                                        quis tristique consectetur duis
                                        leo mattis est.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BookPages;
