import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './about.css';
import './about_phone.css';
import $ from 'jquery';
import { Carousel } from 'antd';
import conf from './../config';

class About extends Component {
    constructor(){
        super();
        this.state={
            journey:[],
            made:[],
            brand:[],
            grow:[],
            message:[],
            hot_line:[],
            con_img:[],
            img:[{img:"",id:""}]
           
        };
    };
    componentDidMount(){
         $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/journey`,
            async:"true",
            success:function(ss){
                this.setState({
                    journey:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
         $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/made`,
            async:"true",
            success:function(ss){
                this.setState({
                    made:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
         $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/brand`,
            async:"true",
            success:function(ss){
                this.setState({
                    brand:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
         $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/grow`,
            async:"true",
            success:function(cc){
                this.setState({
                    grow:cc
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
         $.ajax({
            type:"get",
            url:`${conf.url}/tianfang/img`,
            async:"true",
            success:function(ss){
                console.log(ss)
                this.setState({
                    img:ss
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
        
        
    } 
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
                {/*banner*/}
                <div className="home_about" id="home"></div>
                <div className="show_top"></div>
                <div className="show_bottom" id="showss_box"></div>
                 {/*content*/}
                <div className="about_content">
                    <div className="fixed_box">
                        {/*brand*/}
                        {this.state.brand.map(function(brand,i){
                            return (
                                <div key={i} className="brand">
                                    <h2>{brand.title}<span>{brand.con}</span></h2>
                                    <p>{brand.All}</p>
                                </div>
                            )
                        })}
                        {/*brand img*/}
                        {this.state.brand.map(function(brand,i){
                            return <div key={i} className="character" style={{"border":"none"}}> 
                                    <img src={brand.img} alt='' />
                                </div>
                            
                        })}
                        {/*grow*/}
                        <div className="grow">
                            {this.state.grow.map(function(grow,i){
                                return (  
                                    <div key={i} className="grow_witness">
                                        <h2>{grow.grow_title}</h2>
                                        <p>{grow.grow_con}</p>
                                        <h4>{grow.grow_sign}</h4>
                                    </div>
                                )
                            })}
                            {/* grow img*/}
                            {this.state.grow.map(function(grow,i){
                                return (  
                                    <div key={i} className="grow_all">
                                       <img src={grow.grow_img} alt='' />
                                    </div>
                                )
                            })}
                        </div>
                        {/*journey*/}
                        <div className="journey">
                            {this.state.journey.map(function(journey,i){
                                return (  
                                    <div key={i}>
                                      <p>{journey.news_first}</p>
                                      <p>{journey.news_nth}</p>
                                      <p>{journey.news_last}</p>
                                    </div>
                                )
                            })}
                       </div>
                        
                        {/*interact lb*/}
                        <div className="interact">
                        <Carousel autoplay arrows="true">
                            {this.state.img.map(e=><div key={e.id}><img src={e.img} alt='' /></div>)}
                        </Carousel>
                            <div className="LBtn btn">&lt;<div className="fliament_left"></div></div>
                            <div className="RBtn btn">&gt;<div className="fliament_right"></div></div>
                            <div className="flia_left"></div>
                            <div className="car">
                                <img src="images/fw_icon_01.png"/>
                                <span className="car_move"><img src="images/fw_icon_02.png"/></span>
                            </div>
                            <div className="flia_right"></div>
                        </div>
                        {/*made*/}
                        <div className="made">
                            {this.state.made.map(function(made,i){
                                return (  
                                    <div key={i}>
                                      <p>{made.made_title}</p>
                                      <h4>{made.mode_word}</h4>
                                      <h4>{made.mode_news}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {/*contact_box*/}
                <div className="contact_box">
                    {this.state.con_img.map(function(foot,i){
                            return (
                                <div key={i} className="contact_tops">
                                    <img src={foot.img} alt='' />
                                </div>
                            )
                    })}
                    {/*contact_uls*/}
                    <ul className="contact_ulw">
                        {this.state.message.map(function(list,i){
                            return <li key={i}><a><img src={list.imgs} alt='' /></a></li>
                        })}
                    </ul>
                    {/*contact_word*/}
                    <div className="contact_word">
                        {this.state.hot_line.map(function(hot,i){
                            return <div key={i}>
                                <h5>{hot.hot}</h5>
                                <h3 className="light">{hot.line}</h3>
                            </div>
                        })}
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

export default About;