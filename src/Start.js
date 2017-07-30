import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import $ from 'jquery';



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
        document.addEventListener('scroll', this.handleScroll.bind(this));

        $(function() {
            var count=0;
            var length = 2;
            setInterval(function () {
                count++;
                if(count>2){
                    count=0;
                }
                $(".home div").eq(count).fadeIn(600).siblings().fadeOut(600);
            },3000);
        })
         $(window).scroll(function () {
            if($("body").scrollTop()>=500){
                $('.content h2').css({
                    opacity:'1',
                    transition: 'all .6s ',
                });
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
            document.getElementById("nav").className='navs';
            
        }
        else{
            document.getElementById("head").style.width='100vw';
            document.getElementById("head").style.background='transparent';
            document.getElementById("head").style.boxShadow='';
            document.getElementById("img").style.marginTop='';
            document.getElementById("nav").className='nav';
        }
    }
     
    render() {
        return (
        <Router>

            <div className="wrap">
      	        <div className="home">
                    <div className="home_one" id="home">
                        {this.state.animate_one.map(function(ani,i){
                            return (
                                    <div className="animate animate_s">
                                        <h1>{ani.life}</h1>
                                        <h4>{ani.serves}</h4>
                                        <h6>{ani.read}</h6>
                                        <p></p>
                                    </div>
                            )
                        })}
                    </div>
                    <div className="home_two" id="home">
                        {this.state.animate_two.map(function(ani,i){
                            return (
                                    <div className="animate animate_o">
                                        <h1>{ani.life}</h1>
                                        <h4>{ani.serves}</h4>
                                        <h6>{ani.read}</h6>
                                        <p></p>
                                    </div>
                            )
                        })}
                        
                    </div>
                    <div className="home_three" id="home">
                        {this.state.animate_three.map(function(ani,i){
                            return (
                                    <div className="animate">
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
                        <h2 className="content_h2">PRODUCTS</h2>
                        <div className="content_bundle">
                            <ul>
                                {this.state.bundle.map(function(bundle,i){
                                    return (
                                            <div className="bundle">
                                                <Link key={i}  to={bundle.link}><li>
                                                    <p className="none"><img src={bundle.bundle_img}/></p>
                                                    <p className="word">{bundle.bundle_word}</p>
                                                </li></Link>
                                            </div>
                                    )
                              })}
                            </ul>
                        </div>
                       
                        {/*contact*/}
                        <div className="contact_box">
                            {this.state.con_img.map(function(foot,i){
                                    return (
                                        <div className="contact_tops">
                                            <img src={foot.img} alt='' />
                                        </div>
                                    )
                            })}
                            <ul className="contact_uls" id="contact_ul">
                                {this.state.message.map(function(list,i){
                                    return <li><a><img src={list.imgs} alt='' /></a></li>
                                })}
                            </ul>
                            <div className="contact_word">
                                {this.state.hot_line.map(function(hot,i){
                                    return <div>
                                        <h5>{hot.hot}</h5>
                                        <h3 className="light">{hot.line}</h3>
                                    </div>
                                })}
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
