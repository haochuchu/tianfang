import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import $ from 'jquery';

class Start extends Component {
    constructor(){
        super();
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
        this.data={"bundle":[{"bundle_img":"images/img_1.png","bundle_word":"标志+VI"},{"bundle_img":"images/img_2.png","bundle_word":"品牌+战略"},{"bundle_img":"images/img_3.png","bundle_word":"网络+互动"},{"bundle_img":"images/img_4.png","bundle_word":"空间+导视"},{"bundle_img":"images/img_5.png","bundle_word":"视频+动画"},{"bundle_img":"images/img_6.png","bundle_word":"720全景拍摄"}]}
    };
    componentDidMount(){
        document.addEventListener('scroll', this.handleScroll.bind(this));
        setTimeout(function(){
          document.getElementById("shows").style.display="none"
        },900);


        $(function() {
            var count=0;
            var length = 2;
            setInterval(function () {
                count++;
                if(count>2){
                    count=0;
                }
                $(".home div").eq(count).fadeIn(600).siblings().fadeOut(600);
            },5000);
        })
         $(window).scroll(function () {
            if($("body").scrollTop()>=500){
                $('.content h2').css({
                    opacity:'1',
                    transition: 'all .6s ',
                });
                // $('.content_bundle ul').css({
                //     transition: 'all .6s ',
                //     opacity:'1',
                //     transform:'scale(1)'
                // })
                
               $('.bundle').css({
                    transform:'scale(1)'
               })
            }
        })

    } 
    handleScroll=function (e) {
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(document.body.scrollTop>=h){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
            document.getElementById("img").style.marginTop='-80px';
            document.getElementById("title").style.color='#000';
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
            document.getElementById("title").style.color='#fff';
        }
    }

    render() {
        return (
        <Router>
            <div className="wrap">

      	        <div className="home">
                    <div className="home_one" id="home">
                        <div className="animate animate_s">
                            <h1>ELITE</h1>
                            <h4>提供品牌策略+设计+亮相落地的综合服务</h4>
                            <h6>- READ MORE -</h6>
                            <p></p>
                        </div>
                    </div>
                    <div className="home_two" id="home">
                        <div className="animate animate_o">
                            <h1>PARTNER</h1>
                            <h4>高效专业的团队 是您可靠的合作伙伴</h4>
                            <h6>- READ MORE -</h6>
                            <p></p>
                        </div>
                    </div>
                    <div className="home_three" id="home">
                        <div className="animate">
                            <h1>Congratulations</h1>
                            <h4>德国if大奖    红点传达设计大奖</h4>
                            <h6>- READ MORE -</h6>
                            <p></p>
                        </div>
                    </div>
                </div>

                
                {/*content*/}
                <div className="content">
                    <div className="fixedBox">
                        <h2>PRODUCTS</h2>
                        <div className="content_bundle">
                            <ul>
                                {this.data.bundle.map(function(bundle,i){
                                    return (
                                            <div className="bundle">
                                                <li>
                                                    <p className="none"><img src={bundle.bundle_img}/></p>
                                                    <p className="word">{bundle.bundle_word}</p>
                                                </li>
                                            </div>
                                    )
                              })}
                            </ul>
                        </div>
                         {/*contact*/}
                        <div className="contact">
                            {this.foot.footer.map(function(foot,i){
                                    return (
                                            <div className="contact_top">
                                                <img src={foot.foot_img}/>
                                            </div>
                                    )
                            })};
                            <ul className="contact_ul">
                                {this.foot.listAll.map(function(list,i){
                                    return <li><a><img src={list.list_img}/></a></li>
                                })}
                            </ul>
                            <div className="contact_word">
                                <h5>HOT LINE</h5>
                                <h3 className="light">400·8167·995</h3>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </Router>
    );
  }
}

export default Start;
