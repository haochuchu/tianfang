import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './news.css';
import './news_phone.css';
import Prize from './../newsChild/Prize';
import $ from 'jquery';
import conf from './../config';

class News extends Component {
    constructor(){
        super();
        this.state={
            prize:[],
            message:[],
            hot_line:[],
            con_img:[]
       };
    };
	componentDidMount(){
        $.ajax({
            type:"post",
            url:`${conf.url}/tianfang/prize`,
            async:"true",
            success:function(pp){
                this.setState({
                    prize:pp
                })
                $(".top_new").click(function (){
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
                    <Route path="/Prize" component={Prize}></Route>
                    <Route exact path="/News" render={()=>(
        			<div className="wraps">
                      {/*show*/}
        				<div className="show_top"></div>
                        <div className="show_bottom" id="show_news"></div>
                        <div className="home_news" id="home"></div>
                        {/*content*/}
                        <div className="fixed_news" id="fixed_news">
                            <h2>NEWS</h2>
                            <div className="prize">
                                 <ul>
                                    {this.state.prize.map(function(pp,i){
                                    return  <Link key={i}  to={`/Prize?id=${pp.id}`} className="top_new">
                                    <li>
                                        <div className="prize_word">
                                        	<h6>{pp.prize_title}</h6>
                                        	  <h4>{pp.prize_word}</h4>
                                        	<span>{pp.prize_new}</span>
                                        </div>
                                        <div className="prize_lore">
                                            <img src={pp.prize_img}/>
                                        </div>
                                    </li>
                                    </Link>
                                    })}
                                </ul>
                            </div>
                            {/*contact*/}
                            <div className="contact_boxs">
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
               
                )}></Route>
            </div>
            </Router>
		)
	}
}

export default News;