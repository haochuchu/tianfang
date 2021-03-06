import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './gold.css';
import './gold_phone.css';
import $ from 'jquery';
import conf from './../config';

class Gold extends Component {
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
        var id=window.location.href.split('=')[1];
        $.ajax({
            url:`${conf.url}/tianfang/xiangqing3`,
            type:'post',
            data:{id:id},
            success:function(e){
                this.setState({
                    system:e
                })
            }.bind(this)
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
			<div className="wrap">
                {/*show*/}
				<div className="show_top"></div>
                <div className="show_bottom" id="showsss"></div>
                <div className="home_gold" id="home"></div>

                {/*content*/}
                {/*Main_gold*/}
                <div className="Main_gold">
                    {this.state.system.map(function(gg,i){
                        return <div key={i}>
                            <h1>{gg.con}</h1>
                            <div className="gold_img">
                                {gg.more.split('?').map(function(oo,i){
                                    return <img key={i} src={'http://localhost:8100/images/'+oo} alt="" />
                                })}
                            </div>    
                        </div>
                    })}
                    
                    {/*contact*/}
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
		)
	}
}

export default Gold;