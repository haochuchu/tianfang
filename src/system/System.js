import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './system.css';
import $ from 'jquery';

class System extends Component {
    constructor(){
        super();
        this.foot={"footer":[{"foot_img":"images/slogan.png"}],"listAll":[{"list_img":"images/footer_icon_01.png"},{"list_img":"images/footer_icon_02.png"},{"list_img":"images/footer_icon_03.png"}]
        };
        this.data={"system":[{"titb":"?","system_img":"images/20170320050308666.jpg","system_word":"老铺黄金（电脑端）","system_new":"MORE"},{"titb":"?","system_img":"images/20170320050206863.jpg","system_word":"老铺黄金（手机端）","system_new":"MORE"},{"titb":"?","system_img":"images/20170323052512200.jpg","system_word":"老铺黄金天猫旗舰店（电脑端）","system_new":"MORE"},{"titb":"?","system_img":"images/20170320045947332.jpg","system_word":"老铺黄金天猫旗舰店（无线端）","system_new":"MORE"},{"titb":"?","system_img":"images/20170322061824135.jpg","system_word":"ZOE ARCH","system_new":"MORE"},{"titb":"?","system_img":"images/20170323052623746.jpg","system_word":"studio","system_new":"MORE"},{"titb":"?","system_img":"images/20170323073328732.jpg","system_word":"畅格文化传播","system_new":"MORE"},{"titb":"?","system_img":"images/20170323073252755.jpg","system_word":"HILLMANN","system_new":"MORE"},{"titb":"?","system_img":"images/20170323103457821.jpg","system_word":"新界传媒","system_new":"MORE"},{"titb":"?","system_img":"images/20170323103559923.jpg","system_word":"络派模切","system_new":"MORE"},{"titb":"?","system_img":"images/20170323041917174.jpg","system_word":"老铺黄金（京致智能科技（电脑端）电脑端）","system_new":"MORE"},{"titb":"?","system_img":"images/20170323052534344.jpg","system_word":"恒丰美林","system_new":"MORE"},{"titb":"?","system_img":"images/20170324041236369.jpg","system_word":"能新科","system_new":"MORE"},{"titb":"?","system_img":"images/20170323060756753.jpg","system_word":"传媒大学经济与管理学院","system_new":"MORE"},{"titb":"?","system_img":"images/20170323103127806.jpg","system_word":"TOP尚视","system_new":"MORE"},{"titb":"?","system_img":"images/20170322073243391.jpg","system_word":"一汽大众","system_new":"MORE"},{"titb":"?","system_img":"images/20170324054721188.jpg","system_word":"昂思多","system_new":"MORE"},{"titb":"?","system_img":"images/20170324054817834.jpg","system_word":"环耀汽车","system_new":"MORE"},{"titb":"?","system_img":"images/20170327055941383.jpg","system_word":"对外经贸国际关系学院","system_new":"MORE"},{"titb":"?","system_img":"images/20170324072317653.jpg","system_word":"农业科学院（质标所）","system_new":"MORE"}]}
    };
    componentDidMount(){
        $(function(){
            $('.blocks').click(function(){
                $('body').animate({scrollTop:0},function(){
                    return false;
                })
            });
        })
        var backs=document.getElementById("backs");
        backs.onclick=function(){
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
        }
        document.addEventListener('scroll', this.handleScroll.bind(this));
    };
    handleScroll=function (e) {
        if(document.body.scrollTop>=0){
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
    };
    render(){
        return(
            <div className="wrap">
                <div className="show_top"></div>
                <div className="show_bottom" id="show_news"></div>
                <div className="home_system" id="home"></div>
                {/*content*/}
                <div className="fixed_news">
                    <h2 className="system_word">PRODUCTS</h2>
                    <ul className="system_box">
                             {this.data.system.map(function(system,i){
                                    return <Link key={i}  to={system.titb}><li>
                                        <div className="system_top">
                                            <img src={system.system_img}/>
                                        </div>
                                        <div className="system_bot">
                                            <h5>{system.system_word}</h5>
                                            <span>{system.system_new}</span>
                                        </div>
                                    </li></Link>
                                })}
                    </ul>
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
                <div className="Rt_top">
                    <p id="backs">
                        <Link to="/"><img src="images/go_back.jpg" alt="" /></Link>
                    </p>
                    <p className="blocks">
                        <img src="images/gotop.jpg" alt="" />
                    </p>
                </div>
            </div>
        )
    }
}

export default System;