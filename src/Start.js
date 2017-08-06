import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import $ from 'jquery';
import Vi from './vi/Vi';
import About from './about/About';
import System from './system/System'
import Supers from './supers/Supers';



class Start extends Component {
    constructor(){
        super();
        this.state={
            bundle:[],
            animate_one:[],
            animate_two:[],
            animate_three:[],
            hot_line:[],
            message:[],
            con_img:[]
        }
    }
    componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/bundle",
            async:"true",
            success:function(ss){
                this.setState({
                    bundle:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/animate_one",
            async:"true",
            success:function(ss){
                this.setState({
                    animate_one:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/animate_two",
            async:"true",
            success:function(ss){
                this.setState({
                    animate_two:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/animate_three",
            async:"true",
            success:function(ss){
                this.setState({
                    animate_three:ss
                })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/hot_line",
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
            url:"http://localhost:8100/tianfang/message",
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
            url:"http://localhost:8100/tianfang/con_img",
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
        

        $(function() {
            var count=0;
            setInterval(function () {
                $(".home>div").eq(count).fadeIn(1000).siblings().fadeOut(1000);
                if(count>=2){
                    count=-1;
                }
                count++;
            },2500);
        })
         $(window).scroll(function () {
            if($("body")||$("html").scrollTop()>=500){
                $('.content h2').css({
                    opacity:'1',
                    transition: 'all .6s ',
                });
                $('.bundle').css({
                    transform:'scale(1)'
                })
            }
        })
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
     
    render() {
        return (
        <Router>
            <div>
                <Route path="/About" component={About}></Route>
                <Route path="/Vi" component={Vi}></Route>
                <Route path="/System" component={System}></Route>
                <Route path="/Supers" component={Supers}></Route>


                <Route exact path="/" render={()=>(
                    <div className="wrap">
                        <div className="home" id="home">
                         {/*home*/}
                            <div className="home_one">
                                {this.state.animate_one.map(function(ani,i){
                                    return (
                                        <div key={i} className="animate animate_s">
                                            <h1>{ani.life}</h1>
                                            <h4>{ani.serves}</h4>
                                            <h6>{ani.read}</h6>
                                            <p></p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="home_two">
                                {this.state.animate_two.map(function(ani,i){
                                    return (
                                        <div key={i}className="animate animate_o">
                                            <h1>{ani.life}</h1>
                                            <h4>{ani.serves}</h4>
                                            <h6>{ani.read}</h6>
                                            <p></p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="home_three">
                                {this.state.animate_three.map(function(ani,i){
                                    return (
                                        <div key={i} className="animate">
                                            <h1>{ani.life}</h1>
                                            <h4>{ani.serves}</h4>
                                            <h6>{ani.read}</h6>
                                            <p></p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/*content*/}
                        <div className="content_box">
                            <div className="fixedBox">
                                <h2 className="content_h3">PRODUCTS</h2>
                                <div className="content_bundle">
                                    <ul>
                                        {this.state.bundle.map(function(bundle,i){
                                            return (
                                                <div key={i} className="bundle">
                                                    <Link to={bundle.link}>
                                                        <li>
                                                            <p className="none"><img src={bundle.bundle_img}/></p>
                                                            <p className="word">{bundle.bundle_word}</p>
                                                        </li>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {/*contact*/}
                                <div className="contact_box">
                                    {this.state.con_img.map(function(foot,i){
                                        return (
                                            <div key={i} className="contact_tops">
                                                <img src={foot.img} alt='' />
                                            </div>
                                        )
                                    })}
                                    <ul className="contact_ulw" id="contact_ul">
                                        {this.state.message.map(function(list,i){
                                            return <li key={i}>
                                                    <a><img src={list.imgs} alt='' /></a>
                                                </li>
                                        })}
                                    </ul>
                                    <div className="contact_word">
                                        {this.state.hot_line.map(function(hot,i){
                                            return <div key={i}>
                                                <h5>{hot.hot}</h5>
                                                <h3 className="light">{hot.line}</h3>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}></Route>
            </div>
        </Router>
    );
  }
}

export default Start;
