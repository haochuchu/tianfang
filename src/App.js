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
import System from './system/System'
import Prize from './newsChild/Prize';
import Case from './case/Case';



class App extends Component {
  constructor(){
        super();
        this.state={
            nav:[],
            footer:[],
            first_page:[]
        };
    };
    componentDidMount(){
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/first_page",
            async:"true",
            success:function(pp){
                console.log(pp)
                this.setState({
                    first_page:pp
                })
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
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
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
        $.ajax({
            type:"post",
            url:"http://localhost:8100/tianfang/footer",
            async:"true",
            success:function(ss){
                console.log(ss)
                this.setState({
                    footer:ss
                })
                console.log(this.state.footer)
            }.bind(this),
            error:function(){
                alert('失败了');
            }
        })
        var list=document.getElementById("list");
        var first_page=document.getElementById("first_page");
        var num=0;
           
        
    } 
    render() {
        return (
        <Router>
            <div className="wrap">
                <div className="show_top" ></div>
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
                                    return <Link key={i}  to={`${con.titb}`}><li><a>{con.tita}</a>
                                    <p className="nav_box"><span>{con.tita}</span></p>
                                    <span className="sild_dow">{con.tita}</span>
                                    </li></Link>
                                })}
                            </ul>
                            
                        </div>
                    </div>
                    <Route exact path="/" component={Start}></Route>
            		<Route path="/About" component={About}></Route>
            		<Route path="/Advantage" component={Advantage}></Route>
            		<Route path="/News" component={News}></Route>

            		<Route path="/Contact" component={Contact}></Route> 
                    <Route path="/Case" component={Case}></Route>  
                    <Route path="/Prize" component={Prize}></Route>


                    {/*CASE案例*/}
                    <ul className="first_page" id="first_page">
                        {this.state.first_page.map(function(con,i){
                                    return <Link key={i}  to={con.link}><li><a><span><img src={con.pic} /></span>
                                <span>{con.sTitle}</span></a>
                                    </li></Link>
                        })}    
                    </ul>
                    <Route path="/Vi" component={Vi}></Route>
                    <Route path="/System" component={System}></Route>
                {/*footer*/}
                <div className="footer">

                {this.state.footer.map(function(con,i){
                    return  <div key={i}>
                            <span>{con.copyright}</span>
                            <a>{con.ality}</a>
                            <a>{con.address}</a>
                    </div>
                        })}    

                </div>
            </div>
        </Router>
    );
  }
}

export default App;
