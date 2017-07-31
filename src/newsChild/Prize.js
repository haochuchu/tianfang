import React, { Component } from 'react';
import  {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './prize.css';
import './prize_phone.css';
import $ from 'jquery';

class Prize extends Component {
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
        var id=window.location.href.split('?')[1];
            $.ajax({
                url:'http://localhost:8100/tianfang/xiangqing2',
                type:'post',
                data:{id:id},
                success:function(e){
                    this.setState({
                        prize:e
                    })
                }.bind(this)
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
        //回到顶部
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
        var h=document.getElementById('home').offsetHeight-document.getElementById('head').offsetHeight;
        if(window.screen.width>414){
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
                <div className="show_bottom" id="show_news"></div>
                <div className="home_news" id="home"></div>
                {/*content*/}
                    <div className="prizes_box">
                          <h2 className="prize_h2">NEWS</h2>
                          <p>Jun 08,2017</p>  
                        <div className="prize_box">
                            {this.state.prize.map(function(dd,i){
                                return <div key={i}>
                                    <h3 className="h_word">{dd.prize_word}</h3>
                                    <div className="prize_design">
                                        <p>{dd.con}</p>
                                        <ul className="printAll">
                                            {dd.more.split('?').map(function(oo,i){
                                            return <li className="print_one">
                                                       <img src={'http://localhost:8100/images/'+oo} alt="" />
                                            </li>
                                            })}
                                            
                                        </ul>    
                                    </div>    
                                </div>
                            })}
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
                            <ul className="contact_uls">
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
		)
	}
}

export default Prize;