import React, { Component } from 'react';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './contact.css';
import './contact_phone.css';
import $ from 'jquery';
import conf from './../config';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            contact:[],
            message:[],
            hot_line:[],
            con_img:[]
        };
    };
	componentDidMount(){
        $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/contact`,
            async:"true",
            success:function(ss){
                this.setState({
                    contact:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/message`,
            async:"true",
            success:function(ss){
                this.setState({
                    message:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
                type:"post",
                url:`${conf.url}/tianfang/hot_line`,
                async:"true",
                success:function(ss){
                    this.setState({
                        hot_line:ss
                    })
                }.bind(this),
                error:function(){
                    alert('失败了');
                }
        })
        $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/con_img`,
            async:"true",
            success:function(ss){
                this.setState({
                    con_img:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        //回到顶部
        $(function(){
            $('.blocks').click(function(){
                $('body,html').animate({scrollTop:0},function(){
                    return false;
                })
            });
        })
        var backs=document.getElementById("backs");
        backs.onclick=function(){
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
        }
        //document.addEventListener('scroll', this.handleScroll.bind(this));
        if(window.addEventListener){
            document.addEventListener('scroll', this.handleScroll);
        }else{
            document.attachEvent('onscroll', this.handleScroll);
        }
    };
    handleScroll=function (e) {
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(window.screen.width>414){
            if((document.body.scrollTop || document.documentElement.scrollTop)>=h){ 
                document.getElementById("head").style.width='100vw';
                document.getElementById("head").style.background='#fff';
                document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
                document.getElementById("img").style.marginTop='-80px';
                document.getElementById("nav").className='navs';
                
            }
            else{
                document.getElementById("head").style.width='100vw';
                document.getElementById("head").style.background='transparent';
                document.getElementById("head").style.boxShadow='';
                document.getElementById("img").style.marginTop='';
                document.getElementById("nav").className='nav';
            }
        }else if(window.screen.width<=414){
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='#fff';
            document.getElementById("head").style.height='10vh';
            document.getElementById("img").style.marginTop='-80px';
        }
    }
	render(){
		return(
			<div className="wrap">
             {/*show*/}
				<div className="show_top"></div>
                <div className="show_bottom" id="showsss"></div>
                <div className="home_contact" id="home"></div>

                {/*content*/}
                <div className="main_contact">
                    {/*contact*/}
                    <div className="contact_box">
                        {this.state.contact.map(function(foot,i){
                                return <div key={i}>
                                        <div className="contact_tops">
                                            <img src={foot.contact_img}/>
                                        </div>
                                        <div className="c_word">
                                            {foot.p_first}
                                        </div>
                                        <div className="c_box">
                                            <p>{foot.p_second}</p>
                                            <p>{foot.p_third}</p>
                                            <p>{foot.p_fourth}</p>
                                            <p>{foot.p_fivth}</p>
                                        </div>
                                </div>
                        })}
                        <ul className="contact_uls">
                            {this.state.message.map(function(list,i){
                                    return <li key={i}><a><img src={list.imgs} alt='' /></a></li>
                                })}
                        </ul>
                        <div className="contact_words">
                            {this.state.hot_line.map(function(hot,i){
                                    return <div key={i}>
                                        <h5>{hot.hot}</h5>
                                        <h3 className="light">{hot.line}</h3>
                                    </div>
                            })}
                        </div>
                    </div>
                </div>
                {/*Rt_top*/}
                <div className="Rt_top">
                    <p id="phones">
                        <img src="images/phone.jpg" alt="" />
                    </p>
                    <p id="backs">
                        <a href="http://localhost:3000/">
                            <img src="images/go_back.jpg" alt="" />
                        </a>
                    </p>
                    <p className="blocks">
                        <img src="images/gotop.jpg" alt="" />
                    </p>
                </div>

			</div>
		)
	}
}

export default Contact;