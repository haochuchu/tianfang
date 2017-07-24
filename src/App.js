import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery';

import './App.css';

import Start from './Start';
import About from './about/About';
import Advantage from './advantage/Advantage';
import Contact from './contact/Contact';
import News from './news/News';
import Vi from './vi/Vi';
import System from './system/System';


class App extends Component {
  constructor(){
        super();
        this.state={
            nav:[]
        };

        this.data={/*"nav":[{"tita":"CASE 案例","titb":"?"},{"tita":"WE 关于天坊","titb":"/about"},{"tita":"ADVANTAGE 优势","titb":"/advantage"},{"tita":"NEWS 资讯","titb":"/news"},{"tita":"CONTACT 联系","titb":"/contact"}],*/
        "first_page":[{"pic":"images/icon_01.png","sTitle":"标志+VI","link":"/vi"},{"pic":"images/icon_02.png","sTitle":"品牌+战略","link":"/about"},{"pic":"images/icon_03.png","sTitle":"网络+互动","link":"/system"},{"pic":"images/icon_04.png","sTitle":"空间+导视","link":"/system"},{"pic":"images/icon_05.png","sTitle":"视频+动画","link":"/system"},{"pic":"images/icon_06.png","sTitle":"720全景拍摄","link":"/system"},{"pic":"images/icon_07.png","sTitle":"域名服务器","link":"?"},{"pic":"images/icon_08.png","sTitle":"运营+管理","link":"?"}]
        }
    };
    componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/nav",
            async:"true",
            success:function(ss){
                this.setState({
                    nav:ss
                })
                 $("#list a").click(function (){
                (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
                var index=$(this).index();
                if (index==0) {
                    if(num==0){
                        first_page.style.transform="perspective(800px) rotateX(0)";
                        first_page.style.boxShadow='0 0 30px rgba(0,0,0,.1)';
                        num++;
                        return;
                    }else if(num==1){
                        first_page.style.transform="perspective(800px) rotateX(-90deg)";
                        num=0;
                        return;
                    }  
                } else{
                    first_page.style.transform="perspective(800px) rotateX(-90deg)";
                    num=0;
                    return;
                };
            })
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        var list=document.getElementById("list");
        var first_page=document.getElementById("first_page");
        var num=0;
           
        $("#first_page a,#logo").click(function (){
            (document.body.scrollTop=0) || (document.documentElement.scrollTop=0);
            var indexs=$('first_page').children('a').index();
            if (indexs==0) {
                if(num==0){
                    first_page.style.transform="perspective(800px) rotateX(0)";
                    first_page.style.boxShadow='0 0 30px rgba(0,0,0,.1)';
                    num++;
                    return;
                }else if(num==1){
                    first_page.style.transform="perspective(800px) rotateX(-90deg)";
                    num=0;
                    return;
                }  
            } else{
                first_page.style.transform="perspective(800px) rotateX(-90deg)";
                num=0;
                return;
            };
        })
    } 
    render() {
        return (
        <Router>
            <div className="wrap">
                <div className="show_top"></div>
                <div className="show_bottom" id="shows"></div>
                {/*header*/}
                    <div className="header" id="head">
                        {/*logo*/}
                        <div className="logo" id="logo">
                            <Link to="/"><img id="img" src="images/logo.png" /></Link>
                        </div>
                        {/*navigator*/}
                        <div className="nav" id="nav">
                            <ul id="list">
                                {this.state.nav.map(function(con,i){
                                    return <Link key={i}  to={con.titb}><li><a>{con.tita}</a>
                                    <p className="nav_box"><span>{con.tita}</span></p>
                                    <span className="sild_dow">{con.tita}</span>
                                    </li></Link>
                                })}
                            </ul>
                            <p className="start"> 
                                <span id="title">Start</span>
                            </p>
                        </div>
                    </div>
                    <Route exact path="/" component={Start}></Route>
            		<Route path="/About" component={About}></Route>
            		<Route path="/Advantage" component={Advantage}></Route>
            		<Route path="/News" component={News}></Route>
            		<Route path="/Contact" component={Contact}></Route>
                    {/*CASE案例*/}
                    <ul className="first_page" id="first_page">
                        {this.data.first_page.map(function(con,i){
                                    return <Link key={i}  to={con.link}><li><a><span><img src={con.pic} /></span>
                                <span>{con.sTitle}</span></a>
                                    </li></Link>
                        })}    
                    </ul>
                    <Route path="/Vi" component={Vi}></Route>
                    <Route path="/System" component={System}></Route>
                {/*footer*/}
                <div className="footer">
                    <span>2007-2017版权所有</span>
                    <a>天坊创意品牌策划机构</a>
                    <a>京ICP备15003046号</a>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
