import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './system.css';
import './system_phone.css';
import Gold from './../gold/Gold';
import './../gold/gold.css';
import $ from 'jquery';
import conf from './../config';

class System extends Component {
    constructor(){
        super();
        this.state={
            system:[],
            message:[],
            hot_line:[],
            con_img:[]
        };
    };
    componentDidMount(){
        $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/system`,
            async:"true",
            success:function(pp){
                console.log(pp)
                this.setState({
                    system:pp
                })
                $(".db").click(function (){
                    (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
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
            if((document.body.scrollTop || document.documentElement.scrollTop)>=0){ 
                document.getElementById("head").style.width='100vw';
                document.getElementById("head").style.background='#fff';
                document.getElementById("head").style.boxShadow='0 0 30px rgba(0,0,0,.1)';
                document.getElementById("img").style.marginTop='-80px';
                document.getElementById("nav").className='navs';
                
            }
            else if((document.body.scrollTop || document.documentElement.scrollTop)>=h){ 
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
            <Router>
                <div>
                    <Route path="/Gold" component={Gold}></Route>
                    <Route exact path="/system" render={()=>(
                        <div className="wrap">
                            {/*show*/}
                            <div className="show_top"></div>
                            <div className="show_bottom" id="show_news"></div>
                            <div className="home_system" id="home"></div>
                            {/*content*/}
                            <div className="fixed_newss">
                                <h2 className="system_word pros">PRODUCTS</h2>
                                <ul className="system_box">
                                    {this.state.system.map(function(system,i){
                                        return <Link key={i}  to={`/Gold?id=${system.id}`}>
                                        <li className="db">
                                            <div className="system_tops">
                                                <img src={system.system_img}/>
                                            </div>
                                            <div className="system_bots">
                                                <h5>{system.system_word}</h5>
                                                <span>{system.system_new}</span>
                                            </div>
                                        </li>
                                        </Link>
                                    })}
                                </ul>
                                {/*contact_box*/}
                                <div className="contact_box">
                                    {this.state.con_img.map(function(foot,i){
                                        return (
                                            <div key={i} className="contact_tops">
                                                <img src={foot.img} alt='' />
                                            </div>
                                        )
                                    })}
                                    <ul className="contact_ulw">
                                        {this.state.message.map(function(list,i){
                                            return <li key={i}><a><img src={list.imgs} alt='' /></a></li>
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
                    )}>
                </Route>
            </div>
        </Router>

        )
    }
}

export default System;